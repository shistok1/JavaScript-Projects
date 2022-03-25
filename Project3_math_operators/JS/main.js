var simpleMath = null;
var para = document.getElementById("Math");

function subtraction() {
    window.simpleMath = 5 - 2;
    window.para = "5 - 2 = " + window.simpleMath;
}

function multiplication() {
    window.simpleMath = 6 * 8;
    para.window = "6 x 8 = " + window.simpleMath;
}

function division() {
    window.simpleMath = 48 / 6;
    para.innerHTML = "48 / 6 = " + window.simpleMath;
}

function longMath() {
    window.simpleMath = 48 / 6 * 83 - 7;
    para.innerHTML = "48 / 6 * 83 - 7 = " + window.simpleMath;
}

function modulus() {
    window.simpleMath = 25 % 6;
    para.innerHTML = "25 / 6 has a remainder of: " + window.simpleMath;
}

function negate() {
    window.simpleMath = 10;
    window.simpleMath = -window.simpleMath;
    para.innerHTML = window.simpleMath;
}

function increment() {
    window.simpleMath++;
    para.innerHTML = window.simpleMath;
}

function random() {
    window.simpleMath++;
    para.innerHTML = window.simpleMath;
}