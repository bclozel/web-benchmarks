var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "38088933",
        "ok": "38088513",
        "ko": "420"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60382",
        "ok": "1465",
        "ko": "60382"
    },
    "meanResponseTime": {
        "total": "79",
        "ok": "79",
        "ko": "25449"
    },
    "standardDeviation": {
        "total": "125",
        "ok": "52",
        "ko": "23087"
    },
    "percentiles1": {
        "total": "76",
        "ok": "76",
        "ko": "10107"
    },
    "percentiles2": {
        "total": "119",
        "ok": "119",
        "ko": "60050"
    },
    "percentiles3": {
        "total": "164",
        "ok": "164",
        "ko": "60216"
    },
    "percentiles4": {
        "total": "210",
        "ok": "210",
        "ko": "60269"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 38088509,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 420,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "31740.778",
        "ok": "31740.428",
        "ko": "0.35"
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
        "total": "38088933",
        "ok": "38088513",
        "ko": "420"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60382",
        "ok": "1465",
        "ko": "60382"
    },
    "meanResponseTime": {
        "total": "79",
        "ok": "79",
        "ko": "25449"
    },
    "standardDeviation": {
        "total": "125",
        "ok": "52",
        "ko": "23087"
    },
    "percentiles1": {
        "total": "76",
        "ok": "76",
        "ko": "10107"
    },
    "percentiles2": {
        "total": "119",
        "ok": "119",
        "ko": "60050"
    },
    "percentiles3": {
        "total": "164",
        "ok": "164",
        "ko": "60216"
    },
    "percentiles4": {
        "total": "210",
        "ok": "210",
        "ko": "60269"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 38088509,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 2,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 420,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "31740.778",
        "ok": "31740.428",
        "ko": "0.35"
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
