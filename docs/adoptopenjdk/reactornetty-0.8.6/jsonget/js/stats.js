var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "38244231",
        "ok": "38244109",
        "ko": "122"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10019"
    },
    "maxResponseTime": {
        "total": "60286",
        "ok": "783",
        "ko": "60286"
    },
    "meanResponseTime": {
        "total": "79",
        "ok": "79",
        "ko": "54352"
    },
    "standardDeviation": {
        "total": "112",
        "ok": "49",
        "ko": "15944"
    },
    "percentiles1": {
        "total": "78",
        "ok": "78",
        "ko": "60074"
    },
    "percentiles2": {
        "total": "119",
        "ok": "119",
        "ko": "60113"
    },
    "percentiles3": {
        "total": "155",
        "ok": "155",
        "ko": "60204"
    },
    "percentiles4": {
        "total": "189",
        "ok": "188",
        "ko": "60271"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 38244109,
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
        "count": 122,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "31843.656",
        "ok": "31843.555",
        "ko": "0.102"
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
        "total": "38244231",
        "ok": "38244109",
        "ko": "122"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10019"
    },
    "maxResponseTime": {
        "total": "60286",
        "ok": "783",
        "ko": "60286"
    },
    "meanResponseTime": {
        "total": "79",
        "ok": "79",
        "ko": "54352"
    },
    "standardDeviation": {
        "total": "112",
        "ok": "49",
        "ko": "15944"
    },
    "percentiles1": {
        "total": "78",
        "ok": "78",
        "ko": "60074"
    },
    "percentiles2": {
        "total": "119",
        "ok": "119",
        "ko": "60113"
    },
    "percentiles3": {
        "total": "155",
        "ok": "155",
        "ko": "60204"
    },
    "percentiles4": {
        "total": "188",
        "ok": "189",
        "ko": "60271"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 38244109,
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
        "count": 122,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "31843.656",
        "ok": "31843.555",
        "ko": "0.102"
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
