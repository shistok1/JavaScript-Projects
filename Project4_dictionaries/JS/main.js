var animal = {
    species: "dog",
    color: "black",
    breed:"labrador",
    age:5,
    sound:"bark!"
}

function dictionary() {
    document.getElementById("result").innerHTML = window.animal.sound;
}

function deleteVar() {
    delete window.animal.sound;
    document.getElementById("delete").innerHTML = "deleted";
}