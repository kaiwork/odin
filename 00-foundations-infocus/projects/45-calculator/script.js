// Calculator
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator, a, b) => {
    switch (operator) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
        default:
            throw new Error("Invalid operator");
    }
};

const calculatorForm = document.getElementById("calculator-form");
const firstNumberInput = document.getElementById("num1");
const secondNumberInput = document.getElementById("num2");
const operatorInput = document.getElementById("operator");
const resultDisplay = document.getElementById("result");
const clearButton = document.getElementById("clear-button");

const calculate = (event) => {
    event.preventDefault();

    const firstNumber = Number(firstNumberInput.value);
    const secondNumber = Number(secondNumberInput.value);
    const operator = operatorInput.value;

    if (operator === "divide" && secondNumber === 0) {
        resultDisplay.textContent = "Cannot divide by zero";
        return;
    }

    const result = operate(operator, firstNumber, secondNumber);

    resultDisplay.textContent = result;
    firstNumberInput.value = result;
    secondNumberInput.value = "";
    secondNumberInput.focus();
};

const clearData = () => {
    calculatorForm.reset();
    resultDisplay.textContent = "";
    firstNumberInput.focus();
};

calculatorForm.addEventListener("submit", calculate);
clearButton.addEventListener("click", clearData);