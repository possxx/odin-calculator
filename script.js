function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

let firstNumber;
let secondNumber;
let operator;

function operate(a, b, operator) {
    if (operator == "+") {
        return add(a, b);
    } else if (operator == "-") {
        return subtract(a, b);
    } else if (operator == "*") {
        return multiply(a, b);
    } else if (operator =="/") {
        return divide(a, b);
    }
};

const inputField = document.querySelector(".input-field");
const numberInputs = Array.from(document.querySelectorAll(".number"));
const operatorInputs = Array.from(document.querySelectorAll(".operator"));
const resultInput = document.querySelector(".result");
const commaInput = document.querySelector(".comma");
const clearInput = document.querySelector(".clear");

let displayValue;

numberInputs.forEach((numberInput) => {
    numberInput.addEventListener("click", () => {
        inputField.innerText += numberInput.innerText;
        displayValue = +inputField.innerText;
        if (operatorClicks == 1) {
            inputField.innerText = numberInput.innerText;
            displayValue = +inputField.innerText;
            firstNumber = undefined;
            secondNumber = undefined;
            operator = undefined;
            operatorClicks--;
        }
        if (!(operator)) {
            firstNumber = displayValue;
        } else {
            secondNumber = displayValue;
        }
    })
})

let operatorClicks = 0;

operatorInputs.forEach((operatorInput) => {
    operatorInput.addEventListener("click", () => {
        switch (operatorInput.innerText) {
            case "+":
                if (firstNumber != undefined && secondNumber == undefined) {
                    operator = "+";
                    inputField.innerText = "";
                    operatorClicks = 0;
                } else if (firstNumber != undefined && secondNumber != undefined) {
                    inputField.innerText = operate(firstNumber, secondNumber, operator);
                    firstNumber = +inputField.innerText;
                    secondNumber = undefined;
                    operatorClicks++;
                }
                break;
            case "-":
                break;
            case "*":
                break;
            case "/": 
                break;
        }
    })
})









