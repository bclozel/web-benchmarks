var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "35465927",
        "ok": "35465658",
        "ko": "269"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1562"
    },
    "maxResponseTime": {
        "total": "15406",
        "ok": "14850",
        "ko": "15406"
    },
    "meanResponseTime": {
        "total": "85",
        "ok": "85",
        "ko": "12627"
    },
    "standardDeviation": {
        "total": "84",
        "ok": "77",
        "ko": "2208"
    },
    "percentiles1": {
        "total": "84",
        "ok": "84",
        "ko": "13274"
    },
    "percentiles2": {
        "total": "127",
        "ok": "127",
        "ko": "13406"
    },
    "percentiles3": {
        "total": "169",
        "ok": "169",
        "ko": "14345"
    },
    "percentiles4": {
        "total": "210",
        "ok": "210",
        "ko": "14509"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 35464995,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 662,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 269,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "29554.939",
        "ok": "29554.715",
        "ko": "0.224"
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
        "total": "35465927",
        "ok": "35465658",
        "ko": "269"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1562"
    },
    "maxResponseTime": {
        "total": "15406",
        "ok": "14850",
        "ko": "15406"
    },
    "meanResponseTime": {
        "total": "85",
        "ok": "85",
        "ko": "12627"
    },
    "standardDeviation": {
        "total": "84",
        "ok": "77",
        "ko": "2208"
    },
    "percentiles1": {
        "total": "83",
        "ok": "84",
        "ko": "13274"
    },
    "percentiles2": {
        "total": "127",
        "ok": "127",
        "ko": "13406"
    },
    "percentiles3": {
        "total": "169",
        "ok": "169",
        "ko": "14345"
    },
    "percentiles4": {
        "total": "210",
        "ok": "210",
        "ko": "14509"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 35464995,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 662,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 269,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "29554.939",
        "ok": "29554.715",
        "ko": "0.224"
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
