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

    //generating topics and subtopics to selectors
    function generateTopics (){
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

            if(subtopics !== null){
                // generate subtopics to select
                subtopics.options.forEach(function (e) {
                    const subtopic = document.createElement("option");
                    subtopic.innerText = e.value.toUpperCase();
                    subtopicsSelect.append(subtopic);
                });
                subtopicsSelect.style.display = "table";
            }else{
                subtopicsSelect.style.display = "none";
            }
        })
    }
    generateTopics();

    //form validation
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {

        let error = false;
        let errorMessages = [];
        let userName = form.querySelector("input[type='text']");
        let userEmail = form.querySelector("input[type='email']");
        let userMessage = form.querySelector("textarea");
        const userTopic = form.querySelector("select[name='user_topic']");
        const userSubtopic = form.querySelector("select[name='user_subtopic']");
        const errorMessagesContainer = document.querySelector(".form__error-message");
        const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        let dataContainer = {
            user_name: null,
            user_email: null,
            user_message: null,
            topic: null,
            subtopic: null,
        };

        if(userName.value.length < 3){
            error = true;
            errorMessages.push("Field name must have at least 3 characters");
            userName.style.border = "1px solid red"
        }

        if(!pattern.test(userEmail.value)){
            error = true;
            errorMessages.push("It's not a valid email");
            userEmail.style.border = "1px solid red"
        }

        if(userMessage.value.length < 10){
            error = true;
            errorMessages.push("Field message must have at least 10 characters");
            userMessage.style.border = "1px solid red"
        }

        if(error){
            e.preventDefault();
            errorMessagesContainer.innerHTML = null;

            errorMessages.forEach(function (message) {
                const p = document.createElement("p");
                p.innerText = message;
                errorMessagesContainer.appendChild(p);
            });

            console.log("error")
        }else{
            e.preventDefault();

            errorMessagesContainer.innerHTML = "Message successfully sent";

            dataContainer.user_name = userName.value;
            dataContainer.user_email = userEmail.value;
            dataContainer.user_message = userMessage.value;
            dataContainer.topic = userTopic.value;
            dataContainer.subtopic = userSubtopic.value;

            console.log(dataContainer);

            userName.value = null;
            userEmail.value = null;
            userMessage.value = null;
            userTopic.value = userTopic.options[0].value;
            userSubtopic.style.display = "none";
        }

    })
});