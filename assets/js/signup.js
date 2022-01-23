// sign up form validation 

const form = document.querySelector('#form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

// deactivate submit button

form.addEventListener('submit', (event) => {

    validateForm();

    if (isFormValid() == true) {
        form.submit();
    } else {
        event.preventDefault();

    }
});

// reactivate submit button

function isFormValid() {
    const inputContainers = form.querySelectorAll('.input-box');
    let result = true;
    inputContainers.forEach((container) => {
        if (container.classList.contains('error')) {
            result = false;
        }
    });

    return result;
}

// Input values

function validateForm() {

    if (firstName.value.trim() == '') {
        setError(firstName, 'Name can not be empty');
    } else {
        setSuccess(firstName);
    }
}

// set error class

function setError(element, errorMessage) {
    const parent = element.parentElement;
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

// set success class

function setSuccess(element) {
    const parent = element.parentElement;
    parent.classList.add('success');
}

function validateForm() {

    //First name

    if (firstName.value.trim() == '') {
        setError(firstName, 'Please enter Name');
    } else {
        setSuccess(firstName);
    }

    //Last name

    if (lastName.value.trim() == '') {
        setError(lastName, 'Please enter last name');
    } else {
        setSuccess(lastName);
    }

    // Email

    if (email.value.trim() == '') {
        setError(email, 'Please enter Email');

    } else if (isEmailValid(email.value)) {
        setSuccess(email);
    } else {
        setError(email, 'Invalid email');
    }

    // Username

    if (username.value.trim() == '') {
        setError(username, 'Please enter Username');
    } else {
        setSuccess(username);
    }

    // Password

    if (password.value.trim() == '') {
        setError(password, 'Please create Password');
    } else {
        setSuccess(password);
    }

    // Confirm password

    if (password2.value.trim() == '') {
        setError(password2, 'Please confirm password');
    } else if (password2.value !== password.value) {
        setError(password2, 'Passwords must match');
    } else {
        setSuccess(password2);
    }
}

// Call error class

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if (parent.classList.contains('success')) {
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

// call success class

function setSuccess(element) {
    const parent = element.parentElement;
    if (parent.classList.contains('error')) {
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

// Email validation retrieved from stack overflow https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression

function isEmailValid(email) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}