const usernameInput = document.getElementById("username");
const usernameMessage = document.getElementById("username-message");
const emailInput = document.getElementById("email");
const emailMessage = document.getElementById("email-message");
const passwordInput = document.getElementById("password");
const passwordMessage = document.getElementById("password-message");
const submitButton = document.getElementById("submit");
const formMessage = document.getElementById("form-message");
let validUsername = false;
let validPassword = false;
let validEmail = false;

function validateUsername() {
  let username = usernameInput.value.trim();
  if (username.length > 2) {
    validUsername = true;
    usernameMessage.innerHTML = "Looks good.";
    usernameInput.setAttribute("class", "");

    validateForm();
  } else {
    validUsername = false;
    usernameInput.setAttribute("class", "error");
    usernameMessage.innerHTML = "Username must be 3+ characters.";
    validateForm();
  }
}

function validateEmail() {
  let email = emailInput.value.trim();
  if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    validEmail = true;
    emailMessage.innerHTML = "Looks good.";
    validateForm();
    emailInput.setAttribute("class", "");
  } else {
    emailInput.setAttribute("class", "error");
    validEmail = false;
    emailMessage.innerHTML = "Email must be valid.";
    validateForm();
  }
}

function validatePassword() {
  let password = passwordInput.value.trim();
  if (/^(?=.*\d).{8,}$/.test(password)) {
    validPassword = true;
    passwordInput.setAttribute("class", "");

    passwordMessage.innerHTML = "Looks good";
    validateForm();
  } else {
    validPassword = false;
    passwordMessage.innerHTML =
      "Password must be 8+ characters and include a number.";
    passwordInput.setAttribute("class", "error");
    validateForm();
  }
}

function validateForm() {
  if (validUsername && validEmail && validPassword) {
    submitButton.setAttribute("class", "");
    formMessage.innerHTML = "Valid form.";
  } else {
    submitButton.setAttribute("class", "disabled");
    formMessage.innerHTML = "Fix the errors before submitting.";
  }
}

function submitForm() {
  if (validUsername && validEmail && validPassword) {
    alert("Form submitted successfully!");
    usernameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
  }
}
