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
    function myFunction() {
        document.getElementById("item3_event").innerHTML = "Thanks for all you do! We couldn't get along without you.";
      }

    let userName=document.getElementById("txtUserName");
    let email=document.getElementById("txtEmail");
    let phone=document.getElementById("txtPhone");
    let city=document.getElementById("txtCity");
    let gender=document.getElementById("txtGender");
    let weightA=document.getElementById("txtWeight");
    let age=document.getElementById("txtAge");
    let country=document.getElementById("txtCountry");
    let bloodType=document.getElementById("txtBloodType");

    let form=document.querySelector("form");
    
    function validateInput(){
        //check username is empty 
        if(userName.value.trim()===""){
           onError(userName,"User Name cannot be empty");
        }else{
            onSuccess(userName);
        }

        if(email.value.trim()===""){
            onError(email,"Email cannot be empty");
        }else{
            if(!isValidEmail(email.value.trim())){
                onError(email,"Email is not valid");
            }else{
                onSuccess(email);
            }
        }
        let x = document.getElementById("txtPhone").value;
        if(phone.value.trim()===""|| x< 1 || x > 10){
            onError(phone," It is not valid");
         }else{
             onSuccess(phone);
         } 

         if(city.value.trim()===""){
            onError(city,"it is not valid");
         }else{
             onSuccess(city);
         }
         
         if(country.value.trim()===""){
            onError(country,"it is not valid format");
         }else{
             onSuccess(country);
         }

         if(bloodType.value.trim()===""){
            onError(bloodType,"it is not valid format");
         }else{
             onSuccess(bloodType);
         }

         if(age.value.trim()===""){
            onError(age,"it is not valid format");
         }else{
             onSuccess(age);
         }


         if(gender.value.trim()===""){
            onError(gender,"it is not valid format");
         }else{
             onSuccess(gender);
         }

         if(weightA.value.trim()===""){
            onError(weightA,"it is not valid format");
         }else{
             onSuccess(weightA);
         }
         
        //password
        if(pwd.value.trim()===""){
            onError(pwd,"User Name cannot be empty");
         }else{
             onSuccess(pwd);
         }
         if(conPwd.value.trim()===""){
            onError(conPwd,"User Name cannot be empty");
         }else{
             if(pwd.value.trim()!==conPwd.value.trim()){
                onError(conPwd,"Password & Confirm password not matching");
             }
             else
             onSuccess(conPwd);
         }
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
    function isValidPhone(){
        mobileNumberValue=phone.value.trim(); 
        validMobileNumber=/^[0-9]*$/;
        mobileNumberErr=document.getElementById('txtPhone');
        if(mobileNumberValue=="")
        {
         alert("Mobile Number is required");
        }else if(!validMobileNumber.test(mobileNumberValue)){
          alert("Mobile Number must be a number");
        }else if(mobileNumberValue.length!=10){
           alert("Mobile Number must have 10 digits");
        }
        else{
          mobileNumberErr.innerHTML="";
          return true;
        }
      }
     mobileNumber.oninput=function(){
        isValidPhone();
     }



    


