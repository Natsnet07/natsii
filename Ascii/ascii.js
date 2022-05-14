"use strict";
$(document).ready(function(){
    let speed=250;
    let animationArray =[];
    var intervalID;
    var counter =0;    
    $("#start").click(function(){
        toggleBtn();
        $("#animation").prop("disabled","true");
        counter=0;
        intervalID = setInterval(startAnimation,speed);
    });
    function startAnimation(){        
        if(counter<animationArray.length){
        $("#viewer").val(animationArray[counter]);
        }
        else
        {
            counter=0;
            $("#viewer").val(animationArray[counter]);
        }
        counter++;
    }
    $("#stop").click(function(){
        toggleBtn();
        $("#animation").prop("disabled","");
        clearInterval(intervalID);
        intervalID="";
    });
    $("#animation").change(function(){
        var currOption = $("#animation").find(":selected").text();
        animationArray = ANIMATIONS[currOption].split("=====\n");
    });
    $("#fontSet").change(function(){
        var fontSize= $("#fontSet").find(":selected").val();
        $("#viewer").css("font-size",fontSize +"pt");
    });
    $("#turbo").change(function() {
        if(this.checked) {
            speed=50;
        }
        else{
            speed=250;
        }
        if(intervalID)
        {
            clearInterval(intervalID);
            intervalID= setInterval(startAnimation,speed);
        }
    });
    function toggleBtn(){
        $("#stop").prop("disabled",function(i,v){ return !v;});
        $("#start").prop("disabled",function(i,v){ return !v;});
    }
});