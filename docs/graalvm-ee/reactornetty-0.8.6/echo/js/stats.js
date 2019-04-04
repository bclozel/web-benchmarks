var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "37064269",
        "ok": "37063847",
        "ko": "422"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60339",
        "ok": "736",
        "ko": "60339"
    },
    "meanResponseTime": {
        "total": "82",
        "ok": "81",
        "ko": "25373"
    },
    "standardDeviation": {
        "total": "127",
        "ok": "52",
        "ko": "23053"
    },
    "percentiles1": {
        "total": "79",
        "ok": "79",
        "ko": "10103"
    },
    "percentiles2": {
        "total": "121",
        "ok": "121",
        "ko": "60053"
    },
    "percentiles3": {
        "total": "167",
        "ok": "167",
        "ko": "60177"
    },
    "percentiles4": {
        "total": "211",
        "ok": "211",
        "ko": "60292"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 37063847,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 422,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "30886.891",
        "ok": "30886.539",
        "ko": "0.352"
    }
},
contents: {
"req_echo-cbb11": {
        type: "REQUEST",
        name: "echo",
path: "echo",
pathFormatted: "req_echo-cbb11",
stats: {
    "name": "echo",
    "numberOfRequests": {
        "total": "37064269",
        "ok": "37063847",
        "ko": "422"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60339",
        "ok": "736",
        "ko": "60339"
    },
    "meanResponseTime": {
        "total": "82",
        "ok": "81",
        "ko": "25373"
    },
    "standardDeviation": {
        "total": "127",
        "ok": "52",
        "ko": "23053"
    },
    "percentiles1": {
        "total": "79",
        "ok": "79",
        "ko": "10103"
    },
    "percentiles2": {
        "total": "121",
        "ok": "121",
        "ko": "60053"
    },
    "percentiles3": {
        "total": "167",
        "ok": "167",
        "ko": "60177"
    },
    "percentiles4": {
        "total": "211",
        "ok": "211",
        "ko": "60292"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 37063847,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 422,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "30886.891",
        "ok": "30886.539",
        "ko": "0.352"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
