var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "32643522",
        "ok": "32643146",
        "ko": "376"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60104",
        "ok": "801",
        "ko": "60104"
    },
    "meanResponseTime": {
        "total": "93",
        "ok": "92",
        "ko": "27170"
    },
    "standardDeviation": {
        "total": "133",
        "ok": "53",
        "ko": "23740"
    },
    "percentiles1": {
        "total": "92",
        "ok": "92",
        "ko": "10019"
    },
    "percentiles2": {
        "total": "137",
        "ok": "137",
        "ko": "60003"
    },
    "percentiles3": {
        "total": "177",
        "ok": "177",
        "ko": "60044"
    },
    "percentiles4": {
        "total": "198",
        "ok": "198",
        "ko": "60085"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 32643145,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 376,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "27202.935",
        "ok": "27202.622",
        "ko": "0.313"
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
        "total": "32643522",
        "ok": "32643146",
        "ko": "376"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60104",
        "ok": "801",
        "ko": "60104"
    },
    "meanResponseTime": {
        "total": "93",
        "ok": "92",
        "ko": "27170"
    },
    "standardDeviation": {
        "total": "133",
        "ok": "53",
        "ko": "23740"
    },
    "percentiles1": {
        "total": "92",
        "ok": "92",
        "ko": "10019"
    },
    "percentiles2": {
        "total": "137",
        "ok": "137",
        "ko": "60003"
    },
    "percentiles3": {
        "total": "177",
        "ok": "177",
        "ko": "60044"
    },
    "percentiles4": {
        "total": "198",
        "ok": "198",
        "ko": "60085"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 32643145,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 376,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "27202.935",
        "ok": "27202.622",
        "ko": "0.313"
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
