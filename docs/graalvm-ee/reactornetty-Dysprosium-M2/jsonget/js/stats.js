var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "45775347",
        "ok": "45774922",
        "ko": "425"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10002"
    },
    "maxResponseTime": {
        "total": "60252",
        "ok": "643",
        "ko": "60252"
    },
    "meanResponseTime": {
        "total": "66",
        "ok": "66",
        "ko": "25244"
    },
    "standardDeviation": {
        "total": "113",
        "ok": "43",
        "ko": "23000"
    },
    "percentiles1": {
        "total": "64",
        "ok": "63",
        "ko": "10080"
    },
    "percentiles2": {
        "total": "98",
        "ok": "98",
        "ko": "60029"
    },
    "percentiles3": {
        "total": "138",
        "ok": "138",
        "ko": "60131"
    },
    "percentiles4": {
        "total": "174",
        "ok": "174",
        "ko": "60183"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 45774922,
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
        "count": 425,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "38114.361",
        "ok": "38114.007",
        "ko": "0.354"
    }
},
contents: {
"req_jsonget-66b2f": {
        type: "REQUEST",
        name: "jsonGet",
path: "jsonGet",
pathFormatted: "req_jsonget-66b2f",
stats: {
    "name": "jsonGet",
    "numberOfRequests": {
        "total": "45775347",
        "ok": "45774922",
        "ko": "425"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10002"
    },
    "maxResponseTime": {
        "total": "60252",
        "ok": "643",
        "ko": "60252"
    },
    "meanResponseTime": {
        "total": "66",
        "ok": "66",
        "ko": "25244"
    },
    "standardDeviation": {
        "total": "113",
        "ok": "43",
        "ko": "23000"
    },
    "percentiles1": {
        "total": "64",
        "ok": "64",
        "ko": "10080"
    },
    "percentiles2": {
        "total": "98",
        "ok": "98",
        "ko": "60029"
    },
    "percentiles3": {
        "total": "138",
        "ok": "138",
        "ko": "60131"
    },
    "percentiles4": {
        "total": "174",
        "ok": "174",
        "ko": "60183"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 45774922,
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
        "count": 425,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "38114.361",
        "ok": "38114.007",
        "ko": "0.354"
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
