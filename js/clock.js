let d = new Date();
let clock = document.getElementById("clock");

function getTempo(t){
    if(t<10){
        return "0"+t;
    }
    else{
        return t;
    }
}

clock.innerText = getTempo(d.getHours()) + ":" + getTempo(d.getMinutes());
setInterval(function(){
    d = new Date();clock.innerText = getTempo(d.getHours()) + ":" + getTempo(d.getMinutes());
}, 30000);