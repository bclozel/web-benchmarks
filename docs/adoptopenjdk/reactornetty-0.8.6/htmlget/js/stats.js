var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "33567457",
        "ok": "33567179",
        "ko": "278"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "2173"
    },
    "maxResponseTime": {
        "total": "11492",
        "ok": "11382",
        "ko": "11492"
    },
    "meanResponseTime": {
        "total": "90",
        "ok": "90",
        "ko": "9278"
    },
    "standardDeviation": {
        "total": "75",
        "ok": "70",
        "ko": "1052"
    },
    "percentiles1": {
        "total": "88",
        "ok": "88",
        "ko": "9371"
    },
    "percentiles2": {
        "total": "135",
        "ok": "135",
        "ko": "9538"
    },
    "percentiles3": {
        "total": "182",
        "ok": "182",
        "ko": "10451"
    },
    "percentiles4": {
        "total": "224",
        "ok": "224",
        "ko": "11090"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 33566521,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 13,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 645,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 278,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "27972.881",
        "ok": "27972.649",
        "ko": "0.232"
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
        "total": "33567457",
        "ok": "33567179",
        "ko": "278"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "2173"
    },
    "maxResponseTime": {
        "total": "11492",
        "ok": "11382",
        "ko": "11492"
    },
    "meanResponseTime": {
        "total": "90",
        "ok": "90",
        "ko": "9278"
    },
    "standardDeviation": {
        "total": "75",
        "ok": "70",
        "ko": "1052"
    },
    "percentiles1": {
        "total": "88",
        "ok": "88",
        "ko": "9371"
    },
    "percentiles2": {
        "total": "135",
        "ok": "135",
        "ko": "9538"
    },
    "percentiles3": {
        "total": "182",
        "ok": "182",
        "ko": "10451"
    },
    "percentiles4": {
        "total": "224",
        "ok": "224",
        "ko": "11090"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 33566521,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 13,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 645,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 278,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "27972.881",
        "ok": "27972.649",
        "ko": "0.232"
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
