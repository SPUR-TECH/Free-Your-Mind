// sign up form validation 

const form = document.querySelector('#form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    validateForm();
});

// Input values

function validateForm() {

    if (firstName.value.trim() == '') {
        setError(firstName, 'Name can not be empty')
    } else {
        setSuccess(firstName);
    }
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element) {
    const parent = element.parentElement;
    parent.classList.add('success');
}

function validateForm() {

    if (firstName.value.trim() == '') {
        setError(firstName, 'Please enter Name')
    } else {
        setSuccess(firstName);
    }

    if (lastName.value.trim() == '') {
        setError(lastName, 'Please enter last name')
    } else {
        setSuccess(lastName);
    }

    if (email.value.trim() == '') {
        setError(email, 'Please enter Email');

    } else if (isEmailValid(email.value)) {
        setSuccess(email);
    } else {
        setError(email, 'Invalid email');
    }

    if (username.value.trim() == '') {
        setError(username, 'Please enter Username')
    } else {
        setSuccess(username);
    }

    if (password.value.trim() == '') {
        setError(password, 'Please create Password')
    } else {
        setSuccess(password);
    }

    if (password2.value.trim() == '') {
        setError(password2, 'Passwords must match')
    } else {
        setSuccess(password2);
    }
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if (parent.classList.contains('success')) {
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element) {
    const parent = element.parentElement;
    if (parent.classList.contains('error')) {
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isEmailValid(email) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}