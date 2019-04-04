var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "47910001",
        "ok": "47909631",
        "ko": "370"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60280",
        "ok": "742",
        "ko": "60280"
    },
    "meanResponseTime": {
        "total": "63",
        "ok": "63",
        "ko": "27501"
    },
    "standardDeviation": {
        "total": "109",
        "ok": "42",
        "ko": "23838"
    },
    "percentiles1": {
        "total": "60",
        "ok": "60",
        "ko": "10089"
    },
    "percentiles2": {
        "total": "94",
        "ok": "94",
        "ko": "60045"
    },
    "percentiles3": {
        "total": "133",
        "ok": "133",
        "ko": "60143"
    },
    "percentiles4": {
        "total": "172",
        "ok": "172",
        "ko": "60219"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 47909631,
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
        "count": 370,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "39925.001",
        "ok": "39924.692",
        "ko": "0.308"
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
        "total": "47910001",
        "ok": "47909631",
        "ko": "370"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60280",
        "ok": "742",
        "ko": "60280"
    },
    "meanResponseTime": {
        "total": "63",
        "ok": "63",
        "ko": "27501"
    },
    "standardDeviation": {
        "total": "109",
        "ok": "42",
        "ko": "23838"
    },
    "percentiles1": {
        "total": "60",
        "ok": "60",
        "ko": "10089"
    },
    "percentiles2": {
        "total": "94",
        "ok": "94",
        "ko": "60045"
    },
    "percentiles3": {
        "total": "133",
        "ok": "133",
        "ko": "60143"
    },
    "percentiles4": {
        "total": "172",
        "ok": "172",
        "ko": "60219"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 47909631,
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
        "count": 370,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "39925.001",
        "ok": "39924.692",
        "ko": "0.308"
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
