var string1 = "This is a string"; //set string 
var int1 = 5; //set number
document.write(typeof(string1) + "  "); //write datatype of string
document.write(typeof(int1) + "  "); // write datatype number
document.write(10E999 + "  "); //write infinity
document.write(-10E999 + "  "); //write negative infinity
document.write(10 > 5); // write boolean return for greater than operand 
document.write(" "); // empty space between results because for some reason adding concatenating with previous operand specifically does not return desired outcome
document.write(5 > 10); // write boolean return for less than operand
console.log(int1, string1); //log number and string in console
console.log(10 < 5); //log boolean return of less than operand in console
console.log(1 == 5, 1 == 1); // log boolean returns of comparisons in console
console.log(1 === 1, 1 === 0, 1 === "1", 1 === "1"); // log boolean returns of strict comparison in console
console.log(1 == 1 && 1 < 0, 1 == 1 && 1 > 0, 1 == 1 || 1 == 0, 1 == 2 || 2 == 1); // log boolean return of leneant comparison in console

function notFunction() { //inititalize function
    document.getElementById("not").innerHTML = !(1 < 9) + "" + !(1 > 9);
    //write true and false boolean returns using the NOT operator
}