//declare your variables for the text field and access DOM
const form = document.querySelector("#form");
const email = document.querySelector("#email");
const emailParent = email.parentNode;
const emailError = emailParent.querySelector("small");
const password = document.querySelector("#password");
const passwordParent = password.parentNode;
const passwordError = passwordParent.querySelector("small");
const password2 = document.querySelector("#password2");
const password2Parent = password2.parentNode;
const password2Error = password2Parent.querySelector("small");
const stackie1 = document.querySelector("#stackie1");
const stackie1Parent = stackie1.parentNode;
const stackie1Error = stackie1Parent.querySelector("small");

//check email is valid
const emailRegex = /[\w\.]+@\w+\.\w+/;
var isEmailNotValid = !emailRegex.test(email.value);
email.addEventListener("input", () => {
  isEmailNotValid = !emailRegex.test(email.value);
});

//check that all fields have input
var isEmailEmpty = email.value == "";
email.addEventListener("input", () => {
  isEmailEmpty = email.value == "";
});
var isPasswordEmpty = password.value == "";
password.addEventListener("input", () => {
  isPasswordEmpty = password.value == "";
});
var isPassword2Empty = password2.value == "";
password2.addEventListener("input", () => {
  isPassword2Empty = password2.value == "";
});
var isStackie1Empty = stackie1.value == "";
stackie1.addEventListener("input", () => {
  isStackie1Empty = stackie1.value == "";
});

//check input length for password
var isPasswordNotValid = password.value.length < 5;
password.addEventListener("input", () => {
  isPasswordNotValid = password.value.length < 5;
});
//check the two passwords match
var isPassword2NotValid = password2.value != password.value;
password2.addEventListener("input", () => {
  isPassword2NotValid = password2.value != password.value;
});

//add event listener for Submit button
form.addEventListener("submit", (e) => {
  if (isEmailEmpty) {
    emailParent.classList.remove("success");
    emailParent.classList.add("error");
    emailError.textContent = "Email is required";
  } else if (isEmailNotValid) {
    emailParent.classList.remove("success");
    emailParent.classList.add("error");
    emailError.textContent = "Email not valid";
  } else {
    emailParent.classList.remove("error");
    emailParent.classList.add("success");
  }

  if (isPasswordNotValid) {
    passwordParent.classList.remove("success");
    passwordParent.classList.add("error");
    passwordError.textContent =
      "Password must be at least 5 characters or numbers";
  } else {
    passwordParent.classList.remove("error");
    passwordParent.classList.add("success");
  }

  if (isPassword2Empty) {
    password2Parent.classList.remove("success");
    password2Parent.classList.add("error");
    password2Error.textContent = "Password2 is required";
  } else if (isPassword2NotValid) {
    password2Parent.classList.remove("success");
    password2Parent.classList.add("error");
    password2Error.textContent = "Passwords do not match";
  } else {
    password2Parent.classList.remove("error");
    password2Parent.classList.add("success");
  }

  if (isStackie1Empty) {
    stackie1Parent.classList.remove("success");
    stackie1Parent.classList.add("error");
    stackie1Error.textContent = "Username is required";
  } else {
    stackie1Parent.classList.remove("error");
    stackie1Parent.classList.add("success");
  }
  if (
    isEmailEmpty ||
    isEmailNotValid ||
    isPasswordEmpty ||
    isPasswordNotValid ||
    isPassword2Empty ||
    isPassword2NotValid ||
    isStackie1Empty
  )
    e.preventDefault();
});
