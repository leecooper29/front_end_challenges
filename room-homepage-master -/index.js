const previousPage = document.getElementById("previous");
const nextPage = document.getElementById("next");
const closeButton = document.getElementById("close");

// function menu() {
//   var x = document.getElementById("nav-bar");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }

// image path placeholder
const imgArr = [
  "./images/desktop-image-hero-1.jpg",
  "./images/desktop-image-hero-2.jpg",
  "./images/desktop-image-hero-3.jpg",
];

const headlineArr = [
  "Discover innovative ways to decorate",
  "We are available all across the globe",
  "Manufactured with the best materials",
];

const bodyArr = [
  "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",

  "With stores all over the world, it's easy for you to find furniture for your home or placae of buisness. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today",

  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
];

let imgPointer = 0;

function previous() {
  imgPointer -= 1;
  if (imgPointer < 0) {
    imgPointer = imgArr.length - 1;
  }
  updateUi();
}

function next() {
  imgPointer += 1;
  if (imgPointer > imgArr.length - 1) {
    imgPointer = 0;
  }
  updateUi();
}

function updateUi() {
  document.getElementById("bg-image").src = imgArr[imgPointer];
  document.getElementById("content").innerHTML = headlineArr[imgPointer];
  document.getElementById("info").innerHTML = bodyArr[imgPointer];
}

function openNav() {
  document.getElementById("myNav").style.display = "block";
  document.getElementById("title").style.display = "none";
  document.getElementById("icon").style.display = "none";
  // document.getElementById("office").style.opacity = "70%";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
  document.getElementById("title").style.display = "block";
  document.getElementById("icon").style.display = "block";

  // closeButton.style.backgroundColor = transparent;
  console.log("asfaf");
}
