function TypeBulletPoint(curLine = 0, obj = null){
    var arr = [
                "Custom Website Design",
                "Website Redesign",
                "Website Maintanance",
                "Landing Page Design",
                "Web Hosting Setup",
                "API Integration",
    ]
    if(curLine >= arr.length){
//        blinkLoop(obj)
        return;
    }
    var serviceList = document.getElementById("service-list");
    var point;
    var bullet = document.createElement("li");
    serviceList.appendChild(bullet);
    typeList(bullet, arr[curLine], 10, curLine); 
    
}

function typeSingle(object, text, cps, blinker = true, ondone = null, start = true,){
    if(start){
        typeManager(object, text, cps)
        start = false;
    }
    if(object.innerText == text){
        if(blinker)
            blinkLoop(object);
        if(ondone)
            ondone();
        return true;
    }
    else
        setTimeout(function() {typeSingle(object, text, cps, blinker, ondone, start)}, 100);

}

function typeList(object, text, cps, curLine){
    endedList(object,cps,curLine)
    function endedList(object, cps, curLine){
        if(object.innerText == text)
            setTimeout(function() {TypeBulletPoint(curLine+1, object);}, 1000/cps);
        else
            setTimeout(function() {endedList(object, cps, curLine)}, 300);
    }
    typeManager(object, text, cps)
}


 function typeManager(object, text, cps){
    typing(object, text, cps); 
}

 function typing(object, text, CharactersPerSecond=5, currentTextIndex=1){
    if(object.innerText.length < text.length+1){
        object.innerText = text.substring(0, currentTextIndex)+"|";
        setTimeout(function() { typing(object, text, CharactersPerSecond, currentTextIndex+1); }, 1000/CharactersPerSecond);
    }
    else{
        object.innerText = text;
    }
}

function blinkLoop(object, blinkPerSecond=1, isCursorVis = true){
    if(isCursorVis)
        object.innerText += "|";
    else
        if(object.innerText[object.innerText.length-1]=="|")
            object.innerText = object.innerText.substring(0, object.innerText.length - 1)
    setTimeout(function() { blinkLoop(object, blinkPerSecond, !isCursorVis); }, 500/blinkPerSecond);
}