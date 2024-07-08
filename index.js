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

nameTag.onkeyup = (e) => {
  // e.preventDefault();
  // console.log(e);
  // nameTag.parentElement.classList.add("show-error");
  // nameTag.style.borderColor = "red";
  // nameTag.style.border = 1rem;
  isNameDirty = true;

  enableOrDisableButton();

  const isInputOk = isNameTagValid(nameTag);

  // if (!nameTag.parentElement.classList.contains("show-error")) {
  //   nameTag.parentElement.classList.add("show-error");
  //   nameTag.parentElement.bordercolor = "red";
  // }

  isInputOk ? removeErrorBorder(nameTag) : addErrorBorder(nameTag);
  console.log(nameTag.classList);
};

// document.querySelector(".tooltip").onmouseover = () => {
// nameTag.onmouseover = () => {
//   console.log("Hover name");
// };

usernameTag.onkeyup = () => {
  isUsernameDirty = true;

  enableOrDisableButton();

  const isInputOk = isNameTagValid(usernameTag);

  isInputOk ? removeErrorBorder(usernameTag) : addErrorBorder(usernameTag);
};

emailTag.onkeyup = () => {
  isEmailDirty = true;

  enableOrDisableButton();

  const isInputOk = isNameTagValid(emailTag);
  isInputOk ? removeErrorBorder(emailTag) : addErrorBorder(emailTag);
};

passwordTag.onkeyup = () => {
  isPasswordDirty = true;

  enableOrDisableButton();

  const isInputOk = isNameTagValid(passwordTag);
  isInputOk ? removeErrorBorder(passwordTag) : addErrorBorder(passwordTag);
};

confirmPasswordTag.onkeyup = () => {
  isConfirmDirty = true;

  enableOrDisableButton();

  const isInputOk = isNameTagValid(confirmTag);
  isInputOk ? removeErrorBorder(confirmTag) : addErrorBorder(confirmTag);
};

const isNameTagValid = (tag) => {
  const pattern = tag.getAttribute("pattern");
  const re = new RegExp(pattern);
  const value = tag.value;

  return re.test(value);
};

const removeErrorBorder = (tag, isOk) => {
  if (tag.classList.contains("show-error")) {
    tag.classList.remove("show-error");
  }
};

const addErrorBorder = (tag) => {
  if (!tag.classList.contains("show-error")) {
    tag.classList.add("show-error");
  }
};

const isUsernameTagValid = () => {
  return usernameTag.isDirty();
};

const isEmailTagValid = () => {
  return emailTag.isDirty();
};

const isPasswordTagValid = () => {
  return passwordTag.isDirty();
};

const isConfirmTagValid = () => {
  return confirmTag.isDirty();
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
