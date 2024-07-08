const formTag = document.querySelector(".form");
formTag.onchange = () => console.log("Form:", formTag);

let buttonTag = formTag.querySelector(".submit");
// console.log("Confirm password:", confirmPasswordTag?.value);

let nameTag = formTag.querySelector("#name");
nameTag.onkeyup = () => {
  console.log("Valid", formTag.checkValidity());
  // buttonTag.disabled = formTag.checkValidity();
  // buttonTag.disabled = false;
  formTag.checkValidity()
    ? buttonTag.removeAttribute("disabled")
    : buttonTag.setAttribute("disabled", "disabled");
  // buttonTag.removeAttribute("disabled");

  // let itemList = formTag.querySelectorAll(":invalid");
  // console.log(itemList.length, itemList);
  // console.log("Valis name", nameTag.checkValidity());
  // console.log("Name:", nameTag?.value);
  // if (!nameTag?.value) return;

  // // let regStr = "/^([a-z0-9]{5,})$/";
  // const re = new RegExp("^([a-öA-Ö- ]{3,55})$");

  // let isValid = re.test(nameTag.value);
  // nameTag.isValid = isValid;
  // console.log(isValid);
};

let usernameTag = formTag.querySelector("#username");
console.log("Username:", usernameTag?.value);

let emailTag = formTag.querySelector("#username");
console.log("Email:", emailTag?.value);

let passwordTag = formTag.querySelector("#password");
console.log("Password", passwordTag?.value);

let confirmPasswordTag = formTag.querySelector("#confirm-password");
console.log("Confirm password:", confirmPasswordTag?.value);

const registrationData = {
  name: "first name last name",
  username: "username",
  email: "email@email.com",
  password: "password",
};
