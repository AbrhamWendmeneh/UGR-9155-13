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
  let dots = document.getElementsByClassName("slideshow--container--dot");
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

const hamburgerMenu=document.querySelector(".hamburger-menu");
const navMenu=document.querySelector(".nav-menu");


hamburgerMenu.addEventListener("click",() => {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link-menuItem").forEach(n=>n.addEventListener("click",()=>{
  hamburgerMenu.classList.remove("active");
  navMenu.classList.remove("active");
}))






function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
  // Retrieving the values of form elements 
  
  var email = document.contactForm.email.value;
  var password= document.contactForm.password.value;
  
  
  if(email == "") {
  printError("emailEror", "Please enter your email address");
  }
  
  else {
  // Regular expression for basic email validation
  var regex = /^\S+@\S+\.\S+$/;

  if(regex.test(email) === false) {
      printError("emailEror", "Please enter a valid email address");
  } 

  else{
      printError("emailEror", "");
      emailEror = false;
  }
  }
  if( emailEror ==true){
      return false;
   } else {
       // Creating a string from input data for preview
       var dataPreview = "You've entered the following details: \n" +
                        // "Full Name: " + name + "\n" +
                         "Email Address: " + email + "\n" +
                         //"Mobile Number: " + mobile + "\n" +
                         //"Country: " + country + "\n" +
                         //"Gender: " + gender + "\n";
       
       // Display input data in a dialog box before submitting the form
       alert(dataPreview);
   }
};


let email=document.getElementById("txtEmail");
let pwd=document.getElementById("txtPwd");


if(email.value.trim()===""){
  onError(email,"Email cannot be empty");
}else{
  if(!isValidEmail(email.value.trim())){
      onError(email,"Email is not valid");
  }else{
      onSuccess(email);
  }
}


//password
if(pwd.value.trim()===""){
  onError(pwd,"User Name cannot be empty");
}else{
   onSuccess(pwd);
}

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});


function onSuccess(input){
  let parent=input.parentElement;
  let messageEle=parent.querySelector("small");
  messageEle.style.visibility="hidden"; 
  parent.classList.remove("error");
  parent.classList.add("success");  
}
function onError(input,message){
  let parent=input.parentElement;
  let messageEle=parent.querySelector("small");
  messageEle.style.visibility="visible";
  messageEle.innerText=message;  
  parent.classList.add("error");
  parent.classList.remove("success");

}

function isValidEmail(email){
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}