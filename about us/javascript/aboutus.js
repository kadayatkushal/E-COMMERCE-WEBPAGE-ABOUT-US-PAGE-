
function validateform() {
    var name = document.getElementById("Firstname").value;
    var email = document.getElementById("Email").value;
    var subject = document.getElementById("Subject").value;

    if (name == null || name == "") {
        alert("Please enter your name");
    }
    else if (email == null || email == "") {
        alert("Please enter you email");
    }
    else if (subject == null || subject == ""){
        alert("Please mention a subject!")
    }
    else {
        alert("Thank you for your message..!")
    }
}