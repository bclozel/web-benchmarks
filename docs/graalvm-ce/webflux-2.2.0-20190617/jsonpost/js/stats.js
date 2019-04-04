var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "33449370",
        "ok": "33448991",
        "ko": "379"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60108",
        "ok": "723",
        "ko": "60108"
    },
    "meanResponseTime": {
        "total": "91",
        "ok": "90",
        "ko": "27025"
    },
    "standardDeviation": {
        "total": "130",
        "ok": "48",
        "ko": "23693"
    },
    "percentiles1": {
        "total": "93",
        "ok": "93",
        "ko": "10006"
    },
    "percentiles2": {
        "total": "136",
        "ok": "136",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "154",
        "ok": "154",
        "ko": "60016"
    },
    "percentiles4": {
        "total": "173",
        "ok": "173",
        "ko": "60051"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 33448991,
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
        "count": 379,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "27874.475",
        "ok": "27874.159",
        "ko": "0.316"
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
        "total": "33449370",
        "ok": "33448991",
        "ko": "379"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60108",
        "ok": "723",
        "ko": "60108"
    },
    "meanResponseTime": {
        "total": "91",
        "ok": "90",
        "ko": "27025"
    },
    "standardDeviation": {
        "total": "130",
        "ok": "48",
        "ko": "23693"
    },
    "percentiles1": {
        "total": "93",
        "ok": "93",
        "ko": "10006"
    },
    "percentiles2": {
        "total": "136",
        "ok": "136",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "154",
        "ok": "154",
        "ko": "60016"
    },
    "percentiles4": {
        "total": "173",
        "ok": "173",
        "ko": "60051"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 33448991,
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
        "count": 379,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "27874.475",
        "ok": "27874.159",
        "ko": "0.316"
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
