var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30474036",
        "ok": "30473930",
        "ko": "106"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60517",
        "ok": "698",
        "ko": "60517"
    },
    "meanResponseTime": {
        "total": "99",
        "ok": "99",
        "ko": "59088"
    },
    "standardDeviation": {
        "total": "123",
        "ok": "53",
        "ko": "6807"
    },
    "percentiles1": {
        "total": "103",
        "ok": "102",
        "ko": "60003"
    },
    "percentiles2": {
        "total": "151",
        "ok": "151",
        "ko": "60014"
    },
    "percentiles3": {
        "total": "168",
        "ok": "168",
        "ko": "60138"
    },
    "percentiles4": {
        "total": "184",
        "ok": "184",
        "ko": "60462"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 30473930,
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
        "count": 106,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "25373.885",
        "ok": "25373.797",
        "ko": "0.088"
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
        "total": "30474036",
        "ok": "30473930",
        "ko": "106"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60517",
        "ok": "698",
        "ko": "60517"
    },
    "meanResponseTime": {
        "total": "99",
        "ok": "99",
        "ko": "59088"
    },
    "standardDeviation": {
        "total": "123",
        "ok": "53",
        "ko": "6807"
    },
    "percentiles1": {
        "total": "103",
        "ok": "103",
        "ko": "60003"
    },
    "percentiles2": {
        "total": "151",
        "ok": "151",
        "ko": "60014"
    },
    "percentiles3": {
        "total": "168",
        "ok": "168",
        "ko": "60138"
    },
    "percentiles4": {
        "total": "184",
        "ok": "184",
        "ko": "60462"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 30473930,
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
        "count": 106,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "25373.885",
        "ok": "25373.797",
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
