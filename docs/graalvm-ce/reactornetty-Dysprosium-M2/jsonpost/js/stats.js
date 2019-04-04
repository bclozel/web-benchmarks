var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "35581819",
        "ok": "35581452",
        "ko": "367"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10002"
    },
    "maxResponseTime": {
        "total": "60429",
        "ok": "916",
        "ko": "60429"
    },
    "meanResponseTime": {
        "total": "85",
        "ok": "85",
        "ko": "27668"
    },
    "standardDeviation": {
        "total": "130",
        "ok": "56",
        "ko": "23889"
    },
    "percentiles1": {
        "total": "82",
        "ok": "82",
        "ko": "10119"
    },
    "percentiles2": {
        "total": "128",
        "ok": "127",
        "ko": "60061"
    },
    "percentiles3": {
        "total": "176",
        "ok": "177",
        "ko": "60201"
    },
    "percentiles4": {
        "total": "222",
        "ok": "222",
        "ko": "60297"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 35581444,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 8,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 367,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "29626.827",
        "ok": "29626.521",
        "ko": "0.306"
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
        "total": "35581819",
        "ok": "35581452",
        "ko": "367"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10002"
    },
    "maxResponseTime": {
        "total": "60429",
        "ok": "916",
        "ko": "60429"
    },
    "meanResponseTime": {
        "total": "85",
        "ok": "85",
        "ko": "27668"
    },
    "standardDeviation": {
        "total": "130",
        "ok": "56",
        "ko": "23889"
    },
    "percentiles1": {
        "total": "82",
        "ok": "82",
        "ko": "10119"
    },
    "percentiles2": {
        "total": "127",
        "ok": "128",
        "ko": "60061"
    },
    "percentiles3": {
        "total": "177",
        "ok": "177",
        "ko": "60201"
    },
    "percentiles4": {
        "total": "222",
        "ok": "222",
        "ko": "60297"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 35581444,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 8,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 367,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "29626.827",
        "ok": "29626.521",
        "ko": "0.306"
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
