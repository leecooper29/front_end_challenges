function notify() {
  const myError = document.getElementById("error");
  const myInput = document.querySelector("input");
  const myValue = myInput.innerText;
  if (myValue === "") {
    console.log("abc");
    myError.style.display = "block";
    myInput.style.borderColor = "red";
    myInput.style.Color = "red";
  }
}
