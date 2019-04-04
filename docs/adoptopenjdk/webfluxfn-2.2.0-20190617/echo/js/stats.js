var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "34891274",
        "ok": "34891168",
        "ko": "106"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10129"
    },
    "maxResponseTime": {
        "total": "60311",
        "ok": "1115",
        "ko": "60311"
    },
    "meanResponseTime": {
        "total": "87",
        "ok": "87",
        "ko": "59153"
    },
    "standardDeviation": {
        "total": "118",
        "ok": "56",
        "ko": "6798"
    },
    "percentiles1": {
        "total": "84",
        "ok": "84",
        "ko": "60078"
    },
    "percentiles2": {
        "total": "127",
        "ok": "127",
        "ko": "60136"
    },
    "percentiles3": {
        "total": "177",
        "ok": "177",
        "ko": "60220"
    },
    "percentiles4": {
        "total": "239",
        "ok": "239",
        "ko": "60277"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 34891160,
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
        "count": 106,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "29076.062",
        "ok": "29075.973",
        "ko": "0.088"
    }
},
contents: {
"req_echo-cbb11": {
        type: "REQUEST",
        name: "echo",
path: "echo",
pathFormatted: "req_echo-cbb11",
stats: {
    "name": "echo",
    "numberOfRequests": {
        "total": "34891274",
        "ok": "34891168",
        "ko": "106"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10129"
    },
    "maxResponseTime": {
        "total": "60311",
        "ok": "1115",
        "ko": "60311"
    },
    "meanResponseTime": {
        "total": "87",
        "ok": "87",
        "ko": "59153"
    },
    "standardDeviation": {
        "total": "118",
        "ok": "56",
        "ko": "6798"
    },
    "percentiles1": {
        "total": "84",
        "ok": "84",
        "ko": "60078"
    },
    "percentiles2": {
        "total": "127",
        "ok": "127",
        "ko": "60136"
    },
    "percentiles3": {
        "total": "177",
        "ok": "177",
        "ko": "60220"
    },
    "percentiles4": {
        "total": "239",
        "ok": "239",
        "ko": "60277"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 34891160,
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
        "count": 106,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "29076.062",
        "ok": "29075.973",
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
