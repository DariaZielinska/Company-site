document.addEventListener('DOMContentLoaded', function(){

    //making menu visible after clicking on hamburger menu icon
    const intViewportWidth = window.innerWidth;
    if(intViewportWidth < 575){
        document.querySelector(".header-nav").style.display = "none"
    }

    document.querySelector(".fa-bars").addEventListener("click", function () {
        if(document.querySelector(".header-nav").style.display === "none"){
            document.querySelector(".header-nav").style.display = "block";
        }else{
            document.querySelector(".header-nav").style.display = "none"
        }

    });

    //generate images to portfolio section
    const portfolioContainer = document.querySelector(".portfolios-container");

    for (let i=0; i<=7; i++){
        const portfolioImage = document.createElement("div");
        portfolioContainer.append(portfolioImage)
    }

    portfolioContainer.querySelectorAll("div").forEach(function (e) {
        const header = document.createElement("p");
        header.innerText = "PROJECT TITLE";
        e.append(header)
    })

    //form validation

    let error = false;
    let errorMessage;
    const form = document.querySelector("form");
    const userName = form.querySelector("input[type='text']");
    const userEmail = document.querySelector("input[type='email']");
    const userMessage = document.querySelector("textarea");
    const errorMessageContainer = document.querySelector(".error-message");

    userName.addEventListener("keyup", function () {
        if(this.value.length === 0){
            error = true;
            errorMessage = "Field name is required";
            console.log("Field name is required");

        }else if(this.value.length < 3){
            error = true;
            errorMessage = "Field name must have at least 3 characters";
            console.log("Field name must have at least 3 characters")
        }else{
            error = false;
        }

        if (error){
            this.style.border = "1px solid red";
            errorMessageContainer.innerHTML = errorMessage;
        }else{
            this.style.border = "1px solid transparent";
            errorMessageContainer.innerHTML = null;
        }
    });

    userEmail.addEventListener("keyup", function () {

        const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!pattern.test(this.value)){
            error = true;
            errorMessage = "It's not a valid email";
            console.log("It's not a valid email")
        }else{
            error = false;
        }

        if (error){
            this.style.border = "1px solid red";
            errorMessageContainer.innerHTML = errorMessage;
        }else{
            this.style.border = "1px solid transparent";
            errorMessageContainer.innerHTML = null;
        }
    });

    userMessage.addEventListener("keyup", function () {

        if(this.value.length < 10){
            error = true;
            errorMessage = "Message must have more than 10 characters";
            console.log("Message needs to be longer than 10 characters")
        }else{
            error = false;
        }

        if (error){
            this.style.border = "1px solid red";
            errorMessageContainer.innerHTML = errorMessage;
        }else{
            this.style.border = "1px solid transparent";
            errorMessageContainer.innerHTML = null;
        }
    })


});