const formTag = document.querySelector(".form");
const buttonTag = formTag.querySelector(".submit");

const nameTag = formTag.querySelector("#name");
const usernameTag = formTag.querySelector("#username");
const emailTag = formTag.querySelector("#email");
const passwordTag = formTag.querySelector("#password");
const confirmPasswordTag = formTag.querySelector("#confirm-password");

const removeErrorBorder = (tag) => {
  if (tag.classList.contains("show-error")) {
    tag.classList.remove("show-error");
  }
};

const disableTooltip = (tag) => {
  const errorTag = tag.parentElement.querySelector(".tooltip-text");
  if (errorTag.classList.contains("tooltip-show")) {
    errorTag.classList.remove("tooltip-show");
  }
};

const resetGUI = (tag) => {
  removeErrorBorder(tag);
  disableTooltip(tag);
};

const focusinFunc = () => {
  event.target.style.background = "lightgray";

  resetGUI(event.target);
};

const addErrorBorder = (tag) => {
  if (!tag.classList.contains("show-error")) {
    tag.classList.add("show-error");
  }
};

const enableTooltip = (tag) => {
  const errorTag = tag.parentElement.querySelector(".tooltip-text");
  if (!errorTag.classList.contains("tooltip-show")) {
    errorTag.classList.add("tooltip-show");
  }
};

const areAllFormItemsValid = () => {
  return formTag.checkValidity();
};

const arePasswordsEqual = () => {
  return passwordTag.value === confirmPasswordTag.value;
};

const isFormValid = () => {
  return areAllFormItemsValid() && arePasswordsEqual();
};

const enableOrDisableButton = () => {
  isFormValid()
    ? buttonTag.removeAttribute("disabled")
    : buttonTag.setAttribute("disabled", "disabled");
};

const validiteFunc = (tag) => {
  return tag.checkValidity();
};

const validiteConfirmFunc = (tag) => {
  if (!isPasswordValid()) return true;

  // If password is valid this must also be valid
  return passwordTag.value == confirmPasswordTag.value;
};

const handleGUI = (tag, validate) => {
  const isTagValid = validate(tag);
  isTagValid ? removeErrorBorder(tag) : addErrorBorder(tag);
  isTagValid ? disableTooltip(tag) : enableTooltip(tag);

  enableOrDisableButton();
};

const focusoutFunc = () => {
  event.target.style.background = "";

  handleGUI(event.target, validiteFunc);
};

const focusoutPasswordFunc = () => {
  event.target.style.background = "";

  handleGUI(passwordTag, validiteFunc);

  handleGUI(confirmPasswordTag, validiteConfirmFunc);
};

const focusoutConfirmFunc = () => {
  event.target.style.background = "";

  handleGUI(event.target, validiteConfirmFunc);
};

const isPasswordValid = () => {
  // Check if password is correct, if not ignore this
  return passwordTag.checkValidity();
};

formTag.addEventListener("submit", () => {
  event.preventDefault();

  const registrationData = {
    name: nameTag.value,
    username: usernameTag.value,
    email: emailTag.value,
    password: passwordTag.value,
  };

  console.log("Submit:", registrationData);

  formTag.reset(); /* Needed in Chrome, laptop */
});

nameTag.addEventListener("focusin", focusinFunc);
nameTag.addEventListener("focusout", focusoutFunc);

usernameTag.addEventListener("focusin", focusinFunc);
usernameTag.addEventListener("focusout", focusoutFunc);

emailTag.addEventListener("focusin", focusinFunc);
emailTag.addEventListener("focusout", focusoutFunc);

passwordTag.addEventListener("focusin", focusinFunc);
passwordTag.addEventListener("focusout", focusoutPasswordFunc);

confirmPasswordTag.addEventListener("focusin", focusinFunc);
confirmPasswordTag.addEventListener("focusout", focusoutConfirmFunc);
