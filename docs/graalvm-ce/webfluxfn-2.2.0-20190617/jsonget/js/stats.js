var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "44140481",
        "ok": "44140113",
        "ko": "368"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10002"
    },
    "maxResponseTime": {
        "total": "60261",
        "ok": "740",
        "ko": "60261"
    },
    "meanResponseTime": {
        "total": "69",
        "ok": "68",
        "ko": "27603"
    },
    "standardDeviation": {
        "total": "116",
        "ok": "50",
        "ko": "23871"
    },
    "percentiles1": {
        "total": "62",
        "ok": "62",
        "ko": "10095"
    },
    "percentiles2": {
        "total": "102",
        "ok": "102",
        "ko": "60059"
    },
    "percentiles3": {
        "total": "154",
        "ok": "154",
        "ko": "60159"
    },
    "percentiles4": {
        "total": "215",
        "ok": "215",
        "ko": "60233"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 44140113,
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
        "count": 368,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "36753.107",
        "ok": "36752.8",
        "ko": "0.306"
    }
},
contents: {
"req_jsonget-66b2f": {
        type: "REQUEST",
        name: "jsonGet",
path: "jsonGet",
pathFormatted: "req_jsonget-66b2f",
stats: {
    "name": "jsonGet",
    "numberOfRequests": {
        "total": "44140481",
        "ok": "44140113",
        "ko": "368"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10002"
    },
    "maxResponseTime": {
        "total": "60261",
        "ok": "740",
        "ko": "60261"
    },
    "meanResponseTime": {
        "total": "69",
        "ok": "68",
        "ko": "27603"
    },
    "standardDeviation": {
        "total": "116",
        "ok": "50",
        "ko": "23871"
    },
    "percentiles1": {
        "total": "62",
        "ok": "62",
        "ko": "10095"
    },
    "percentiles2": {
        "total": "102",
        "ok": "102",
        "ko": "60059"
    },
    "percentiles3": {
        "total": "154",
        "ok": "154",
        "ko": "60159"
    },
    "percentiles4": {
        "total": "215",
        "ok": "215",
        "ko": "60233"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 44140113,
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
        "count": 368,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "36753.107",
        "ok": "36752.8",
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
