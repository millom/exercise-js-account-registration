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

const isFormTouched = () => {
  return (
    isNameDirty ||
    isUsernameDirty ||
    isEmailDirty ||
    isPasswordDirty ||
    isConfirmDirty
  );
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
  !isFormTouched() || isFormValid()
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

const setIsDirty = (name) => {
  switch (name) {
    case "name":
      isNameDirty = true;
      break;
    case "user-name":
      isUsernameDirty = true;
      break;
    case "email":
      isEmailDirty = true;
      break;
    case "password":
      isPasswordDirty = true;
      break;
    case "confirm-password":
      isConfirmDirty = true;
      break;
  }
};

const focusoutFunc = () => {
  event.target.style.background = "";

  setIsDirty(event.target.name);

  handleGUI(event.target, validiteFunc);
};

const focusoutPasswordFunc = () => {
  event.target.style.background = "";

  setIsDirty(event.target.name);

  handleGUI(passwordTag, validiteFunc);

  handleGUI(confirmPasswordTag, validiteConfirmFunc);
};

const focusoutConfirmFunc = () => {
  event.target.style.background = "";

  setIsDirty(event.target.name);

  handleGUI(event.target, validiteConfirmFunc);
};

const isPasswordValid = () => {
  // Check if password is correct, if not ignore this
  return passwordTag.checkValidity();
};

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

// Enable submit button at startup
enableOrDisableButton();

// usernameTag.addEventListener("focusin", () => {
//   event.target.style.background = "lightgray";

//   removeErrorBorder(usernameTag);
//   disableTooltip(usernameTag);
// });

// usernameTag.addEventListener("focusout", () => {
//   event.target.style.background = "";

//   if (!usernameTag.checkValidity()) {
//     addErrorBorder(usernameTag);
//     enableTooltip(usernameTag);
//   }

//   isNameDirty = true;
//   enableOrDisableButton();
// });

// usernameTag.onkeyup = () => {
//   isUsernameDirty = true;

//   enableOrDisableButton();

//   const isInputOk = isNameTagValid(usernameTag);

//   isInputOk ? removeErrorBorder(usernameTag) : addErrorBorder(usernameTag);
// };

// emailTag.onkeyup = () => {
//   isEmailDirty = true;

//   enableOrDisableButton();

//   const isInputOk = isNameTagValid(emailTag);
//   isInputOk ? removeErrorBorder(emailTag) : addErrorBorder(emailTag);
// };

// passwordTag.onkeyup = () => {
//   isPasswordDirty = true;

//   enableOrDisableButton();

//   const isInputOk = isNameTagValid(passwordTag);
//   isInputOk ? removeErrorBorder(passwordTag) : addErrorBorder(passwordTag);
// };

// confirmPasswordTag.onkeyup = () => {
//   isConfirmDirty = true;

//   enableOrDisableButton();

//   const isInputOk = isNameTagValid(confirmTag);
//   isInputOk ? removeErrorBorder(confirmTag) : addErrorBorder(confirmTag);
// };

// const isNameTagValid = (tag) => {
//   const pattern = tag.getAttribute("pattern");
//   const re = new RegExp(pattern);
//   const value = tag.value;

//   return re.test(value);
// };

// const isUsernameTagValid = () => {
//   return usernameTag.isDirty();
// };

// const isEmailTagValid = () => {
//   return emailTag.isDirty();
// };

// const isPasswordTagValid = () => {
//   return passwordTag.isDirty();
// };

// const isConfirmTagValid = () => {
//   return confirmTag.isDirty();
// };

const registrationData = {
  name: "first name last name",
  username: "username",
  email: "email@email.com",
  password: "password",
};
