let myRating = 0;

const mySubmit = document.getElementById("submit");
const myUpper = document.getElementById("upper-container");
const myLower = document.getElementById("lower-container");
const myChoice = document.getElementById("choice");

function doRating(rating, myElement) {
  myRating = rating;
  const b = document.querySelectorAll(".rate-number p");
  console.log("b", b);
  for (let i = 0; i < b.length; i++) {
    b[i].style.backgroundColor = "grey";
  }
  myElement.style.backgroundColor = "orange";
}

function submit() {
  const myVal = "You selected " + myRating + " out of 5";
  myChoice.innerText = myVal;
  myUpper.style.display = "none";
  myLower.style.display = "block";
}

function thanks() {
  myLower.style.display = "none";
  myUpper.style.display = "block";
}

/** you are writing functionality and targeting specific values.  */

/* try to find little bits of javascipt to code everday besides html css */
