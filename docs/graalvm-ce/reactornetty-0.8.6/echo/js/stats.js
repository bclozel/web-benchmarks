var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "36406306",
        "ok": "36405940",
        "ko": "366"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60370",
        "ok": "1210",
        "ko": "60370"
    },
    "meanResponseTime": {
        "total": "83",
        "ok": "83",
        "ko": "27710"
    },
    "standardDeviation": {
        "total": "128",
        "ok": "54",
        "ko": "23897"
    },
    "percentiles1": {
        "total": "79",
        "ok": "79",
        "ko": "10119"
    },
    "percentiles2": {
        "total": "124",
        "ok": "124",
        "ko": "60055"
    },
    "percentiles3": {
        "total": "173",
        "ok": "173",
        "ko": "60167"
    },
    "percentiles4": {
        "total": "216",
        "ok": "216",
        "ko": "60292"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 36405939,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 366,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "30338.588",
        "ok": "30338.283",
        "ko": "0.305"
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
        "total": "36406306",
        "ok": "36405940",
        "ko": "366"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60370",
        "ok": "1210",
        "ko": "60370"
    },
    "meanResponseTime": {
        "total": "83",
        "ok": "83",
        "ko": "27710"
    },
    "standardDeviation": {
        "total": "128",
        "ok": "54",
        "ko": "23897"
    },
    "percentiles1": {
        "total": "79",
        "ok": "79",
        "ko": "10119"
    },
    "percentiles2": {
        "total": "124",
        "ok": "124",
        "ko": "60055"
    },
    "percentiles3": {
        "total": "173",
        "ok": "173",
        "ko": "60167"
    },
    "percentiles4": {
        "total": "216",
        "ok": "216",
        "ko": "60292"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 36405939,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 366,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "30338.588",
        "ok": "30338.283",
        "ko": "0.305"
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
