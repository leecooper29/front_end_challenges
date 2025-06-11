let arr = [];
let firstNumber;
let secondNumber;
let operation;

const output = document.getElementById("output-field");

function inputNumber(val) {
  if (firstNumber && !arr.length) {
    writeToOutput("");
  }
  arr.push(val);
  writeToOutput(arr.join(""));
}

function storeNumber(which) {
  if (which == "first") {
    firstNumber = Number(arr.join(""));
    resetArr();
  } else {
    secondNumber = Number(arr.join(""));
  }
}

function add() {
  operation = "+";
  storeNumber("first");
}

function subtract() {
  operation = "-";
  storeNumber("first");
}

function divide() {
  operation = "/";
  storeNumber("first");
}

function multiply() {
  operation = "*";
  storeNumber("first");
}

function del() {
  resetArr();
  output.innerText = "0";
}

function resetArr() {
  arr = [];
}

function resetVars() {
  firstNumber = undefined;
  secondNumber = undefined;
  operation = undefined;
}

function resetCalculator() {
  resetArr();
  resetVars();
  writeToOutput("0");
}

function equals() {
  storeNumber("second");
  writeToOutput(calculate());
}

function calculate() {
  let ret = 0;
  switch (operation) {
    case "+":
      ret = firstNumber + secondNumber;
      break;
    case "-":
      ret = firstNumber - secondNumber;
      break;
    case "/":
      ret = firstNumber / secondNumber;
      break;
    case "*":
      ret = firstNumber * secondNumber;
      break;
  }
  return ret;
}

function writeToOutput(val) {
  output.innerText = val;
}

function themeChange(theme) {
  document.body.className = "";
  document.body.classList.add("theme-" + theme);
}
