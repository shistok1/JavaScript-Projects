function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value;
    if (x == "" || y == "") {
      alert("Please fill out both first and last name");
      return false;
    } else {
        z = (x + " " + y);
        document.getElementById("fname").value = "";
        document.getElementById("lname").value = "";
        document.getElementById("output").innerHTML = z;
    }
  }