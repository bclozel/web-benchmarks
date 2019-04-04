var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "28619058",
        "ok": "28618687",
        "ko": "371"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60285",
        "ok": "1341",
        "ko": "60285"
    },
    "meanResponseTime": {
        "total": "106",
        "ok": "105",
        "ko": "27547"
    },
    "standardDeviation": {
        "total": "144",
        "ok": "60",
        "ko": "23868"
    },
    "percentiles1": {
        "total": "106",
        "ok": "106",
        "ko": "10028"
    },
    "percentiles2": {
        "total": "154",
        "ok": "154",
        "ko": "60007"
    },
    "percentiles3": {
        "total": "199",
        "ok": "199",
        "ko": "60097"
    },
    "percentiles4": {
        "total": "228",
        "ok": "228",
        "ko": "60194"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 28618681,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 371,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "23829.357",
        "ok": "23829.048",
        "ko": "0.309"
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
        "total": "28619058",
        "ok": "28618687",
        "ko": "371"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60285",
        "ok": "1341",
        "ko": "60285"
    },
    "meanResponseTime": {
        "total": "106",
        "ok": "105",
        "ko": "27547"
    },
    "standardDeviation": {
        "total": "144",
        "ok": "60",
        "ko": "23868"
    },
    "percentiles1": {
        "total": "106",
        "ok": "106",
        "ko": "10028"
    },
    "percentiles2": {
        "total": "154",
        "ok": "154",
        "ko": "60007"
    },
    "percentiles3": {
        "total": "199",
        "ok": "199",
        "ko": "60097"
    },
    "percentiles4": {
        "total": "228",
        "ok": "228",
        "ko": "60194"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 28618681,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 3,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 371,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "23829.357",
        "ok": "23829.048",
        "ko": "0.309"
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
