var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "15374390",
        "ok": "15374283",
        "ko": "107"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60039",
        "ok": "912",
        "ko": "60039"
    },
    "meanResponseTime": {
        "total": "197",
        "ok": "197",
        "ko": "58603"
    },
    "standardDeviation": {
        "total": "186",
        "ok": "102",
        "ko": "8255"
    },
    "percentiles1": {
        "total": "205",
        "ok": "205",
        "ko": "60002"
    },
    "percentiles2": {
        "total": "302",
        "ok": "302",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "324",
        "ok": "324",
        "ko": "60023"
    },
    "percentiles4": {
        "total": "340",
        "ok": "340",
        "ko": "60033"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 15374262,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 21,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 107,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "12801.324",
        "ok": "12801.235",
        "ko": "0.089"
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
        "total": "15374390",
        "ok": "15374283",
        "ko": "107"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60039",
        "ok": "912",
        "ko": "60039"
    },
    "meanResponseTime": {
        "total": "197",
        "ok": "197",
        "ko": "58603"
    },
    "standardDeviation": {
        "total": "186",
        "ok": "102",
        "ko": "8255"
    },
    "percentiles1": {
        "total": "205",
        "ok": "205",
        "ko": "60002"
    },
    "percentiles2": {
        "total": "302",
        "ok": "302",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "324",
        "ok": "324",
        "ko": "60023"
    },
    "percentiles4": {
        "total": "340",
        "ok": "340",
        "ko": "60033"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 15374262,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 21,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 107,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "12801.324",
        "ok": "12801.235",
        "ko": "0.089"
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
