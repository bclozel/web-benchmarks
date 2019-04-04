var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "49669945",
        "ok": "49669575",
        "ko": "370"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60327",
        "ok": "783",
        "ko": "60327"
    },
    "meanResponseTime": {
        "total": "61",
        "ok": "61",
        "ko": "27504"
    },
    "standardDeviation": {
        "total": "108",
        "ok": "42",
        "ko": "23837"
    },
    "percentiles1": {
        "total": "57",
        "ok": "57",
        "ko": "10095"
    },
    "percentiles2": {
        "total": "91",
        "ok": "91",
        "ko": "60038"
    },
    "percentiles3": {
        "total": "133",
        "ok": "133",
        "ko": "60154"
    },
    "percentiles4": {
        "total": "173",
        "ok": "173",
        "ko": "60230"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 49669575,
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
        "count": 370,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "41391.621",
        "ok": "41391.312",
        "ko": "0.308"
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
        "total": "49669945",
        "ok": "49669575",
        "ko": "370"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60327",
        "ok": "783",
        "ko": "60327"
    },
    "meanResponseTime": {
        "total": "61",
        "ok": "61",
        "ko": "27504"
    },
    "standardDeviation": {
        "total": "108",
        "ok": "42",
        "ko": "23837"
    },
    "percentiles1": {
        "total": "57",
        "ok": "58",
        "ko": "10095"
    },
    "percentiles2": {
        "total": "91",
        "ok": "91",
        "ko": "60038"
    },
    "percentiles3": {
        "total": "133",
        "ok": "133",
        "ko": "60154"
    },
    "percentiles4": {
        "total": "174",
        "ok": "173",
        "ko": "60230"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 49669575,
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
        "count": 370,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "41391.621",
        "ok": "41391.312",
        "ko": "0.308"
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
