const formTag = document.querySelector(".form");
const buttonTag = formTag.querySelector(".submit");

const nameTag = formTag.querySelector("#name");
const usernameTag = formTag.querySelector("#username");
const emailTag = formTag.querySelector("#email");
const passwordTag = formTag.querySelector("#password");
const confirmPasswordTag = formTag.querySelector("#confirm-password");

let isNameDirty = false;
let isUsernameDirty = false;
let isEmailDirty = false;
let isPasswordDirty = false;
let isConfirmDirty = false;

nameTag.onkeyup = () => {
  isNameDirty = true;

  enableOrDisableButton();
};

usernameTag.onkeyup = () => {
  isUsernameDirty = true;

  enableOrDisableButton();
};

emailTag.onkeyup = () => {
  isEmailDirty = true;

  enableOrDisableButton();
};

passwordTag.onkeyup = () => {
  isPasswordDirty = true;

  enableOrDisableButton();
};

confirmPasswordTag.onkeyup = () => {
  isConfirmDirty = true;

  enableOrDisableButton();
};

const isNameTagValid = () => {
  return nameTag.isDirty();
};

const enableOrDisableButton = () => {
  !isFormTouched() || isFormValid()
    ? buttonTag.removeAttribute("disabled")
    : buttonTag.setAttribute("disabled", "disabled");
};

const isFormValid = () => {
  return isAllFormItemsValid() && isPasswordsEqual();
};

const isAllFormItemsValid = () => {
  return formTag.checkValidity();
};

const isPasswordsEqual = () => {
  return passwordTag.value === confirmPasswordTag.value;
};

const isFormTouched = () => {
  return (
    isNameDirty ||
    isUsernameDirty ||
    isEmailDirty ||
    isPasswordDirty ||
    isConfirmDirty
  );
};

const registrationData = {
  name: "first name last name",
  username: "username",
  email: "email@email.com",
  password: "password",
};

// Enable submit button at startup
enableOrDisableButton();
