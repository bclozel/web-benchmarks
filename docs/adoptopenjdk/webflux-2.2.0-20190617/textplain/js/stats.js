var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "46822685",
        "ok": "46822579",
        "ko": "106"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10034"
    },
    "maxResponseTime": {
        "total": "60211",
        "ok": "726",
        "ko": "60211"
    },
    "meanResponseTime": {
        "total": "65",
        "ok": "64",
        "ko": "59130"
    },
    "standardDeviation": {
        "total": "101",
        "ok": "46",
        "ko": "6800"
    },
    "percentiles1": {
        "total": "59",
        "ok": "59",
        "ko": "60067"
    },
    "percentiles2": {
        "total": "92",
        "ok": "92",
        "ko": "60103"
    },
    "percentiles3": {
        "total": "146",
        "ok": "147",
        "ko": "60144"
    },
    "percentiles4": {
        "total": "206",
        "ok": "206",
        "ko": "60189"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 46822579,
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
        "count": 106,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "39018.904",
        "ok": "39018.816",
        "ko": "0.088"
    }
},
contents: {
"req_plain-text-10504": {
        type: "REQUEST",
        name: "plain_text",
path: "plain_text",
pathFormatted: "req_plain-text-10504",
stats: {
    "name": "plain_text",
    "numberOfRequests": {
        "total": "46822685",
        "ok": "46822579",
        "ko": "106"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10034"
    },
    "maxResponseTime": {
        "total": "60211",
        "ok": "726",
        "ko": "60211"
    },
    "meanResponseTime": {
        "total": "65",
        "ok": "64",
        "ko": "59130"
    },
    "standardDeviation": {
        "total": "101",
        "ok": "46",
        "ko": "6800"
    },
    "percentiles1": {
        "total": "59",
        "ok": "59",
        "ko": "60067"
    },
    "percentiles2": {
        "total": "92",
        "ok": "92",
        "ko": "60103"
    },
    "percentiles3": {
        "total": "147",
        "ok": "147",
        "ko": "60144"
    },
    "percentiles4": {
        "total": "206",
        "ok": "206",
        "ko": "60189"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 46822579,
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
        "count": 106,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "39018.904",
        "ok": "39018.816",
        "ko": "0.088"
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
