var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "43624511",
        "ok": "43624391",
        "ko": "120"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10009"
    },
    "maxResponseTime": {
        "total": "60326",
        "ok": "761",
        "ko": "60326"
    },
    "meanResponseTime": {
        "total": "69",
        "ok": "69",
        "ko": "55092"
    },
    "standardDeviation": {
        "total": "105",
        "ok": "46",
        "ko": "15010"
    },
    "percentiles1": {
        "total": "65",
        "ok": "65",
        "ko": "60076"
    },
    "percentiles2": {
        "total": "103",
        "ok": "103",
        "ko": "60128"
    },
    "percentiles3": {
        "total": "147",
        "ok": "147",
        "ko": "60204"
    },
    "percentiles4": {
        "total": "193",
        "ok": "193",
        "ko": "60311"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 43624391,
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
        "count": 120,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "36353.759",
        "ok": "36353.659",
        "ko": "0.1"
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
        "total": "43624511",
        "ok": "43624391",
        "ko": "120"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10009"
    },
    "maxResponseTime": {
        "total": "60326",
        "ok": "761",
        "ko": "60326"
    },
    "meanResponseTime": {
        "total": "69",
        "ok": "69",
        "ko": "55092"
    },
    "standardDeviation": {
        "total": "105",
        "ok": "46",
        "ko": "15010"
    },
    "percentiles1": {
        "total": "65",
        "ok": "65",
        "ko": "60076"
    },
    "percentiles2": {
        "total": "103",
        "ok": "103",
        "ko": "60128"
    },
    "percentiles3": {
        "total": "147",
        "ok": "147",
        "ko": "60204"
    },
    "percentiles4": {
        "total": "193",
        "ok": "193",
        "ko": "60311"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 43624391,
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
        "count": 120,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "36353.759",
        "ok": "36353.659",
        "ko": "0.1"
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
