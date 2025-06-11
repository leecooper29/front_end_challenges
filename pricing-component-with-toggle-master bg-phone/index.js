const switchEl = document.getElementById("switch");
const pricePoint = document.querySelector("price");
const btn1 = document.getElementById("basicPrice-learnmore");
const btn3 = document.getElementById("masterPrice-learnmore");
const btn2 = document.getElementById("professionalPrice-learnmore");
let state = "annual";
monthToggle();

switchEl.addEventListener("click", function (evt) {
  evt.stopPropagation();
  state === "annual" ? monthToggle() : annualToggle();
  console.log("abc", state);
});

function annualToggle() {
  state = "annual";
  document.getElementById("basicPrice").innerHTML = "199.99";
  document.getElementById("professionalPrice").innerHTML = "249.99";
  document.getElementById("masterPrice").innerHTML = "399.99";

  changeToPurple();
  changeToWhite();
}

function monthToggle() {
  state = "month";
  document.getElementById("basicPrice").innerHTML = "19.99";
  document.getElementById("professionalPrice").innerHTML = "24.99";
  document.getElementById("masterPrice").innerHTML = "39.99";

  // removePurple();
  // removeWhite();
}

// function changeToPurple() {
//   btn1.classList.add("purple-gradient");
//   btn3.classList.add("purple-gradient");
// }

// function changeToWhite() {
//   btn2.classList.add("white-professional");
// }

// function removePurple() {
//   btn1.classList.remove("purple-gradient");
//   btn3.classList.remove("purple-gradient");
// }

// function removeWhite() {
//   btn2.classList.remove("white-professional");
// }
