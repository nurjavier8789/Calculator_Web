function back() {
    var value = document.getElementById("textbox").value;
    document.getElementById("textbox").value = value.substr(0, value.length - 1);
}

function ce() {
    document.getElementById("textbox").value = "";
}

function one() {
    document.getElementById("textbox").value += 1;
}

function two() {
    document.getElementById("textbox").value += 2;
}

function three() {
    document.getElementById("textbox").value += 3;
}

function four() {
    document.getElementById("textbox").value += 4;
}

function five() {
    document.getElementById("textbox").value += 5;
}

function six() {
    document.getElementById("textbox").value += 6;
}

function seven() {
    document.getElementById("textbox").value += 7;
}

function eight() {
    document.getElementById("textbox").value += 8;
}

function nine() {
    document.getElementById("textbox").value += 9;
}

function zero() {
    document.getElementById("textbox").value += 0;
}

function zero2() {
    document.getElementById("textbox").value += "00";
}

function plus() {
    document.getElementById("textbox").value += "+";
}

function minus() {
    document.getElementById("textbox").value += "-";
}

function kali() {
    document.getElementById("textbox").value += "x";
}

function bagi() {
    document.getElementById("textbox").value += "÷";
}

function persen() {
    document.getElementById("textbox").value += "%";
}