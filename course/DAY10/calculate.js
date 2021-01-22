const numBtns = document.querySelectorAll(".number");
const opBtns = document.querySelectorAll(".operator");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");
const equal = document.querySelector(".equal");
let currentOp = "";
let keep = false;
let needLeft = true;
let leftNum = 0;
let rightNum = 0;

function handleNumbers(event) {
  if (keep === false) {
    result.textContent = event.target.value;
    keep = true;
    if (needLeft === true) {
      leftNum = parseInt(result.textContent);
    } else {
      rightNum = parseInt(result.textContent);
    }
  } else {
    result.textContent = result.textContent + event.target.value;
    if (needLeft === true) {
      leftNum = parseInt(result.textContent);
    } else {
      rightNum = parseInt(result.textContent);
    }
  }
}

function handleClear(event) {
  result.textContent = "0";
  leftNum = 0;
  rightNum = 0;
  currentOp = "";
  keep = false;
  needLeft = true;
}

function cal(a, op, b) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
  }
}

function handleOperate(event) {
  let op = event.target.value;
  console.log(op);

  if (op === "=") {
    result.textContent = cal(leftNum, currentOp, rightNum);
    keep = false;
  } else if (currentOp === "") {
    currentOp = event.target.value;
    needLeft = false;
    keep = false;
  } else {
    switch (op) {
      case "+":
        needLeft = false;
        keep = false;
        leftNum = cal(leftNum, currentOp, rightNum);
        currentOp = "+";
        result.textContent = leftNum;
        break;
      case "-":
        needLeft = false;
        keep = false;
        leftNum = cal(leftNum, currentOp, rightNum);
        currentOp = "-";
        result.textContent = leftNum;
        break;
      case "*":
        needLeft = false;
        keep = false;
        leftNum = cal(leftNum, currentOp, rightNum);
        currentOp = "*";
        result.textContent = leftNum;
        break;
      case "/":
        break;
      default:
        break;
    }
  }
}
function init() {
  numBtns.forEach(function (btn) {
    btn.addEventListener("click", handleNumbers);
  });
  opBtns.forEach(function (btn) {
    btn.addEventListener("click", handleOperate);
  });
  reset.addEventListener("click", handleClear);
}

init();
