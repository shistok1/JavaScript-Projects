function switchStatement() {
    input = (document.getElementById("switchSelect").value).toLowerCase()   ;
    switch(input) {
        case "orange":
            output = "You chose: " + input;
            document.getElementById("switchStatement").style.color = "orange";
            break;
        case "green":
            output = "You chose: " + input;
            document.getElementById("switchStatement").style.color = "green";
            break;
        case "blue":
            output = "You chose: " + input;
            document.getElementById("switchStatement").style.color = "blue";
            break;
        default:
            output = "Please choose between Green, Orange, or Blue.";
    }
    document.getElementById("switchStatement").innerHTML = output;
}