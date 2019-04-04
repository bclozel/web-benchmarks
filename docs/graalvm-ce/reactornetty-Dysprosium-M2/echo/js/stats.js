var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "43135023",
        "ok": "43134654",
        "ko": "369"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60355",
        "ok": "773",
        "ko": "60355"
    },
    "meanResponseTime": {
        "total": "70",
        "ok": "70",
        "ko": "27553"
    },
    "standardDeviation": {
        "total": "117",
        "ok": "48",
        "ko": "23855"
    },
    "percentiles1": {
        "total": "64",
        "ok": "64",
        "ko": "10097"
    },
    "percentiles2": {
        "total": "106",
        "ok": "106",
        "ko": "60048"
    },
    "percentiles3": {
        "total": "152",
        "ok": "152",
        "ko": "60154"
    },
    "percentiles4": {
        "total": "193",
        "ok": "192",
        "ko": "60254"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 43134654,
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
        "total": "35915.923",
        "ok": "35915.615",
        "ko": "0.307"
    }
},
contents: {
"req_echo-cbb11": {
        type: "REQUEST",
        name: "echo",
path: "echo",
pathFormatted: "req_echo-cbb11",
stats: {
    "name": "echo",
    "numberOfRequests": {
        "total": "43135023",
        "ok": "43134654",
        "ko": "369"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60355",
        "ok": "773",
        "ko": "60355"
    },
    "meanResponseTime": {
        "total": "70",
        "ok": "70",
        "ko": "27553"
    },
    "standardDeviation": {
        "total": "117",
        "ok": "48",
        "ko": "23855"
    },
    "percentiles1": {
        "total": "64",
        "ok": "64",
        "ko": "10097"
    },
    "percentiles2": {
        "total": "106",
        "ok": "106",
        "ko": "60048"
    },
    "percentiles3": {
        "total": "151",
        "ok": "152",
        "ko": "60154"
    },
    "percentiles4": {
        "total": "192",
        "ok": "192",
        "ko": "60254"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 43134654,
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
        "total": "35915.923",
        "ok": "35915.615",
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
