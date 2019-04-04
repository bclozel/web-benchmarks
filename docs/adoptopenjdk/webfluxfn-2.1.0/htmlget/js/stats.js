var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "18701936",
        "ok": "18701556",
        "ko": "380"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60049",
        "ok": "753",
        "ko": "60049"
    },
    "meanResponseTime": {
        "total": "162",
        "ok": "161",
        "ko": "26977"
    },
    "standardDeviation": {
        "total": "184",
        "ok": "89",
        "ko": "23677"
    },
    "percentiles1": {
        "total": "164",
        "ok": "164",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "242",
        "ok": "242",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "289",
        "ok": "289",
        "ko": "60007"
    },
    "percentiles4": {
        "total": "306",
        "ok": "306",
        "ko": "60020"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 18701556,
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
        "count": 380,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "15571.97",
        "ok": "15571.654",
        "ko": "0.316"
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
        "total": "18701936",
        "ok": "18701556",
        "ko": "380"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60049",
        "ok": "753",
        "ko": "60049"
    },
    "meanResponseTime": {
        "total": "162",
        "ok": "161",
        "ko": "26977"
    },
    "standardDeviation": {
        "total": "184",
        "ok": "89",
        "ko": "23677"
    },
    "percentiles1": {
        "total": "165",
        "ok": "164",
        "ko": "10002"
    },
    "percentiles2": {
        "total": "242",
        "ok": "242",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "289",
        "ok": "289",
        "ko": "60007"
    },
    "percentiles4": {
        "total": "306",
        "ok": "306",
        "ko": "60020"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 18701556,
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
        "count": 380,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "15571.97",
        "ok": "15571.654",
        "ko": "0.316"
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
