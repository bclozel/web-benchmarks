var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "39893512",
        "ok": "39893143",
        "ko": "369"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60310",
        "ok": "1358",
        "ko": "60310"
    },
    "meanResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "27565"
    },
    "standardDeviation": {
        "total": "121",
        "ok": "49",
        "ko": "23856"
    },
    "percentiles1": {
        "total": "73",
        "ok": "73",
        "ko": "10108"
    },
    "percentiles2": {
        "total": "112",
        "ok": "112",
        "ko": "60049"
    },
    "percentiles3": {
        "total": "156",
        "ok": "155",
        "ko": "60187"
    },
    "percentiles4": {
        "total": "197",
        "ok": "197",
        "ko": "60267"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 39893135,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 369,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "33216.913",
        "ok": "33216.605",
        "ko": "0.307"
    }
},
contents: {
"req_jsonget-66b2f": {
        type: "REQUEST",
        name: "jsonGet",
path: "jsonGet",
pathFormatted: "req_jsonget-66b2f",
stats: {
    "name": "jsonGet",
    "numberOfRequests": {
        "total": "39893512",
        "ok": "39893143",
        "ko": "369"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60310",
        "ok": "1358",
        "ko": "60310"
    },
    "meanResponseTime": {
        "total": "76",
        "ok": "76",
        "ko": "27565"
    },
    "standardDeviation": {
        "total": "121",
        "ok": "49",
        "ko": "23856"
    },
    "percentiles1": {
        "total": "73",
        "ok": "73",
        "ko": "10108"
    },
    "percentiles2": {
        "total": "112",
        "ok": "112",
        "ko": "60049"
    },
    "percentiles3": {
        "total": "156",
        "ok": "156",
        "ko": "60187"
    },
    "percentiles4": {
        "total": "197",
        "ok": "197",
        "ko": "60267"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 39893135,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 5,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 369,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "33216.913",
        "ok": "33216.605",
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
