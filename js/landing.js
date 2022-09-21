const form = document.getElementById("form");
const firstName = document.getElementById("fName");
const lastName = document.getElementById("lName");
const email = document.getElementById("email");

form.addEventListener("submit", e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the values

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();

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

// emial validation 

function emailValid(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
   }



//    Animation==========

window.addEventListener('scroll', () =>{

    let content = document.querySelector('.feature-container');
    let contentPosition = content.getBoundingClientRect().top;
    let scrollPosition = window.innerHeight;

    if (contentPosition < scrollPosition){
        content.classList.add('show');
    }else {
        content.classList.remove('show');
    }
});
