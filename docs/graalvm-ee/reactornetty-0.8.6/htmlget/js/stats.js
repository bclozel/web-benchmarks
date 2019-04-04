var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "35076938",
        "ok": "35076698",
        "ko": "240"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "3996"
    },
    "maxResponseTime": {
        "total": "16324",
        "ok": "16281",
        "ko": "16324"
    },
    "meanResponseTime": {
        "total": "86",
        "ok": "86",
        "ko": "13052"
    },
    "standardDeviation": {
        "total": "86",
        "ok": "79",
        "ko": "1793"
    },
    "percentiles1": {
        "total": "84",
        "ok": "84",
        "ko": "13366"
    },
    "percentiles2": {
        "total": "128",
        "ok": "128",
        "ko": "14103"
    },
    "percentiles3": {
        "total": "172",
        "ok": "172",
        "ko": "14899"
    },
    "percentiles4": {
        "total": "217",
        "ok": "217",
        "ko": "15770"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 35076024,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 673,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 240,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "29230.782",
        "ok": "29230.582",
        "ko": "0.2"
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
        "total": "35076938",
        "ok": "35076698",
        "ko": "240"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "3996"
    },
    "maxResponseTime": {
        "total": "16324",
        "ok": "16281",
        "ko": "16324"
    },
    "meanResponseTime": {
        "total": "86",
        "ok": "86",
        "ko": "13052"
    },
    "standardDeviation": {
        "total": "86",
        "ok": "79",
        "ko": "1793"
    },
    "percentiles1": {
        "total": "84",
        "ok": "84",
        "ko": "13366"
    },
    "percentiles2": {
        "total": "128",
        "ok": "128",
        "ko": "14103"
    },
    "percentiles3": {
        "total": "172",
        "ok": "172",
        "ko": "14899"
    },
    "percentiles4": {
        "total": "217",
        "ok": "217",
        "ko": "15770"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 35076024,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 673,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 240,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "29230.782",
        "ok": "29230.582",
        "ko": "0.2"
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
