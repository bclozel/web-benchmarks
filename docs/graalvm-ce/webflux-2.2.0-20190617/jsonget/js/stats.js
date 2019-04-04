var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "42827399",
        "ok": "42827028",
        "ko": "371"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60213",
        "ok": "742",
        "ko": "60213"
    },
    "meanResponseTime": {
        "total": "71",
        "ok": "70",
        "ko": "27451"
    },
    "standardDeviation": {
        "total": "118",
        "ok": "50",
        "ko": "23819"
    },
    "percentiles1": {
        "total": "63",
        "ok": "63",
        "ko": "10088"
    },
    "percentiles2": {
        "total": "100",
        "ok": "100",
        "ko": "60042"
    },
    "percentiles3": {
        "total": "163",
        "ok": "163",
        "ko": "60127"
    },
    "percentiles4": {
        "total": "227",
        "ok": "227",
        "ko": "60172"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 42827028,
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
        "count": 371,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "35659.783",
        "ok": "35659.474",
        "ko": "0.309"
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
        "total": "42827399",
        "ok": "42827028",
        "ko": "371"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60213",
        "ok": "742",
        "ko": "60213"
    },
    "meanResponseTime": {
        "total": "71",
        "ok": "70",
        "ko": "27451"
    },
    "standardDeviation": {
        "total": "118",
        "ok": "50",
        "ko": "23819"
    },
    "percentiles1": {
        "total": "63",
        "ok": "63",
        "ko": "10088"
    },
    "percentiles2": {
        "total": "100",
        "ok": "100",
        "ko": "60042"
    },
    "percentiles3": {
        "total": "163",
        "ok": "163",
        "ko": "60127"
    },
    "percentiles4": {
        "total": "227",
        "ok": "227",
        "ko": "60172"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 42827028,
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
        "count": 371,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "35659.783",
        "ok": "35659.474",
        "ko": "0.309"
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
