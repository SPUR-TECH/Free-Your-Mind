// sign up form validation 

var form = document.querySelector('#form');
var firstName = document.querySelector('#first-name');
var lastName = document.querySelector('#last-name');
var email = document.querySelector('#email');
var username = document.querySelector('#username');
var password = document.querySelector('#password');
var password2 = document.querySelector('#password2');

// deactivate submit button

form.addEventListener('submit', function (event) {

    validateForm();

    if (isFormValid() === true) {
        form.submit();
    } else {
        event.preventDefault();
    }
});

// reactivate submit button

function isFormValid() {
    var inputContainers = form.querySelectorAll('.input-box');
    var result = true;
    inputContainers.forEach(function (container) {
        if (container.classList.contains('error')) {
            result = false;
        }
    });

    return result;
}

// set error class

function setError(element, errorMessage) {
    var parent = element.parentElement;
    parent.classList.add('error');
    var paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

// set success class

function setSuccess(element) {
    var parent = element.parentElement;
    parent.classList.add('success');
}

// Email validation retrieved from stack overflow https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression

function isEmailValid(email) {
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}

function validateForm() {

    //First name

    if (firstName.value.trim() === '') {
        setError(firstName, 'Please enter Name');
    } else {
        setSuccess(firstName);
    }

    //Last name

    if (lastName.value.trim() === '') {
        setError(lastName, 'Please enter Last Name');
    } else {
        setSuccess(lastName);
    }

    // Email

    if (email.value.trim() === '') {
        setError(email, 'Please enter Email');
    } else if (!isEmailValid(email.value)) {
        setError(email, 'Invalid Email');
    } else {
        setSuccess(email);
    }

    // Username

    if (username.value.trim() === '') {
        setError(username, 'Please enter Username');
    } else {
        setSuccess(username);
    }

    // Password

    if (password.value.trim() === '') {
        setError(password, 'Please create Password');
    } else if (password.value.length < 8) {
        setError(password, 'minimum of 8 letters');
    } else if (password.value.length > 15) {
        setError(password, 'maximum of 15 letters');
    } else {
        setSuccess(password);
    }

    // Confirm password

    if (password2.value.trim() === '') {
        setError(password2, 'Please confirm Password');
    } else if (password2.value !== password.value) {
        setError(password2, 'Passwords must match');
    } else {
        setSuccess(password2);
    }
    localStorage.setItem('username', username.value);
    localStorage.setItem('password', password.value);
}

// Call error class

function setError(element, errorMessage) {
    var parent = element.parentElement;
    if (parent.classList.contains('success')) {
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    var paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

// call success class

function setSuccess(element) {
    var parent = element.parentElement;
    if (parent.classList.contains('error')) {
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}