var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "34182212",
        "ok": "34181920",
        "ko": "292"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1408"
    },
    "maxResponseTime": {
        "total": "15355",
        "ok": "15297",
        "ko": "15355"
    },
    "meanResponseTime": {
        "total": "89",
        "ok": "88",
        "ko": "12103"
    },
    "standardDeviation": {
        "total": "85",
        "ok": "77",
        "ko": "1967"
    },
    "percentiles1": {
        "total": "86",
        "ok": "86",
        "ko": "12391"
    },
    "percentiles2": {
        "total": "132",
        "ok": "132",
        "ko": "13043"
    },
    "percentiles3": {
        "total": "179",
        "ok": "179",
        "ko": "13543"
    },
    "percentiles4": {
        "total": "223",
        "ok": "223",
        "ko": "14421"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 34181252,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 20,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 648,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 292,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "28461.459",
        "ok": "28461.216",
        "ko": "0.243"
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
        "total": "34182212",
        "ok": "34181920",
        "ko": "292"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "1408"
    },
    "maxResponseTime": {
        "total": "15355",
        "ok": "15297",
        "ko": "15355"
    },
    "meanResponseTime": {
        "total": "89",
        "ok": "88",
        "ko": "12103"
    },
    "standardDeviation": {
        "total": "85",
        "ok": "77",
        "ko": "1967"
    },
    "percentiles1": {
        "total": "86",
        "ok": "86",
        "ko": "12391"
    },
    "percentiles2": {
        "total": "132",
        "ok": "132",
        "ko": "13043"
    },
    "percentiles3": {
        "total": "179",
        "ok": "179",
        "ko": "13543"
    },
    "percentiles4": {
        "total": "223",
        "ok": "223",
        "ko": "14421"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 34181252,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 20,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 648,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 292,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "28461.459",
        "ok": "28461.216",
        "ko": "0.243"
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
