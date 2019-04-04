var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "39675371",
        "ok": "39675265",
        "ko": "106"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10004"
    },
    "maxResponseTime": {
        "total": "60316",
        "ok": "685",
        "ko": "60316"
    },
    "meanResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "59110"
    },
    "standardDeviation": {
        "total": "109",
        "ok": "50",
        "ko": "6809"
    },
    "percentiles1": {
        "total": "69",
        "ok": "69",
        "ko": "60024"
    },
    "percentiles2": {
        "total": "110",
        "ok": "110",
        "ko": "60062"
    },
    "percentiles3": {
        "total": "163",
        "ok": "163",
        "ko": "60199"
    },
    "percentiles4": {
        "total": "225",
        "ok": "225",
        "ko": "60309"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 39675265,
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
        "count": 106,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "33035.28",
        "ok": "33035.192",
        "ko": "0.088"
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
        "total": "39675371",
        "ok": "39675265",
        "ko": "106"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10004"
    },
    "maxResponseTime": {
        "total": "60316",
        "ok": "685",
        "ko": "60316"
    },
    "meanResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "59110"
    },
    "standardDeviation": {
        "total": "109",
        "ok": "50",
        "ko": "6809"
    },
    "percentiles1": {
        "total": "69",
        "ok": "69",
        "ko": "60024"
    },
    "percentiles2": {
        "total": "110",
        "ok": "110",
        "ko": "60062"
    },
    "percentiles3": {
        "total": "163",
        "ok": "163",
        "ko": "60199"
    },
    "percentiles4": {
        "total": "225",
        "ok": "225",
        "ko": "60309"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 39675265,
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
        "count": 106,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "33035.28",
        "ok": "33035.192",
        "ko": "0.088"
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
