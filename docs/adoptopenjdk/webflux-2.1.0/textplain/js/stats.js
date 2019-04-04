var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "35773963",
        "ok": "35773588",
        "ko": "375"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60245",
        "ok": "563",
        "ko": "60245"
    },
    "meanResponseTime": {
        "total": "85",
        "ok": "84",
        "ko": "27226"
    },
    "standardDeviation": {
        "total": "126",
        "ok": "48",
        "ko": "23766"
    },
    "percentiles1": {
        "total": "85",
        "ok": "85",
        "ko": "10024"
    },
    "percentiles2": {
        "total": "123",
        "ok": "123",
        "ko": "60010"
    },
    "percentiles3": {
        "total": "160",
        "ok": "160",
        "ko": "60091"
    },
    "percentiles4": {
        "total": "188",
        "ok": "188",
        "ko": "60169"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 35773588,
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
        "count": 375,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "29786.813",
        "ok": "29786.501",
        "ko": "0.312"
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
        "total": "35773963",
        "ok": "35773588",
        "ko": "375"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60245",
        "ok": "563",
        "ko": "60245"
    },
    "meanResponseTime": {
        "total": "85",
        "ok": "84",
        "ko": "27226"
    },
    "standardDeviation": {
        "total": "126",
        "ok": "48",
        "ko": "23766"
    },
    "percentiles1": {
        "total": "85",
        "ok": "85",
        "ko": "10024"
    },
    "percentiles2": {
        "total": "123",
        "ok": "123",
        "ko": "60010"
    },
    "percentiles3": {
        "total": "160",
        "ok": "160",
        "ko": "60091"
    },
    "percentiles4": {
        "total": "188",
        "ok": "188",
        "ko": "60169"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 35773588,
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
        "count": 375,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "29786.813",
        "ok": "29786.501",
        "ko": "0.312"
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
