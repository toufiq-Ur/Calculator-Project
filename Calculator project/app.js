const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");
const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const clearAllEl = document.querySelector(".all-clear");
const lastEntityEl = document.querySelector(".last-entity-clear");
const equalEl = document.querySelector(".equal");

let dis1Num = "";
let dis2Num = "";
let result = "";
let lastOperation = "";
let haveDot = false;

numbersEl.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    dis2Num += e.target.innerText;
    display2El.innerText = dis2Num;
  });
});

operationEl.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!dis2Num) return;
    haveDot = false;
    const operationName = e.target.innerText;

    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clearVar(operationName);
    lastOperation = operationName;
  });
});

function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " ";
  display1El.innerText = dis1Num;
  display2El.innerText = "";
  dis2Num = "";
  tempResultEl.innerText = result;
}

function mathOperation() {
  if (lastOperation === "x") {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(dis2Num);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(dis2Num);
  }
}

equalEl.addEventListener("click", (e) => {
  if (!dis1Num && !dis2Num) return;
  haveDot = false;
  mathOperation();
  clearVar();
  display2El.innerText = result;
  dis2Num = result;
  tempResultEl.innerText = "";
  display1El.innerText = "";
  dis1Num = "";
});

clearAllEl.addEventListener("click", (e) => {
  display1El.innerText = "0";
  display2El.innerText = "0";
  tempResultEl.innerText = "0";
  dis1Num = "";
  dis2Num = "";
  result = "";
});

lastEntityEl.addEventListener("click", (e) => {
  display2El.innerText = "";
  dis2Num = "";
});
