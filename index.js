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

nameTag.addEventListener("focusin", () => {
  event.target.style.background = "lightgray";

  removeErrorBorder(nameTag);
  disableTooltip(nameTag);
});

nameTag.addEventListener("focusout", () => {
  event.target.style.background = "";

  if (!nameTag.checkValidity()) {
    addErrorBorder(nameTag);
    enableTooltip(nameTag);
  }

  isNameDirty = true;
  enableOrDisableButton();
});

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

const disableTooltip = (tag, isOk) => {
  const errorTag = tag.parentElement.querySelector("#name-error");
  if (errorTag.classList.contains("tooltip-show")) {
    errorTag.classList.remove("tooltip-show");
  }
  // if (tag.classList.contains("tooltip-show")) {
  //   tag.classList.remove("tooltip-show");
  // }
};

const addErrorBorder = (tag) => {
  if (!tag.classList.contains("show-error")) {
    tag.classList.add("show-error");
  }
};

const enableTooltip = (tag) => {
  const errorTag = tag.parentElement.querySelector("#name-error");
  if (!errorTag.classList.contains("tooltip-show")) {
    errorTag.classList.add("tooltip-show");
  }
  // if (!tag.classList.contains("tooltip-show")) {
  //   tag.classList.add("tooltip-show");
  // }
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
