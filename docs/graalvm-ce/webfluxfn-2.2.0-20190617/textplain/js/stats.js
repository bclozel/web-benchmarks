var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "48920982",
        "ok": "48920612",
        "ko": "370"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10002"
    },
    "maxResponseTime": {
        "total": "60235",
        "ok": "813",
        "ko": "60235"
    },
    "meanResponseTime": {
        "total": "62",
        "ok": "62",
        "ko": "27501"
    },
    "standardDeviation": {
        "total": "109",
        "ok": "44",
        "ko": "23834"
    },
    "percentiles1": {
        "total": "58",
        "ok": "58",
        "ko": "10092"
    },
    "percentiles2": {
        "total": "91",
        "ok": "91",
        "ko": "60040"
    },
    "percentiles3": {
        "total": "136",
        "ok": "136",
        "ko": "60139"
    },
    "percentiles4": {
        "total": "185",
        "ok": "185",
        "ko": "60191"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 48920611,
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
        "count": 370,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "40767.485",
        "ok": "40767.177",
        "ko": "0.308"
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
        "total": "48920982",
        "ok": "48920612",
        "ko": "370"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10002"
    },
    "maxResponseTime": {
        "total": "60235",
        "ok": "813",
        "ko": "60235"
    },
    "meanResponseTime": {
        "total": "62",
        "ok": "62",
        "ko": "27501"
    },
    "standardDeviation": {
        "total": "109",
        "ok": "44",
        "ko": "23834"
    },
    "percentiles1": {
        "total": "58",
        "ok": "58",
        "ko": "10092"
    },
    "percentiles2": {
        "total": "91",
        "ok": "91",
        "ko": "60040"
    },
    "percentiles3": {
        "total": "136",
        "ok": "136",
        "ko": "60139"
    },
    "percentiles4": {
        "total": "185",
        "ok": "185",
        "ko": "60191"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 48920611,
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
        "count": 370,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "40767.485",
        "ok": "40767.177",
        "ko": "0.308"
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
