var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "37247994",
        "ok": "37247874",
        "ko": "120"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10004"
    },
    "maxResponseTime": {
        "total": "60332",
        "ok": "788",
        "ko": "60332"
    },
    "meanResponseTime": {
        "total": "81",
        "ok": "81",
        "ko": "55100"
    },
    "standardDeviation": {
        "total": "115",
        "ok": "52",
        "ko": "15008"
    },
    "percentiles1": {
        "total": "78",
        "ok": "78",
        "ko": "60091"
    },
    "percentiles2": {
        "total": "122",
        "ok": "122",
        "ko": "60141"
    },
    "percentiles3": {
        "total": "166",
        "ok": "166",
        "ko": "60219"
    },
    "percentiles4": {
        "total": "204",
        "ok": "204",
        "ko": "60273"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 37247874,
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
        "total": "31039.995",
        "ok": "31039.895",
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
        "total": "37247994",
        "ok": "37247874",
        "ko": "120"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10004"
    },
    "maxResponseTime": {
        "total": "60332",
        "ok": "788",
        "ko": "60332"
    },
    "meanResponseTime": {
        "total": "81",
        "ok": "81",
        "ko": "55100"
    },
    "standardDeviation": {
        "total": "115",
        "ok": "52",
        "ko": "15008"
    },
    "percentiles1": {
        "total": "78",
        "ok": "78",
        "ko": "60091"
    },
    "percentiles2": {
        "total": "122",
        "ok": "122",
        "ko": "60141"
    },
    "percentiles3": {
        "total": "166",
        "ok": "166",
        "ko": "60219"
    },
    "percentiles4": {
        "total": "204",
        "ok": "204",
        "ko": "60273"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 37247874,
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
        "total": "31039.995",
        "ok": "31039.895",
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
