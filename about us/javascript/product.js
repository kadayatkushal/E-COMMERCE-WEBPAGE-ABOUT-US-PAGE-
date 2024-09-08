let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//timer 
let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minutesItem = document.querySelector("#minutes");
let secondsItem = document.querySelector("#seconds");

let countDown = () => {
    let futureDate = new Date("14 February 2023");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(myDate / 1000 / 60) % 60;
    let seconds = Math.floor(myDate / 1000) % 60;

    if (days < 10) {
        daysItem.innerHTML = "0" + days;
    }
    else {
        daysItem.innerHTML = days;
    }

    if (hours < 10) {
        hoursItem.innerHTML = "0" + hours;
    }
    else {
        hoursItem.innerHTML = hours;
    }

    if (minutes < 10) {
        minutesItem.innerHTML = "0" + minutes;
    }
    else {
        minutesItem.innerHTML = minutes;
    }

    if (seconds < 10) {
        secondsItem.innerHTML = "0" + seconds;
    }
    else {
        secondsItem.innerHTML = seconds;
    }
}

countDown()

setInterval(countDown, 1000)

//alert
function openpopup() {
    alert("Added To Cart Successfully!")
}

function add(){
  alert("Added to cart Successfullyyy!")
}