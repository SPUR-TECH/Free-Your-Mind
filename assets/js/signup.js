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