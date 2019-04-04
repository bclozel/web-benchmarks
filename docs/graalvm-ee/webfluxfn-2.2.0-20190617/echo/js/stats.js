var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "36477124",
        "ok": "36476679",
        "ko": "445"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60438",
        "ok": "836",
        "ko": "60438"
    },
    "meanResponseTime": {
        "total": "83",
        "ok": "83",
        "ko": "24583"
    },
    "standardDeviation": {
        "total": "129",
        "ok": "55",
        "ko": "22704"
    },
    "percentiles1": {
        "total": "79",
        "ok": "79",
        "ko": "10105"
    },
    "percentiles2": {
        "total": "123",
        "ok": "123",
        "ko": "60034"
    },
    "percentiles3": {
        "total": "172",
        "ok": "172",
        "ko": "60181"
    },
    "percentiles4": {
        "total": "230",
        "ok": "230",
        "ko": "60339"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 36476674,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 445,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "30397.603",
        "ok": "30397.232",
        "ko": "0.371"
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
        "total": "36477124",
        "ok": "36476679",
        "ko": "445"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60438",
        "ok": "836",
        "ko": "60438"
    },
    "meanResponseTime": {
        "total": "83",
        "ok": "83",
        "ko": "24583"
    },
    "standardDeviation": {
        "total": "129",
        "ok": "55",
        "ko": "22704"
    },
    "percentiles1": {
        "total": "79",
        "ok": "79",
        "ko": "10105"
    },
    "percentiles2": {
        "total": "123",
        "ok": "123",
        "ko": "60034"
    },
    "percentiles3": {
        "total": "172",
        "ok": "172",
        "ko": "60181"
    },
    "percentiles4": {
        "total": "230",
        "ok": "230",
        "ko": "60339"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 36476674,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 5,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 445,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "30397.603",
        "ok": "30397.232",
        "ko": "0.371"
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
