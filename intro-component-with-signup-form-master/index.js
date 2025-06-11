const error = document.querySelectorAll(".error");
const button = document.getElementById("claim");
const inputInfo = document.getElementById("mail");
const inputs = document.getElementsByClassName("input");

console.log(button);

button.addEventListener("click", () => {
  checkForm();
});

const inputArr = ["firstname", "lastname", "email", "password"];
const errorArr = [
  "First Name cannot be empty",
  "Last name cannot be empty",
  "Looks like this is not an email",
  "Password cannot be empty",
];

function getInput(myVar) {
  console.log("myVar", myVar);
  return document.getElementById(myVar);
}

function checkElement(el) {
  // console.log("el", el);
  return !!el?.value.length;
}

function showErrorIcon(myVar) {
  if (document.getElementById("icon-error-" + myVar)) {
    document.getElementById("icon-error-" + myVar).style.display = "inline";
  }
}

function showErrorText(myVar, myIndex) {
  const myEl = document.getElementById("error-" + myVar);
  if (myEl) {
    myEl.style.display = "block";
    myEl.innerText = errorArr[myIndex];
  }
}

//removes all input texts (placeholders)
function removeInputText() {}

function highlightInput(myEl) {
  myEl.classList.add("border-color");
}

// adds a default message error for the email input email@exaple/com
function emailErrorMessage() {
  const emailText = document.getElementById("email");
}

function checkForm() {
  for (i = 0; i < inputArr.length; i++) {
    const myInput = getInput(inputArr[i]);
    const isValid = checkElement(myInput);
    // console.log("isValid", isValid);
    if (!isValid) {
      showErrorIcon(inputArr[i]);
      showErrorText(inputArr[i], i);
      highlightInput(myInput);
      // emailErrorMessage()
      // removeInputText()
    }
  }
}
