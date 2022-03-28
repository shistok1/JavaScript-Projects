var simpleMath = null;

function subtraction() {
    window.simpleMath = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + window.simpleMath;
}

function multiplication() {
    window.simpleMath = 6 * 8;
    document.getElementById("Math").innerHTML = "6 x 8 = " + window.simpleMath;
}

function division() {
    window.simpleMath = 48 / 6;
    document.getElementById("Math").innerHTML = "48 / 6 = " + window.simpleMath;
}

function longMath() {
    window.simpleMath = 48 / 6 * 83 - 7;
    document.getElementById("Math").innerHTML = "48 / 6 * 83 - 7 = " + window.simpleMath;
}

function modulus() {
    window.simpleMath = 25 % 6;
    document.getElementById("Math").innerHTML = "25 / 6 has a remainder of: " + window.simpleMath;
}

function negate() {
    window.simpleMath = 10;
    window.simpleMath = -window.simpleMath;
    document.getElementById("Math").innerHTML = window.simpleMath;
}

function increment() {
    window.simpleMath++;
    document.getElementById("Math").innerHTML = window.simpleMath;
}

function decrement() {
    window.simpleMath--;
    document.getElementById("Math").innerHTML = window.simpleMath;
}


function random() {
    window.simpleMath = Math.round((Math.random() * 100));
    document.getElementById("Math").innerHTML = window.simpleMath;
}