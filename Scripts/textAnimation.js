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
        blinkLoop(obj)
        return;
    }
    var serviceList = document.getElementById("service-list");
    var point;
    var bullet = document.createElement("li");
    serviceList.appendChild(bullet);
    typing(bullet, arr[curLine], curLine, 10); 
    
}


 function typing(object, text, curLine=0, CharactersPerSecond=5, currentTextIndex=1){
    if(object.innerText.length < text.length+1){
        object.innerText = text.substring(0, currentTextIndex)+"|";
        setTimeout(function() { typing(object, text, curLine, CharactersPerSecond, currentTextIndex+1); }, 1000/CharactersPerSecond);
    }
    else{
        object.innerText = text;
        setTimeout(function() {TypeBulletPoint(curLine+1, object);}, 1000/CharactersPerSecond);
    }
}

function blinkLoop(object, blinkPerSecond=1, isCursorVis = true){
    if(isCursorVis)
        object.innerText += "|";
    else
        if(object.innerText[object.innerText.length-1]=="|")
            object.innerText = object.innerText.substring(0, object.innerText.length - 1)
    isCursorVis = !isCursorVis;
    setTimeout(function() { blinkLoop(object, blinkPerSecond, isCursorVis); }, 500/blinkPerSecond);
}