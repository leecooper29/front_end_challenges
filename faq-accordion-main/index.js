const headline = document.getElementById("lower-item");
const question = document.getElementById("lower-questions");

const collection = document.getElementsByClassName("pop-open");
const collectionMinus = document.getElementsByClassName("minus");
const collectionPlus = document.getElementsByClassName("plus");

function openAtIndex(index) {
  collection[index].style.display = "block";
  collectionMinus[index].style.display = "block";
  collectionPlus[index].style.display = "none";
}

function closeEverything() {
  for (let i = 0; i < collection.length; i++) {
    collection[i].style.display = "none";
  }
  for (let i = 0; i < collectionMinus.length; i++) {
    collectionMinus[i].style.display = "none";
  }
  for (let i = 0; i < collectionPlus.length; i++) {
    collectionPlus[i].style.display = "block";
  }
}

function openIt(index) {
  openAtIndex(index);
}

function closeIt(index) {
  collection[index].style.display = "none";
  collectionMinus[index].style.display = "none";
  collectionPlus[index].style.display = "block";
}

closeEverything();
openAtIndex(0);
