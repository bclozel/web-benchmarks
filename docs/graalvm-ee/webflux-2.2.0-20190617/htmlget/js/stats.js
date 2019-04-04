var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "13468842",
        "ok": "13468381",
        "ko": "461"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60033",
        "ok": "1006",
        "ko": "60033"
    },
    "meanResponseTime": {
        "total": "225",
        "ok": "224",
        "ko": "23994"
    },
    "standardDeviation": {
        "total": "222",
        "ok": "113",
        "ko": "22446"
    },
    "percentiles1": {
        "total": "235",
        "ok": "235",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "343",
        "ok": "343",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "365",
        "ok": "365",
        "ko": "60004"
    },
    "percentiles4": {
        "total": "383",
        "ok": "383",
        "ko": "60025"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13468301,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 80,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 461,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "11224.035",
        "ok": "11223.651",
        "ko": "0.384"
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
        "total": "13468842",
        "ok": "13468381",
        "ko": "461"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60033",
        "ok": "1006",
        "ko": "60033"
    },
    "meanResponseTime": {
        "total": "225",
        "ok": "224",
        "ko": "23994"
    },
    "standardDeviation": {
        "total": "222",
        "ok": "113",
        "ko": "22446"
    },
    "percentiles1": {
        "total": "235",
        "ok": "235",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "343",
        "ok": "343",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "365",
        "ok": "365",
        "ko": "60004"
    },
    "percentiles4": {
        "total": "383",
        "ok": "383",
        "ko": "60025"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 13468301,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 80,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 461,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "11224.035",
        "ok": "11223.651",
        "ko": "0.384"
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
