  var barOptions = {
    animationEnabled: true,
    dataPointMaxWidth: 20,
    axisX:{
        lineColor: "#f0f1f3",
        interval: 1,
        margin: 1,
        labelFontColor: "#b4b5b9",
        tickLength: 15,
        tickColor:"#fff"
    },
    axisY:{
        lineThickness:0,
        valueFormatString:"#######k",
        interval: 3,
        gridColor: "#f0f1f3",
        labelFontColor: "#b4b5b9",
        tickLength: 15,
        tickColor:"#fff"
    },
    toolTip:{
        enabled: true,
        content: new Date().toDateString()+" , Visitors : {y}",
        backgroundColor: "#fff",
        cornerRadius: 4
    },
    data: [{
        color: "#1566d8",
        type: "column", //change it to line, area, bar, pie, etc
        dataPoints: [
            { y: 1 },
            { y: 7 },
            { y: 3 },
            { y: 8 },
            { y: 5 },
            { y: 1 },
            { y: 7 },
            { y: 1 },
            { y: 8 },
            { y: 4},
            { y: 4 },
            { y: 2 },
            { y: 3 },
            { y: 4 },
            { y: 1 },
            { y: 6 },
            { y: 7 },
            { y: 1 },
            { y: 2 },
            { y: 2 },
            { y: 4 },
            { y: 8 },
            { y: 2 },
            { y: 4 },
            { y: 5 },
            { y: 6 },
            { y: 2 },
            { y: 8 },
            { y: 9 },
            { y: 3}
            ]
    }]
};

var lineOptions={
    "users":{
        animationEnabled: true,
        axisX:{
            lineThickness:0,
            labelFontSize:0,
             tickLength: 0,
             gridThickness :0
        },
        axisY :{
            lineThickness:0,
            labelFontSize:0,
             tickLength: 0,
             gridThickness : 0
        },
        data: [{
            markerType: "none",
            type: "stackedArea",
            name: "Central",
            dataPoints: [
                { x: new Date(2017, 0), y: 90000 },
                { x: new Date(2017, 1), y: 83000 },
                { x: new Date(2017, 2), y: 97000 },
                { x: new Date(2017, 3), y: 175000 },
                { x: new Date(2017, 4), y: 148000 },
                { x: new Date(2017, 5), y: 93000 },
                { x: new Date(2017, 6), y: 131000 },
                { x: new Date(2017, 7), y: 142000 },
                { x: new Date(2017, 8), y: 156000 },
                { x: new Date(2017, 9), y: 134000 },
                { x: new Date(2017, 10), y: 115000 },
                { x: new Date(2017, 11), y: 98000 }
            ]
        }]
    },
     "visits":{
        animationEnabled: true,
        axisX:{
            lineThickness:0,
            labelFontSize:0,
             tickLength: 0,
             gridThickness :0
        },
        axisY :{
            lineThickness:0,
            labelFontSize:0,
             tickLength: 0,
             gridThickness : 0
        },
        data: [{
            color:"#33aa45",
            markerType: "none",
            type: "stackedArea",
            name: "Central",
            dataPoints: [
                { x: new Date(2017, 0), y: 90000 },
                { x: new Date(2017, 1), y: 83000 },
                { x: new Date(2017, 2), y: 97000 },
                { x: new Date(2017, 3), y: 175000 },
                { x: new Date(2017, 4), y: 148000 },
                { x: new Date(2017, 5), y: 93000 },
                { x: new Date(2017, 6), y: 131000 },
                { x: new Date(2017, 7), y: 142000 },
                { x: new Date(2017, 8), y: 156000 },
                { x: new Date(2017, 9), y: 134000 },
                { x: new Date(2017, 10), y: 115000 },
                { x: new Date(2017, 11), y: 98000 }
            ]
        }]
    },
     "bounce":{
        animationEnabled: true,
        axisX:{
            lineThickness:0,
            labelFontSize:0,
             tickLength: 0,
             gridThickness :0
        },
        axisY :{
            lineThickness:0,
            labelFontSize:0,
             tickLength: 0,
             gridThickness : 0
        },
        data: [{
            color:"#9a92f7",
            markerType: "none",
            type: "stackedArea",
            name: "Central",
            dataPoints: [
                { x: new Date(2017, 0), y: 90000 },
                { x: new Date(2017, 1), y: 83000 },
                { x: new Date(2017, 2), y: 97000 },
                { x: new Date(2017, 3), y: 175000 },
                { x: new Date(2017, 4), y: 148000 },
                { x: new Date(2017, 5), y: 93000 },
                { x: new Date(2017, 6), y: 131000 },
                { x: new Date(2017, 7), y: 142000 },
                { x: new Date(2017, 8), y: 156000 },
                { x: new Date(2017, 9), y: 134000 },
                { x: new Date(2017, 10), y: 115000 },
                { x: new Date(2017, 11), y: 98000 }
            ]
        }]
    },
       "duration":{
        animationEnabled: true,
        axisX:{
            lineThickness:0,
            labelFontSize:0,
             tickLength: 0,
             gridThickness :0
        },
        axisY :{
            lineThickness:0,
            labelFontSize:0,
             tickLength: 0,
             gridThickness : 0
        },
        data: [{
            color:"#f9ce57",
            markerType: "none",
            type: "stackedArea",
            name: "Central",
            dataPoints: [
                { x: new Date(2017, 0), y: 90000 },
                { x: new Date(2017, 1), y: 83000 },
                { x: new Date(2017, 2), y: 97000 },
                { x: new Date(2017, 3), y: 175000 },
                { x: new Date(2017, 4), y: 148000 },
                { x: new Date(2017, 5), y: 93000 },
                { x: new Date(2017, 6), y: 131000 },
                { x: new Date(2017, 7), y: 142000 },
                { x: new Date(2017, 8), y: 156000 },
                { x: new Date(2017, 9), y: 134000 },
                { x: new Date(2017, 10), y: 115000 },
                { x: new Date(2017, 11), y: 98000 }
            ]
        }]
    }
}

var mostVisitedData = [
    {
        pagename:"/store/",
        url:"#",
        visitor:4890,
        uniqueVisitor:3985,
        bounce:"81.56%",
    },  {
        pagename:"/store/symbols-styleguides",
        url:"#",
        visitor:3785,
        uniqueVisitor:3182,
        bounce:"62.56%"
    },  {
        pagename:"/store/dashboard-ui-kit",
        url:"#",
        visitor:2985,
        uniqueVisitor:2115,
        bounce:"58.76%",
    },  {
        pagename:"/store/webflow-cards.html",
        url:"#",
        visitor:2440,
        uniqueVisitor:1789,
        bounce:"39.59%"
    }
]

var socialMediaTrafficData = [
    {
        network:"Instagram",
        visitor:3550
    },  {
        network:"Facebook",
        visitor:2236
    },  {
        network:"Twitter",
        visitor:1795
    },  {
        network:"LinkedIn",
        visitor:62
    }
]