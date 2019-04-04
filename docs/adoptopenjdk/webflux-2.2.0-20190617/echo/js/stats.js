var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "32047023",
        "ok": "32046917",
        "ko": "106"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10041"
    },
    "maxResponseTime": {
        "total": "60259",
        "ok": "1134",
        "ko": "60259"
    },
    "meanResponseTime": {
        "total": "94",
        "ok": "94",
        "ko": "59134"
    },
    "standardDeviation": {
        "total": "126",
        "ok": "64",
        "ko": "6805"
    },
    "percentiles1": {
        "total": "86",
        "ok": "86",
        "ko": "60068"
    },
    "percentiles2": {
        "total": "131",
        "ok": "131",
        "ko": "60105"
    },
    "percentiles3": {
        "total": "213",
        "ok": "213",
        "ko": "60183"
    },
    "percentiles4": {
        "total": "293",
        "ok": "293",
        "ko": "60224"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 32046916,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
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
        "total": "26705.853",
        "ok": "26705.764",
        "ko": "0.088"
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
        "total": "32047023",
        "ok": "32046917",
        "ko": "106"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10041"
    },
    "maxResponseTime": {
        "total": "60259",
        "ok": "1134",
        "ko": "60259"
    },
    "meanResponseTime": {
        "total": "94",
        "ok": "94",
        "ko": "59134"
    },
    "standardDeviation": {
        "total": "126",
        "ok": "64",
        "ko": "6805"
    },
    "percentiles1": {
        "total": "86",
        "ok": "86",
        "ko": "60068"
    },
    "percentiles2": {
        "total": "131",
        "ok": "131",
        "ko": "60105"
    },
    "percentiles3": {
        "total": "213",
        "ok": "213",
        "ko": "60183"
    },
    "percentiles4": {
        "total": "294",
        "ok": "294",
        "ko": "60224"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 32046916,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
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
        "total": "26705.853",
        "ok": "26705.764",
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
