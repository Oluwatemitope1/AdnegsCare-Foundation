const form = document.getElementById("form");
const firstName = document.getElementById("fName");
const lastName = document.getElementById("lName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the values

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (firstNameValue === "" ){
        setErrorFor(firstName, "First name cannot be blank");
    }else {
        setSuccessFor(firstName)
    }

    if (lastNameValue === "" ){
        setErrorFor(lastName, "Last name cannot be blank");
    }else {
        setSuccessFor(lastName)
    }

    if (emailValue === "" ){
        setErrorFor(email, "Email address cannot be blank");
    }else if (!emailValid(emailValue)){
        setErrorFor(email, "Email is not valid");
    } else {
        setSuccessFor(email)
    }

    if (passwordValue === "" ){
        setErrorFor(password, "Password cannot be blank");
    }else {
        setSuccessFor(password)
    }

    if (password2Value === "" ){
        setErrorFor(password2, "Password cannot be blank");
    }else if (passwordValue != password2Value){
        setErrorFor(password2, "Password does not match");
    }else {
        setSuccessFor(password2)
    }

}

function setErrorFor(input, message) {
    const constant = input.parentElement;
    const small = constant.querySelector("small")

    // add error message inside small tag
    small.innerText = message;

    // add error class
    constant.className = "constant error";
}

function setSuccessFor(input) {
    const constant = input.parentElement;
    constant.className = 'constant success';
}

function emailValid(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
   }

