var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "33680545",
        "ok": "33680177",
        "ko": "368"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60349",
        "ok": "1045",
        "ko": "60349"
    },
    "meanResponseTime": {
        "total": "90",
        "ok": "90",
        "ko": "27615"
    },
    "standardDeviation": {
        "total": "136",
        "ok": "63",
        "ko": "23873"
    },
    "percentiles1": {
        "total": "81",
        "ok": "81",
        "ko": "10115"
    },
    "percentiles2": {
        "total": "129",
        "ok": "130",
        "ko": "60058"
    },
    "percentiles3": {
        "total": "200",
        "ok": "200",
        "ko": "60188"
    },
    "percentiles4": {
        "total": "284",
        "ok": "284",
        "ko": "60278"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 33680162,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 15,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 368,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "28043.751",
        "ok": "28043.445",
        "ko": "0.306"
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
        "total": "33680545",
        "ok": "33680177",
        "ko": "368"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60349",
        "ok": "1045",
        "ko": "60349"
    },
    "meanResponseTime": {
        "total": "90",
        "ok": "90",
        "ko": "27615"
    },
    "standardDeviation": {
        "total": "136",
        "ok": "63",
        "ko": "23873"
    },
    "percentiles1": {
        "total": "81",
        "ok": "81",
        "ko": "10115"
    },
    "percentiles2": {
        "total": "130",
        "ok": "130",
        "ko": "60058"
    },
    "percentiles3": {
        "total": "200",
        "ok": "200",
        "ko": "60188"
    },
    "percentiles4": {
        "total": "284",
        "ok": "284",
        "ko": "60278"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 33680162,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 15,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 368,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "28043.751",
        "ok": "28043.445",
        "ko": "0.306"
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
