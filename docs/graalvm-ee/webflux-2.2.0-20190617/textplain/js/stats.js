var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "45128009",
        "ok": "45127557",
        "ko": "452"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60280",
        "ok": "766",
        "ko": "60280"
    },
    "meanResponseTime": {
        "total": "67",
        "ok": "67",
        "ko": "24340"
    },
    "standardDeviation": {
        "total": "115",
        "ok": "46",
        "ko": "22590"
    },
    "percentiles1": {
        "total": "62",
        "ok": "62",
        "ko": "10083"
    },
    "percentiles2": {
        "total": "99",
        "ok": "99",
        "ko": "60026"
    },
    "percentiles3": {
        "total": "144",
        "ok": "144",
        "ko": "60126"
    },
    "percentiles4": {
        "total": "195",
        "ok": "195",
        "ko": "60190"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 45127557,
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
        "count": 452,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "37575.361",
        "ok": "37574.985",
        "ko": "0.376"
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
        "total": "45128009",
        "ok": "45127557",
        "ko": "452"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60280",
        "ok": "766",
        "ko": "60280"
    },
    "meanResponseTime": {
        "total": "67",
        "ok": "67",
        "ko": "24340"
    },
    "standardDeviation": {
        "total": "115",
        "ok": "46",
        "ko": "22590"
    },
    "percentiles1": {
        "total": "63",
        "ok": "62",
        "ko": "10083"
    },
    "percentiles2": {
        "total": "99",
        "ok": "99",
        "ko": "60026"
    },
    "percentiles3": {
        "total": "144",
        "ok": "144",
        "ko": "60126"
    },
    "percentiles4": {
        "total": "195",
        "ok": "195",
        "ko": "60190"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 45127557,
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
        "count": 452,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "37575.361",
        "ok": "37574.985",
        "ko": "0.376"
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
