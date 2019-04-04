var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "43816170",
        "ok": "43815717",
        "ko": "453"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60238",
        "ok": "803",
        "ko": "60238"
    },
    "meanResponseTime": {
        "total": "69",
        "ok": "69",
        "ko": "24304"
    },
    "standardDeviation": {
        "total": "117",
        "ok": "49",
        "ko": "22573"
    },
    "percentiles1": {
        "total": "62",
        "ok": "62",
        "ko": "10084"
    },
    "percentiles2": {
        "total": "99",
        "ok": "99",
        "ko": "60022"
    },
    "percentiles3": {
        "total": "156",
        "ok": "156",
        "ko": "60119"
    },
    "percentiles4": {
        "total": "221",
        "ok": "221",
        "ko": "60181"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 43815716,
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
        "count": 453,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "36513.475",
        "ok": "36513.098",
        "ko": "0.378"
    }
},
contents: {
"req_jsonpost-8a187": {
        type: "REQUEST",
        name: "jsonPost",
path: "jsonPost",
pathFormatted: "req_jsonpost-8a187",
stats: {
    "name": "jsonPost",
    "numberOfRequests": {
        "total": "43816170",
        "ok": "43815717",
        "ko": "453"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60238",
        "ok": "803",
        "ko": "60238"
    },
    "meanResponseTime": {
        "total": "69",
        "ok": "69",
        "ko": "24304"
    },
    "standardDeviation": {
        "total": "117",
        "ok": "49",
        "ko": "22573"
    },
    "percentiles1": {
        "total": "62",
        "ok": "62",
        "ko": "10084"
    },
    "percentiles2": {
        "total": "100",
        "ok": "99",
        "ko": "60022"
    },
    "percentiles3": {
        "total": "156",
        "ok": "156",
        "ko": "60119"
    },
    "percentiles4": {
        "total": "221",
        "ok": "221",
        "ko": "60181"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 43815716,
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
        "count": 453,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "36513.475",
        "ok": "36513.098",
        "ko": "0.378"
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
