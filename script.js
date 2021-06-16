class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    // this.clear();
  }

  clear() {
    this.currentOperandTextElement = "";
    this.previousOperandTextElement = "";
    this.operation = undefined;
  }
  delete() {}

  appendNumber(number) {
    this.currentOperand = number; //this.currentOperand.toString()+ number.toString()
  }

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {
    this.currentOperandTextElement.innerText += this.currentOperand;
  }
}

const numberButtons = document.getElementsByClassName("data-number");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");

const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

for (let index = 0; index < numberButtons.length; index++) {
  const button = numberButtons[index];
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
}

// numberButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     console.log("event");
//     calculator.appendNumber(button.innerText);
//     calculator.updateDisplay();
//   });
// });
