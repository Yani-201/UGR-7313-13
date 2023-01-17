// JavaScript for form validation
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('#searching');
    if (!input.value) {
        alert('Please enter a search query');
    } else {
        form.submit();
    }
});
function validateSearch() {
    var search = document.getElementById("searching").value;
    if (search.length < 3) {
        alert("Please enter a search term with at least 3 characters");
    }
}
var form1 = document.getElementById("myForm1");
form1.addEventListener("submit", function(event) {
    event.preventDefault();
    var nameError = document.getElementById("nameError").innerHTML;
    var emailError = document.getElementById("emailError").innerHTML;
    if(nameError === "" && emailError === "") {
        form.submit();
    }
});
function validateName() {
    var name = document.getElementById("nm").value;
    if (name.length < 2) {
        document.getElementById("nameError").innerHTML = "Please enter a valid name";
    } else {
        document.getElementById("nameError").innerHTML = "";
    }
}
function validateEmail() {
    var email = document.getElementById("em").value;
    var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegEx.test(email)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address";
    } else {
        document.getElementById("emailError").innerHTML = "";
    }
}
var form2 = document.getElementById("myForm2");
form2.addEventListener("submit", function(event) {
    event.preventDefault();
    var YouremailError = document.getElementById("YouremailError").innerHTML;
    var messageError = document.getElementById("messageError").innerHTML;
    if(YouremailError === "" && messageError === "") {
        form.submit();
    }
});
function validateYourEmail() {
    var Youremail = document.getElementById("yem").value;
    var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegEx.test(Youremail)) {
        document.getElementById("YouremailError").innerHTML = "Please enter a valid email address";
    } else {
        document.getElementById("YouremailError").innerHTML = "";
    }
}
function validateMessage() {
    var message = document.getElementById("msg").value;
    if (message.length < 10) {
        document.getElementById("messageError").innerHTML = "Please enter a message with at least 10 characters";
    } else {
        document.getElementById("messageError").innerHTML = "";
    }
}