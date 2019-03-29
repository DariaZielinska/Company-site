document.addEventListener('DOMContentLoaded', function(){

    //making menu visible after clicking on hamburger menu icon
    document.querySelector(".fa-bars").addEventListener("click", function () {

        const openNav = document.querySelector(".header__nav--opened");
        const closedNav =  document.querySelector(".header__nav");

        if(openNav){
            openNav.className = "header__nav";

            //closing menu after pick a link
            const navItems = openNav.querySelectorAll("a");
            navItems.forEach(function (item) {
                item.addEventListener("click", function () {
                    openNav.className = "header__nav";
                })
            })
        }else{
            closedNav.className = "header__nav--opened";
        }
    });

    //form validation

    let error = false;
    let errorMessage;
    const form = document.querySelector("form");
    const userName = form.querySelector("input[type='text']");
    const userEmail = document.querySelector("input[type='email']");
    const userMessage = document.querySelector("textarea");
    const errorMessageContainer = document.querySelector(".form__error-message");

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
    });

    function generateSelects (){
        const select = document.querySelector(".form__select-topics");

        topics.forEach(function (e) {

            //generate topics to first select
            const option = document.createElement("option");
            option.innerText = e.value.toUpperCase();
            select.append(option);
        });

        //generate subtopic
        select.addEventListener("change", function () {

            const subtopicsSelect = document.querySelector(".form__select-subtopics");
            const subtopics = topics[select.selectedIndex].subtopic;


            console.log(topics[select.selectedIndex].subtopic);

            if(subtopics !== null){

                console.log(subtopicsSelect, "przed");
                // generate subtopics to select
                subtopics.options.forEach(function (e) {

                    const subtopic = document.createElement("option");
                    subtopic.innerText = e.value.toUpperCase();
                    subtopicsSelect.append(subtopic);

                    console.log(subtopicsSelect, "po")

                });

                subtopicsSelect.style.display = "table";
            }else{
                subtopicsSelect.style.display = "none";
            }



        })
    }

    generateSelects();

    console.log(topics)

});