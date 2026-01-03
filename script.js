var index = 0;
var textchoice = 0;
var textoptions = [
    "Data Analyst",
    "Software Developer",
    "Machine Learning Enthusiast"
];

var speed = 50;
var writepause = 4000;
var deletepause = 1500;

const cursor = document.getElementById("blinkingcursor");
const imatext = document.getElementById("imatext");

function imawriting() {
    var txt = textoptions[textchoice];
    textchoice++;

    if (textchoice >= textoptions.length){
        textchoice = 0;
    }

    index = 0;

    writetext(txt);
}

function writetext(txt){
    if (index <= txt.length)
    {
        document.querySelector(".cursor").classList.remove("blink");
        imatext.innerHTML = txt.substring(0, index);
        index++;
        setTimeout(() => writetext(txt), speed);
    }
    else {
        document.querySelector(".cursor").classList.add("blink");
        setTimeout(() => removetext(txt), writepause);
    }
}

function removetext(txt){
    if (index > 0)
    {
        document.querySelector(".cursor").classList.remove("blink");
        index--;
        imatext.innerHTML = txt.substring(0, index);
        setTimeout(() => removetext(txt), speed);
    }
    else {
        document.querySelector(".cursor").classList.add("blink");
        setTimeout(imawriting, deletepause);
    }
}   


document.addEventListener("DOMContentLoaded", imawriting);