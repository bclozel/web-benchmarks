var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "11214205",
        "ok": "11214098",
        "ko": "107"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60058",
        "ok": "1286",
        "ko": "60058"
    },
    "meanResponseTime": {
        "total": "270",
        "ok": "269",
        "ko": "58603"
    },
    "standardDeviation": {
        "total": "229",
        "ok": "139",
        "ko": "8255"
    },
    "percentiles1": {
        "total": "282",
        "ok": "282",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "413",
        "ok": "412",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "444",
        "ok": "444",
        "ko": "60028"
    },
    "percentiles4": {
        "total": "460",
        "ok": "460",
        "ko": "60050"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 11213767,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 325,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 107,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "9337.39",
        "ok": "9337.301",
        "ko": "0.089"
    }
},
contents: {
"req_htmlget-3dd37": {
        type: "REQUEST",
        name: "htmlGet",
path: "htmlGet",
pathFormatted: "req_htmlget-3dd37",
stats: {
    "name": "htmlGet",
    "numberOfRequests": {
        "total": "11214205",
        "ok": "11214098",
        "ko": "107"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60058",
        "ok": "1286",
        "ko": "60058"
    },
    "meanResponseTime": {
        "total": "270",
        "ok": "269",
        "ko": "58603"
    },
    "standardDeviation": {
        "total": "229",
        "ok": "139",
        "ko": "8255"
    },
    "percentiles1": {
        "total": "282",
        "ok": "282",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "413",
        "ok": "413",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "444",
        "ok": "444",
        "ko": "60028"
    },
    "percentiles4": {
        "total": "460",
        "ok": "460",
        "ko": "60050"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 11213767,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 325,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 107,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "9337.39",
        "ok": "9337.301",
        "ko": "0.089"
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
