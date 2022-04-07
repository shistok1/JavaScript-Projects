var index = 0;
var arrayLength = 5;
var input = "";
const array = [];
for (let i = 0; i < arrayLength; i++) {
    array[i] = "null";
}

function getArray() {
    window.input = parseInt(document.getElementById("arrayIndex").value);
    if (typeof(window.input) === "number" && (window.input >= 0) && (window.input < window.arrayLength)) {
        document.getElementById("displayArray").innerHTML = "index " + window.input + ": " + array[window.input];
        window.index = input;   
    } else {
        document.getElementById("displayArray").innerHTML = "there is no index " + window.input;
        window.index = null;
    }
}

function replaceIndex() {
    if (window.index != null) {
        array[window.index] = document.getElementById("replaceIndex").value;
        getArray();
    }
}

function addIndex() {
    array[arrayLength] = "null";
    arrayLength++;
    document.getElementById("errorMessage").innerHTML = "Please type a number 0-" + (window.arrayLength -1);
}

let object = {
    property1: "First property ",
    property2: "Second Property ",
    displayProperties : function() {
        return this.property1 + this.property2;
    }
};

function methodTest() {
    document.getElementById("objectMethod").innerHTML = object.displayProperties();
}

function whileLoop() {
    let text = ""; i = 0;
    while (i < 10) {
        i++;
        if (i === 3) continue;
        if (i === 7) break;
        text += i + " ";
    }
    document.getElementById("whileLoop").innerHTML = text;
}