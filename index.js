const formTag = document.querySelector(".form");
const buttonTag = formTag.querySelector(".submit");

const nameTag = formTag.querySelector("#name");
const usernameTag = formTag.querySelector("#username");
const emailTag = formTag.querySelector("#email");
const passwordTag = formTag.querySelector("#password");
const confirmPasswordTag = formTag.querySelector("#confirm-password");

nameTag.onkeyup = () => {
  enableOrDisableButton();

  // console.log(isNameTagValid());
};

usernameTag.onkeyup = () => {
  enableOrDisableButton();
};

emailTag.onkeyup = () => {
  enableOrDisableButton();
};

passwordTag.onkeyup = () => {
  enableOrDisableButton();
};

confirmPasswordTag.onkeyup = () => {
  enableOrDisableButton();
};

const isNameTagValid = () => {
  return nameTag.isDirty();
};

let enableOrDisableButton = () => {
  formTag.checkValidity()
    ? buttonTag.removeAttribute("disabled")
    : buttonTag.setAttribute("disabled", "disabled");
};

let isFormValid = () => {
  return isAllFormItemsValid() && isPasswordsEqual();
};

let isAllFormItemsValid = () => {
  return formTag.checkValidity();
};

let isPasswordsEqual = () => {
  return passwordTag.value === confirmPasswordTag.value;
};

const registrationData = {
  name: "first name last name",
  username: "username",
  email: "email@email.com",
  password: "password",
};
