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
const program = require('commander');
const fs = require('fs');
const path = require('path');
const Gists = require('gists');
const SlackWebhook = require('slack-webhook');
const client = require("../lib/benchmark-client");

const githubCredentials = {"token": process.env.GITHUB_TOKEN};
const slacWebhookURL = process.env.SLACK_WEBHOOK_URL;

program
    .version('0.1.0');

program
    .usage('[options] <name> <host>')
    .option('-p, --plans <plans>', 'List of plans to run, defaults to all plans', (val) => val.split(','))
    .option('-v, --verbose', 'Print out the benchmark suite before execution')
    .option('-g, --gist', 'Push the results into a new gist (requires GITHUB_TOKEN)')
    .option('-s, --slack', 'Push a notification to Slack when done(requires SLACK_WEBHOOK_URL)')
    .parse(process.argv);

if (!program.args.length) program.help();
let plans = program.plans || client.getAllPlans();
if (program.verbose) {
    client.printSuite(plans, program.args[1]);
}

runPlans(plans, program.args[1]).then(files => {
    if (program.gist) {
        createGist(githubCredentials, program.args[0], files);
    }
    if(program.slack) {
        postSlackNotification(slacWebhookURL, program.args[0]);
    }
});


function runPlans(plans, host) {
    const files = [];
    let done = Promise.resolve();
    for(let plan of plans) {
        done = done
            .then(() => client.runBenchMarkPlan(plan, host))
            .then(outFile => {
                files.push(outFile);
                return Promise.resolve();
            });
    }
    return done.then(() => Promise.resolve(files));
}

function createGist(githubCredentials, name, files) {
    const gists = new Gists(githubCredentials);
    const gistReport = {
        description: `Benchmark for ${name} - ${new Date().toLocaleString()}`,
        public: false,
        files: {}
    };
    files.forEach(file => {
        gistReport.files[path.basename(file)] = {
            "content": fs.readFileSync(file, "utf8")
        }
    });
    gists.create(gistReport);
}

function postSlackNotification(slacWebhookURL, name) {
    let slack = new SlackWebhook(slacWebhookURL);
    slack.send(`Benchmark for ${name} finished on ${new Date().toLocaleString()}`);
}