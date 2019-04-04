var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "38405550",
        "ok": "38405124",
        "ko": "426"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60373",
        "ok": "742",
        "ko": "60373"
    },
    "meanResponseTime": {
        "total": "79",
        "ok": "79",
        "ko": "25112"
    },
    "standardDeviation": {
        "total": "124",
        "ok": "51",
        "ko": "22933"
    },
    "percentiles1": {
        "total": "76",
        "ok": "76",
        "ko": "10113"
    },
    "percentiles2": {
        "total": "118",
        "ok": "118",
        "ko": "60042"
    },
    "percentiles3": {
        "total": "161",
        "ok": "161",
        "ko": "60160"
    },
    "percentiles4": {
        "total": "201",
        "ok": "201",
        "ko": "60239"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 38405124,
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
        "count": 426,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "32004.625",
        "ok": "32004.27",
        "ko": "0.355"
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
        "total": "38405550",
        "ok": "38405124",
        "ko": "426"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60373",
        "ok": "742",
        "ko": "60373"
    },
    "meanResponseTime": {
        "total": "79",
        "ok": "79",
        "ko": "25112"
    },
    "standardDeviation": {
        "total": "124",
        "ok": "51",
        "ko": "22933"
    },
    "percentiles1": {
        "total": "76",
        "ok": "76",
        "ko": "10113"
    },
    "percentiles2": {
        "total": "118",
        "ok": "119",
        "ko": "60042"
    },
    "percentiles3": {
        "total": "161",
        "ok": "161",
        "ko": "60160"
    },
    "percentiles4": {
        "total": "201",
        "ok": "201",
        "ko": "60239"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 38405124,
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
        "count": 426,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "32004.625",
        "ok": "32004.27",
        "ko": "0.355"
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
