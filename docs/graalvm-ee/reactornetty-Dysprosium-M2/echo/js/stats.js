var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "43632867",
        "ok": "43632446",
        "ko": "421"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10002"
    },
    "maxResponseTime": {
        "total": "60288",
        "ok": "756",
        "ko": "60288"
    },
    "meanResponseTime": {
        "total": "69",
        "ok": "69",
        "ko": "25402"
    },
    "standardDeviation": {
        "total": "116",
        "ok": "46",
        "ko": "23060"
    },
    "percentiles1": {
        "total": "65",
        "ok": "65",
        "ko": "10101"
    },
    "percentiles2": {
        "total": "103",
        "ok": "103",
        "ko": "60050"
    },
    "percentiles3": {
        "total": "148",
        "ok": "148",
        "ko": "60139"
    },
    "percentiles4": {
        "total": "187",
        "ok": "187",
        "ko": "60203"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 43632446,
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
        "count": 421,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "36360.723",
        "ok": "36360.372",
        "ko": "0.351"
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
        "total": "43632867",
        "ok": "43632446",
        "ko": "421"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10002"
    },
    "maxResponseTime": {
        "total": "60288",
        "ok": "756",
        "ko": "60288"
    },
    "meanResponseTime": {
        "total": "69",
        "ok": "69",
        "ko": "25402"
    },
    "standardDeviation": {
        "total": "116",
        "ok": "46",
        "ko": "23060"
    },
    "percentiles1": {
        "total": "65",
        "ok": "65",
        "ko": "10101"
    },
    "percentiles2": {
        "total": "103",
        "ok": "103",
        "ko": "60050"
    },
    "percentiles3": {
        "total": "148",
        "ok": "148",
        "ko": "60139"
    },
    "percentiles4": {
        "total": "187",
        "ok": "187",
        "ko": "60203"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 43632446,
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
        "count": 421,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "36360.723",
        "ok": "36360.372",
        "ko": "0.351"
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
