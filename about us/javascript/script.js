let countDate = new Date('Febraury 14, 2023 00:00:00').getTime();

function countDown(){

    let now = new Date().getTime();

    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap/(day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute)); 
    let s = Math.floor((gap % (minute)) / (second));  

    document.getElementById("day").innerText = d;
    document.getElementById("hour").innerText = h;
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;
}

setInterval(function(){
    countDown();
},1000)


function validateform() {
    var name = document.getElementById("Firstname").value;
    var email = document.getElementById("Email").value;
    var number = document.getElementById("Number").value;

    if (name == null || name == "") {
        alert("Please enter your name");
    }
    else if (email == null || email == "") {
        alert("Please enter you email");
    }
    else if (number == null || number == ""){
        alert("Please enter you phone number");
    }
    else if (number.length < 10 ){
        alert("Number must have ten integer value");
    }

    else {
        alert("Thank you for your message..!")
    }
}

function add(){
    alert("Added to cart Successfullyyy!")
  }

  