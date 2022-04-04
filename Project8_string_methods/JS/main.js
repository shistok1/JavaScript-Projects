function concatString() {
    var string1 = "This is the first string. ";
    var string2 = "This is the second string";
    string3 = string1.concat(string2);
    document.getElementById("concatenate").innerHTML = string3;
}

function sliceMethod() {
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27,33);
    section = section.toUpperCase();
    document.getElementById("slice").innerHTML = section;
}

function searchMethod() {
    var sentence = "All work and no play makes Johnny a dull boy.";
    var sentenceSearch = sentence.search("Johnny");
    document.getElementById("search").innerHTML = sentenceSearch;
}

function stringMethod() {
    var x = 182;
    document.getElementById("numbersToString").innerHTML = x.toString();
}

function precisionMethod() {
    var x = 12938.3012987376112;
    document.getElementById("precision").innerHTML = x.toPrecision(10);
}

function fixedMethod() {
    var number = 5.56789;
    var fixedNumber = number.toFixed(2);
    document.getElementById("fixed").innerHTML = fixedNumber;
}

function valueMethod() {
    var text = "Hello World!";
    var textResult = text.valueOf();
    document.getElementById("valueof").innerHTML = textResult;
}