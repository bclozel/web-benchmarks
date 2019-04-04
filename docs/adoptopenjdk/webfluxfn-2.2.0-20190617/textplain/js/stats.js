var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "47063477",
        "ok": "47063371",
        "ko": "106"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10087"
    },
    "maxResponseTime": {
        "total": "60341",
        "ok": "719",
        "ko": "60341"
    },
    "meanResponseTime": {
        "total": "64",
        "ok": "64",
        "ko": "59135"
    },
    "standardDeviation": {
        "total": "100",
        "ok": "44",
        "ko": "6801"
    },
    "percentiles1": {
        "total": "61",
        "ok": "61",
        "ko": "60070"
    },
    "percentiles2": {
        "total": "96",
        "ok": "96",
        "ko": "60103"
    },
    "percentiles3": {
        "total": "137",
        "ok": "137",
        "ko": "60165"
    },
    "percentiles4": {
        "total": "187",
        "ok": "187",
        "ko": "60236"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 47063371,
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
        "total": "39219.564",
        "ok": "39219.476",
        "ko": "0.088"
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
        "total": "47063477",
        "ok": "47063371",
        "ko": "106"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10087"
    },
    "maxResponseTime": {
        "total": "60341",
        "ok": "719",
        "ko": "60341"
    },
    "meanResponseTime": {
        "total": "64",
        "ok": "64",
        "ko": "59135"
    },
    "standardDeviation": {
        "total": "100",
        "ok": "44",
        "ko": "6801"
    },
    "percentiles1": {
        "total": "61",
        "ok": "61",
        "ko": "60070"
    },
    "percentiles2": {
        "total": "96",
        "ok": "96",
        "ko": "60103"
    },
    "percentiles3": {
        "total": "137",
        "ok": "137",
        "ko": "60165"
    },
    "percentiles4": {
        "total": "187",
        "ok": "187",
        "ko": "60236"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 47063371,
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
        "total": "39219.564",
        "ok": "39219.476",
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
