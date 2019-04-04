var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "48092170",
        "ok": "48091721",
        "ko": "449"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60331",
        "ok": "782",
        "ko": "60331"
    },
    "meanResponseTime": {
        "total": "63",
        "ok": "63",
        "ko": "24437"
    },
    "standardDeviation": {
        "total": "111",
        "ok": "44",
        "ko": "22634"
    },
    "percentiles1": {
        "total": "59",
        "ok": "59",
        "ko": "10086"
    },
    "percentiles2": {
        "total": "93",
        "ok": "93",
        "ko": "60029"
    },
    "percentiles3": {
        "total": "135",
        "ok": "135",
        "ko": "60130"
    },
    "percentiles4": {
        "total": "188",
        "ok": "187",
        "ko": "60210"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 48091721,
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
        "count": 449,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "40076.808",
        "ok": "40076.434",
        "ko": "0.374"
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
        "total": "48092170",
        "ok": "48091721",
        "ko": "449"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "10001"
    },
    "maxResponseTime": {
        "total": "60331",
        "ok": "782",
        "ko": "60331"
    },
    "meanResponseTime": {
        "total": "63",
        "ok": "63",
        "ko": "24437"
    },
    "standardDeviation": {
        "total": "111",
        "ok": "44",
        "ko": "22634"
    },
    "percentiles1": {
        "total": "59",
        "ok": "59",
        "ko": "10086"
    },
    "percentiles2": {
        "total": "93",
        "ok": "93",
        "ko": "60029"
    },
    "percentiles3": {
        "total": "135",
        "ok": "135",
        "ko": "60130"
    },
    "percentiles4": {
        "total": "187",
        "ok": "188",
        "ko": "60210"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 48091721,
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
        "count": 449,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "40076.808",
        "ok": "40076.434",
        "ko": "0.374"
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
