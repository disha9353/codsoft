let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  document.getElementById("result").value = currentNumber;
}

function clearDisplay() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  document.getElementById("result").value = "";
}

function appendOperator(op) {
  previousNumber = currentNumber;
  currentNumber = "";
  operator = op;
}

function calculate() {
  let result = 0;
  let a = parseFloat(previousNumber);
  let b = parseFloat(currentNumber);

  if (operator === "+") {
    result = a + b;
  } else if (operator === "-") {
    result = a - b;
  } else if (operator === "*") {
    result = a * b;
  } else if (operator === "/") {
    result = a / b;
  }

  currentNumber = result.toString();
  previousNumber = "";
  operator = "";
  document.getElementById("result").value = currentNumber;
}