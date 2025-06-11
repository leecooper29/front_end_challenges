// calling the function here drop menu
document.addEventListener("DOMContentLoaded", function () {
  dropMenu();
});

function dropMenu() {
  const arrowArr = document.getElementsByClassName("arrow");

  // loop over the array of items
  for (let i = 0; i < arrowArr.length; i++) {
    arrowArr[i].addEventListener("click", answerToggle);
  }
}

function answerToggle(evt) {
  console.log("evt", evt);
  const el = evt.target;

  const par = el.parentElement.parentElement;
  // grab the first index
  const answer = par.getElementsByClassName("answer")[0];
  console.log("answer", answer);

  // hide and remove the css class block, none
  if (answer.classList.contains("hide")) {
    answer.classList.remove("hide");
    answer.classList.add("show");
  } else {
    answer.classList.add("hide");
    answer.classList.remove("show");
  }
}

function itemsToggle(item) {
  // image reference
  const switchedImage = document.getElementById("img-feature");
  // text and more info reference
  const bkmrkText = document.getElementsByClassName("bkmrk")[0];

  // reference to the header
  const heading = bkmrkText.querySelector("h1");
  console.log(heading);
  // reference to the paragraph
  const p = bkmrkText.querySelector("p");
  console.log(p);

  // replace the text and images
  if (item === "speedy") {
    heading.innerHTML = "Intelligent Search";
    p.innerHTML =
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
    switchedImage.src = "./images/illustration-features-tab-2.svg";
  } else if (item === "easy") {
    heading.innerHTML = "Share your bookmarks";
    p.innerHTML =
      "Share your bookmarks Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
    switchedImage.src = "./images/illustration-features-tab-3.svg";
  }
}

itemsToggle();

function emailError() {
  // when contact us is clicked ,there is an error below the input that says
  const input = document.getElementById("inputItem");
  input.style.border = "2px solid red";

  // here is the error message
  // whoops, make sure that it's an email
}

emailError();
