// sign up form validation //

const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

// get values from inputs 

function checkInputs() {
    const firstNameValue = "first-name".value;
    const lastNameValue = "last-name".value;
    const emailValue = "email".value;
    const usernameValue = "username".value;
    const passwordValue = "password".value;
    const password2Value = "password2".value;


    if (firstNameValue === "") {

        // show error icon

        setErrorFor("first-name", "First name can not be blank");
    } else {

        // show success icon

        setSuccessFor("first-name")

    }
}

function setErrorFor(input, message) {
    const userDetails = input.parentElement;
    const small = userDetails.querySelector("small");

    // show Error Message

    small.innerText = message;

    userDetails.className = "userDetails error";
}