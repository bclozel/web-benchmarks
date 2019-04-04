var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "12331821",
        "ok": "12331440",
        "ko": "381"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60044",
        "ok": "1096",
        "ko": "60044"
    },
    "meanResponseTime": {
        "total": "246",
        "ok": "245",
        "ko": "26932"
    },
    "standardDeviation": {
        "total": "236",
        "ok": "128",
        "ko": "23662"
    },
    "percentiles1": {
        "total": "255",
        "ok": "255",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "378",
        "ok": "378",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "405",
        "ok": "405",
        "ko": "60005"
    },
    "percentiles4": {
        "total": "419",
        "ok": "419",
        "ko": "60026"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12331280,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 160,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 381,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "10276.517",
        "ok": "10276.2",
        "ko": "0.318"
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
        "total": "12331821",
        "ok": "12331440",
        "ko": "381"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10000"
    },
    "maxResponseTime": {
        "total": "60044",
        "ok": "1096",
        "ko": "60044"
    },
    "meanResponseTime": {
        "total": "246",
        "ok": "245",
        "ko": "26932"
    },
    "standardDeviation": {
        "total": "236",
        "ok": "128",
        "ko": "23662"
    },
    "percentiles1": {
        "total": "255",
        "ok": "255",
        "ko": "10001"
    },
    "percentiles2": {
        "total": "378",
        "ok": "378",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "405",
        "ok": "405",
        "ko": "60005"
    },
    "percentiles4": {
        "total": "419",
        "ok": "419",
        "ko": "60026"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 12331280,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 160,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 381,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "10276.517",
        "ok": "10276.2",
        "ko": "0.318"
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
