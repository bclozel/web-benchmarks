var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "34477512",
        "ok": "34477392",
        "ko": "120"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10003"
    },
    "maxResponseTime": {
        "total": "60331",
        "ok": "831",
        "ko": "60331"
    },
    "meanResponseTime": {
        "total": "88",
        "ok": "88",
        "ko": "55101"
    },
    "standardDeviation": {
        "total": "120",
        "ok": "57",
        "ko": "15007"
    },
    "percentiles1": {
        "total": "84",
        "ok": "84",
        "ko": "60095"
    },
    "percentiles2": {
        "total": "133",
        "ok": "133",
        "ko": "60140"
    },
    "percentiles3": {
        "total": "180",
        "ok": "180",
        "ko": "60186"
    },
    "percentiles4": {
        "total": "220",
        "ok": "219",
        "ko": "60269"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 34477390,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 120,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "28707.337",
        "ok": "28707.237",
        "ko": "0.1"
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
        "total": "34477512",
        "ok": "34477392",
        "ko": "120"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10003"
    },
    "maxResponseTime": {
        "total": "60331",
        "ok": "831",
        "ko": "60331"
    },
    "meanResponseTime": {
        "total": "88",
        "ok": "88",
        "ko": "55101"
    },
    "standardDeviation": {
        "total": "120",
        "ok": "57",
        "ko": "15007"
    },
    "percentiles1": {
        "total": "84",
        "ok": "84",
        "ko": "60095"
    },
    "percentiles2": {
        "total": "133",
        "ok": "133",
        "ko": "60140"
    },
    "percentiles3": {
        "total": "180",
        "ok": "180",
        "ko": "60186"
    },
    "percentiles4": {
        "total": "220",
        "ok": "220",
        "ko": "60269"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 34477390,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 120,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "28707.337",
        "ok": "28707.237",
        "ko": "0.1"
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
