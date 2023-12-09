// Variables

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Error and Success Functions

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = ('form-control error');
    const state = formControl.querySelector('p');
    state.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = ('form-control success');
}

// Function for Checking the Username and Password Length

function checkCharacters(input, min, max) {
    if ((input.value.length > 0 && input.value.length < min) || input.value.length > max )
        showError(input, `The charter length should be between ${min} and ${max}`);
    else if (input.value.length === 0)
        showError(input, `${getFieldName(input)} is required`);
    else
        showSuccess(input);
}

// Function for making first letter of state words uppercase

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Function for Password Match Checking

function passwordMatch(input1, input2) {
    if (input1.value === input2.value)
        showSuccess(input2);

    else
        showError(input2, 'Passwords do not match');

    if (input2.value === '')
        showError(input2, 'Match Password is required')

}

// Function for Email Validation

function validateEmail(input) {
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(input.value))
        showSuccess(input);
    else if (input.value === '')
        showError(input, `${getFieldName(input)} is required`);
    else
        showError(input, `Email is not valid`);
  }
  
// Event Listener

form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkCharacters(username, 3, 15);
    checkCharacters(password, 6, 12);
    validateEmail(email);
    passwordMatch(password, password2);
})