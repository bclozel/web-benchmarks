/*
 * Copyright 2002-2018 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const {exec} = require('child_process');
const fs = require('fs');
const path = require('path');
const prettyMs = require('pretty-ms');
const configPath = path.join(__dirname, '..', 'config', 'config.json');
const data = fs.readFileSync(configPath);
const config = JSON.parse(data.toString());

exports.getAllPlans = function getAllPlans() {
    return Object.keys(config.plans);
};

exports.printSuite = function printSuite(planIds, serverHost) {

    let totalTime = 0;
    planIds
        .map(id => {
            if (!config.plans[id]) {
                console.log(`No plan configuration with id ${id} in ${configPath}`);
            }
            let plan = new Plan(id, serverHost, config);
            totalTime += plan.getTotalDuration();
            return plan;
        })
        .forEach(plan => console.log(plan.toString()));
    console.log(`Est. Total Duration: ${prettyMs(totalTime)}`);
};

exports.runBenchMarkPlan = function runWrkBenchMark(planId, serverHost) {
    if(!config.plans[planId]) {
        reject(`No plan configuration with id ${planId} in ${configPath}`);
    }
    const plan = new Plan(planId, serverHost, config);
    return plan.run().then(() => Promise.resolve(plan.getOutFile()));
};

class Plan {

    constructor(id, serverHost, config) {
        this.id = id;
        this.serverHost = serverHost;
        
        let planConfig = config.plans[id];
        this.name = planConfig.name;
        this.endpoint = planConfig.endpoint;
        this.accept = planConfig.accept;
        this.args = planConfig.args;
        this.connections = planConfig.connections;
        this.rates = planConfig.rates;
        this.duration = planConfig.duration;
        this.script = path.join(__dirname, '..', 'config', planConfig.script);

        this.warmupDuration = config.warmup_duration;
        this.sleepDuration = config.sleep_duration;
        this.maxThreads = config.max_threads;
        this.outFileDesc = fs.openSync(this.getOutFile(), 'w');
    }

    getOutFile() {
        return path.join(__dirname, '..', `out/${this.id}.log`);
    }

    getSteps() {
        let steps = [];
        steps.push(new WarmUpStep(this));
        for (let rate of this.rates) {
           steps.push(new Step(this, this.duration, rate), new SleepStep(this));
        }
        return steps;
    }

    getTotalDuration() {
        return this.getSteps()
            .map(step => step.duration * 1000)
            .reduce((previousValue, currentValue) => previousValue+currentValue);
    }

    run() {
        let done = Promise.resolve();
        for (let step of this.getSteps()) {
            done = done.then(() => step.run(this.outFileDesc));
        }
        return done.finally(() => fs.closeSync(this.outFileDesc));
    }

    toString() {
        return `
Plan: '${this.id}' - ${this.name}
Endpoint: http://${this.serverHost}${this.endpoint}
Req. Rate: ${this.rates}
Est. Duration: ${prettyMs(this.getTotalDuration())}
`
    }

}

class Step {

    constructor(plan, duration, rate) {
        this.plan = plan;
        this.duration = duration;
        this.rate = rate;
    }

    getArgs() {
        let url = `http://${this.plan.serverHost}${this.plan.endpoint}`;
        return [`--header 'Host: ${this.plan.serverHost}'`, `--header 'Accept: ${this.plan.accept}'`,
            `--duration ${this.duration}s`, `-c ${this.plan.connections}`, '--latency',
            `--threads ${this.plan.maxThreads}`, `--script ${this.plan.script}`,
            `--rate ${this.rate}`, `${url}`];
    }

    getBanner() {
        const args = this.getArgs().join(" ");
        return `

---------------------------------------------------------
Running Benchmark for: ${this.plan.name} at rate ${this.rate}
wrk ${args}
---------------------------------------------------------

`;
    }

    run(outFileDesc) {
        fs.writeSync(outFileDesc, this.getBanner());
        return new Promise((resolve, reject) => {
            exec('wrk ' + this.getArgs().join(" "),
                (error, stdout, stderr) => {
                    if (error) {
                        reject(`wrk process exited with ${error}`);
                    }
                    fs.writeSync(outFileDesc, stdout);
                    resolve();
                });
        });
    }
}

class WarmUpStep extends Step {

    constructor(plan) {
        super(plan, plan.warmupDuration, 100);
    }

    getBanner() {
        const args = this.getArgs().join(" ");
        return `

---------------------------------------------------------
Running Warmup for: ${this.plan.name} at rate ${this.rate}
wrk ${args}
---------------------------------------------------------

`;
    }

}

class SleepStep extends Step {

    constructor(plan) {
        super(plan, plan.sleepDuration);
    }

    run(outFileDesc) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, this.duration * 1000);
        });
    }
}

