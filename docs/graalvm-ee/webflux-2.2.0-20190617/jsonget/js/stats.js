var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "42893923",
        "ok": "42893473",
        "ko": "450"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10002"
    },
    "maxResponseTime": {
        "total": "60322",
        "ok": "755",
        "ko": "60322"
    },
    "meanResponseTime": {
        "total": "71",
        "ok": "70",
        "ko": "24406"
    },
    "standardDeviation": {
        "total": "118",
        "ok": "48",
        "ko": "22624"
    },
    "percentiles1": {
        "total": "66",
        "ok": "65",
        "ko": "10088"
    },
    "percentiles2": {
        "total": "102",
        "ok": "102",
        "ko": "60031"
    },
    "percentiles3": {
        "total": "153",
        "ok": "153",
        "ko": "60147"
    },
    "percentiles4": {
        "total": "213",
        "ok": "213",
        "ko": "60222"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 42893473,
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
        "count": 450,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "35715.173",
        "ok": "35714.799",
        "ko": "0.375"
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
        "total": "42893923",
        "ok": "42893473",
        "ko": "450"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10002"
    },
    "maxResponseTime": {
        "total": "60322",
        "ok": "755",
        "ko": "60322"
    },
    "meanResponseTime": {
        "total": "71",
        "ok": "70",
        "ko": "24406"
    },
    "standardDeviation": {
        "total": "118",
        "ok": "48",
        "ko": "22624"
    },
    "percentiles1": {
        "total": "66",
        "ok": "65",
        "ko": "10088"
    },
    "percentiles2": {
        "total": "103",
        "ok": "102",
        "ko": "60031"
    },
    "percentiles3": {
        "total": "153",
        "ok": "153",
        "ko": "60147"
    },
    "percentiles4": {
        "total": "214",
        "ok": "213",
        "ko": "60222"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 42893473,
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
        "count": 450,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "35715.173",
        "ok": "35714.799",
        "ko": "0.375"
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
