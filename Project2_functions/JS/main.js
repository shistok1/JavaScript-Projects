
function changeColor() { //initialize function
    var colorParagraph = document.getElementById("p1"); //create variable to correspond with id p1
    colorParagraph.style.color = "blue"; //set color of the text in the <p> tag associated with said variable
    colorParagraph.innerHTML += " that is blue now!"; // concatenate string with text associated inside said <p> tag
}