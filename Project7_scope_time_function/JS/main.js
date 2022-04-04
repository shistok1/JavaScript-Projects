var globalVariable = 97;
function function1() {
    var localVariable1 = globalVariable;
    var localVariable2;
    localVariable2 = document.globalVariable;
    console.log(document.globalVariable, localVariable1, localVariable2);
    document.getElementById("scope").innerHTML = (document.globalVariable, localVariable1, localVariable2);
}

function getDate() {
    if (new Date().getHours() < 18) {
        document.getElementById("greeting").innerHTML = "How are you today?";
    } else {
        document.getElementById("greeting").innerHTML = "Have a terrible day!";
    }
}

function getPassword() {
    var passInput, passOutput;
    passInput = document.getElementById("pass").value;
    if (passInput == "password") {
        document.getElementById("passResult").innerHTML = "Correct!";
    } else {
        document.getElementById("passResult").innerHTML =  "Incorrect, try again.";
    }
}

function timeFunction() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "It's morning time!";
    } else if (time >= 12 == time < 18) {
        reply = "It's afternoon.";
    } else {
        reply = "It's evening time.";
    }
    document.getElementById("timeOfDay").innerHTML = reply;
}