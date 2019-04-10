
function whatToDo(dayOfWeek, weather) {
     if(dayOfWeek === "saturday"&& weather ==="sunny"){
    $("#result").html("I'll go for a bike ride.");
   }
    
    if(dayOfWeek === "saturday" && weather==="cloudy"){
    $("#result").html("I'll go binge watch Netflix.");
    }
    
    if(dayOfWeek==="sunday" && weather==="sunny"){
        $("#result").html("I'll go to the park.");
}

    if(dayOfWeek==="sunday" && weather==="cloudy"){
    $("#result").html("I'll go binge watch Netflix.");
}

else{"I'll stay inside"}



} 

$("button").click(function(){
    var dayOfWeek = $("#dayOfWeek").val();
    var weather = $("#weather").val();
    whatToDo(dayOfWeek, weather);      
    
});