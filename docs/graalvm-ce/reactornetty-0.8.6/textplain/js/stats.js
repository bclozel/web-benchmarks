var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "39389872",
        "ok": "39389503",
        "ko": "369"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60304",
        "ok": "727",
        "ko": "60304"
    },
    "meanResponseTime": {
        "total": "77",
        "ok": "77",
        "ko": "27558"
    },
    "standardDeviation": {
        "total": "122",
        "ok": "49",
        "ko": "23856"
    },
    "percentiles1": {
        "total": "74",
        "ok": "74",
        "ko": "10103"
    },
    "percentiles2": {
        "total": "115",
        "ok": "115",
        "ko": "60052"
    },
    "percentiles3": {
        "total": "156",
        "ok": "156",
        "ko": "60160"
    },
    "percentiles4": {
        "total": "195",
        "ok": "195",
        "ko": "60210"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 39389503,
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
        "count": 369,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "32824.893",
        "ok": "32824.586",
        "ko": "0.307"
    }
},
contents: {
"req_plain-text-10504": {
        type: "REQUEST",
        name: "plain_text",
path: "plain_text",
pathFormatted: "req_plain-text-10504",
stats: {
    "name": "plain_text",
    "numberOfRequests": {
        "total": "39389872",
        "ok": "39389503",
        "ko": "369"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60304",
        "ok": "727",
        "ko": "60304"
    },
    "meanResponseTime": {
        "total": "77",
        "ok": "77",
        "ko": "27558"
    },
    "standardDeviation": {
        "total": "122",
        "ok": "49",
        "ko": "23856"
    },
    "percentiles1": {
        "total": "74",
        "ok": "74",
        "ko": "10103"
    },
    "percentiles2": {
        "total": "115",
        "ok": "115",
        "ko": "60052"
    },
    "percentiles3": {
        "total": "156",
        "ok": "156",
        "ko": "60160"
    },
    "percentiles4": {
        "total": "195",
        "ok": "195",
        "ko": "60210"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 39389503,
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
        "count": 369,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "32824.893",
        "ok": "32824.586",
        "ko": "0.307"
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
