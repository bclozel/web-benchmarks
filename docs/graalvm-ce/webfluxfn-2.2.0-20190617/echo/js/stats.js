var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "37698233",
        "ok": "37697860",
        "ko": "373"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10004"
    },
    "maxResponseTime": {
        "total": "60336",
        "ok": "863",
        "ko": "60336"
    },
    "meanResponseTime": {
        "total": "80",
        "ok": "80",
        "ko": "27245"
    },
    "standardDeviation": {
        "total": "126",
        "ok": "54",
        "ko": "23751"
    },
    "percentiles1": {
        "total": "76",
        "ok": "76",
        "ko": "10118"
    },
    "percentiles2": {
        "total": "121",
        "ok": "121",
        "ko": "60052"
    },
    "percentiles3": {
        "total": "167",
        "ok": "166",
        "ko": "60162"
    },
    "percentiles4": {
        "total": "222",
        "ok": "222",
        "ko": "60282"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 37697856,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 373,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "31415.194",
        "ok": "31414.883",
        "ko": "0.311"
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
        "total": "37698233",
        "ok": "37697860",
        "ko": "373"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10004"
    },
    "maxResponseTime": {
        "total": "60336",
        "ok": "863",
        "ko": "60336"
    },
    "meanResponseTime": {
        "total": "80",
        "ok": "80",
        "ko": "27245"
    },
    "standardDeviation": {
        "total": "126",
        "ok": "54",
        "ko": "23751"
    },
    "percentiles1": {
        "total": "76",
        "ok": "76",
        "ko": "10118"
    },
    "percentiles2": {
        "total": "121",
        "ok": "121",
        "ko": "60052"
    },
    "percentiles3": {
        "total": "167",
        "ok": "167",
        "ko": "60162"
    },
    "percentiles4": {
        "total": "222",
        "ok": "222",
        "ko": "60282"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 37697856,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 4,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 373,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "31415.194",
        "ok": "31414.883",
        "ko": "0.311"
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
