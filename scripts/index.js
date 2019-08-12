(function(){
   let  init = (function(){
        createBarGraph();
        createLineGraph();
        createVisitedPagesTable();
        createSocialMediaTrafficTable();
        bindEvents();
    });
   let bindEvents = () => {
       $("#dashboardButton").on("click",function(){
           $("#dashboardItems").toggle();
       });
       
       $("#openNavBar").on("click",function(){
           $("#sideNavBar").toggle();
           $(this).toggleClass("active");
       })
   }
   let createBarGraph = () =>{
        $("#resizable").resizable({
            create: function (event, ui) {
                $("#chartContainer").CanvasJSChart(barOptions);
            },
            resize: function (event, ui) {
                $("#chartContainer").CanvasJSChart().render();
            }
        });
   }
   let createLineGraph = () => {
          $("#chartContainer1").CanvasJSChart(lineOptions.users);
          $("#chartContainer2").CanvasJSChart(lineOptions.visits);
          $("#chartContainer3").CanvasJSChart(lineOptions.bounce);
          $("#chartContainer4").CanvasJSChart(lineOptions.duration)
   }
   let createVisitedPagesTable = () => {
       let tr;
       mostVisitedData.map((page,index) => {
            tr = document.createElement("tr");
            for(let values in page){
                let td = document.createElement("td");
                if(values == "url"){
                    let redirectLink = document.createElement("a");
                    redirectLink.href= page.url;
                    redirectLink.innerHTML="<i class='fa fa-external-link'></i>"
                    td.appendChild(redirectLink);
                }else{
                     td.appendChild(document.createTextNode(page[values]));
                }
                tr.appendChild(td);
            }
            $("#visitsTable tbody").append(tr);
       });

   }
   let createSocialMediaTrafficTable =() => {
        let tr;
       socialMediaTrafficData.map((page,index) => {
            tr = document.createElement("tr");
            for(let values in page){
                let td = document.createElement("td");
                td.appendChild(document.createTextNode(page[values]));
                tr.appendChild(td);
            }
            $("#socialTraffic tbody").append(tr);
       });
   }
    init();
})();
