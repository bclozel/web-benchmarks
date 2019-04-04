var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "47587232",
        "ok": "47586808",
        "ko": "424"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60239",
        "ok": "802",
        "ko": "60239"
    },
    "meanResponseTime": {
        "total": "64",
        "ok": "63",
        "ko": "25283"
    },
    "standardDeviation": {
        "total": "110",
        "ok": "42",
        "ko": "23016"
    },
    "percentiles1": {
        "total": "61",
        "ok": "61",
        "ko": "10084"
    },
    "percentiles2": {
        "total": "94",
        "ok": "94",
        "ko": "60038"
    },
    "percentiles3": {
        "total": "133",
        "ok": "133",
        "ko": "60129"
    },
    "percentiles4": {
        "total": "172",
        "ok": "172",
        "ko": "60186"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 47586807,
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
        "count": 424,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "39623.007",
        "ok": "39622.654",
        "ko": "0.353"
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
        "total": "47587232",
        "ok": "47586808",
        "ko": "424"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60239",
        "ok": "802",
        "ko": "60239"
    },
    "meanResponseTime": {
        "total": "64",
        "ok": "63",
        "ko": "25283"
    },
    "standardDeviation": {
        "total": "110",
        "ok": "42",
        "ko": "23016"
    },
    "percentiles1": {
        "total": "61",
        "ok": "61",
        "ko": "10084"
    },
    "percentiles2": {
        "total": "94",
        "ok": "94",
        "ko": "60038"
    },
    "percentiles3": {
        "total": "133",
        "ok": "133",
        "ko": "60129"
    },
    "percentiles4": {
        "total": "172",
        "ok": "172",
        "ko": "60186"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 47586807,
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
        "count": 424,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "39623.007",
        "ok": "39622.654",
        "ko": "0.353"
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
