var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "35279283",
        "ok": "35278914",
        "ko": "369"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60479",
        "ok": "891",
        "ko": "60479"
    },
    "meanResponseTime": {
        "total": "86",
        "ok": "85",
        "ko": "27568"
    },
    "standardDeviation": {
        "total": "132",
        "ok": "59",
        "ko": "23857"
    },
    "percentiles1": {
        "total": "79",
        "ok": "79",
        "ko": "10112"
    },
    "percentiles2": {
        "total": "126",
        "ok": "126",
        "ko": "60055"
    },
    "percentiles3": {
        "total": "185",
        "ok": "185",
        "ko": "60178"
    },
    "percentiles4": {
        "total": "265",
        "ok": "265",
        "ko": "60294"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 35278907,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 7,
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
        "total": "29374.923",
        "ok": "29374.616",
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
        "total": "35279283",
        "ok": "35278914",
        "ko": "369"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60479",
        "ok": "891",
        "ko": "60479"
    },
    "meanResponseTime": {
        "total": "86",
        "ok": "85",
        "ko": "27568"
    },
    "standardDeviation": {
        "total": "132",
        "ok": "59",
        "ko": "23857"
    },
    "percentiles1": {
        "total": "79",
        "ok": "79",
        "ko": "10112"
    },
    "percentiles2": {
        "total": "126",
        "ok": "126",
        "ko": "60055"
    },
    "percentiles3": {
        "total": "185",
        "ok": "185",
        "ko": "60178"
    },
    "percentiles4": {
        "total": "265",
        "ok": "265",
        "ko": "60294"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 35278907,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 7,
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
        "total": "29374.923",
        "ok": "29374.616",
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
