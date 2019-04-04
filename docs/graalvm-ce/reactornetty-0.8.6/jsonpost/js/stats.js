var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "34800625",
        "ok": "34800258",
        "ko": "367"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60326",
        "ok": "1492",
        "ko": "60326"
    },
    "meanResponseTime": {
        "total": "87",
        "ok": "87",
        "ko": "27668"
    },
    "standardDeviation": {
        "total": "131",
        "ok": "55",
        "ko": "23882"
    },
    "percentiles1": {
        "total": "84",
        "ok": "84",
        "ko": "10125"
    },
    "percentiles2": {
        "total": "130",
        "ok": "130",
        "ko": "60071"
    },
    "percentiles3": {
        "total": "177",
        "ok": "177",
        "ko": "60177"
    },
    "percentiles4": {
        "total": "219",
        "ok": "219",
        "ko": "60241"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 34800254,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 367,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "29000.521",
        "ok": "29000.215",
        "ko": "0.306"
    }
},
contents: {
"req_jsonpost-8a187": {
        type: "REQUEST",
        name: "jsonPost",
path: "jsonPost",
pathFormatted: "req_jsonpost-8a187",
stats: {
    "name": "jsonPost",
    "numberOfRequests": {
        "total": "34800625",
        "ok": "34800258",
        "ko": "367"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60326",
        "ok": "1492",
        "ko": "60326"
    },
    "meanResponseTime": {
        "total": "87",
        "ok": "87",
        "ko": "27668"
    },
    "standardDeviation": {
        "total": "131",
        "ok": "55",
        "ko": "23882"
    },
    "percentiles1": {
        "total": "83",
        "ok": "84",
        "ko": "10125"
    },
    "percentiles2": {
        "total": "130",
        "ok": "130",
        "ko": "60071"
    },
    "percentiles3": {
        "total": "177",
        "ok": "177",
        "ko": "60177"
    },
    "percentiles4": {
        "total": "219",
        "ok": "219",
        "ko": "60241"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 34800254,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 367,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "29000.521",
        "ok": "29000.215",
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
