// grab the element of the modal
// When the user clicks the button, open the modal (z)
function openModal() {
  let modal = document.getElementById("myModal");
  let button = document.getElementById("myBtn");

  button.addEventListener("click", function () {
    modal.style.display = "block";
  });
}
openModal();

// When the user clicks on <span> (x), close the modal
function closeModal() {
  console.log("close modal invoked");
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}
closeModal();

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function onSelect(el) {
  el.classList.add("selected");
  const innerEl = el.getElementsByClassName("enter-pledge")[0];
  innerEl.classList.remove("display-none");
}

function onOut(el) {
  el.classList.remove("selected");
  const innerEl = el.getElementsByClassName("enter-pledge")[0];
  innerEl.classList.add("display-none");
}

function showZee() {
  const myDialog = document.getElementById("modal-end");
  closeModal();
  myDialog.showModal();
}
// need a function to close the last modal (closeModal() function call?) zee is reference to the last modal
function clickContinue() {
  console.log("continue clicked");
  const myDialog = document.getElementById("modal-end");
  myDialog.style.display = "block";
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}

// continue and thank you (submission after clicking continue on the modal)
function closeZee() {
  const myDialog = document.getElementById("modal-end");
  myDialog.addEventListener("click", function () {
    console.log("got it");
    myDialog.style.display = "none";
  });
}
