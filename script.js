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

let firstNumber = 0;
let secondNumber = 0;
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
const numberInput = document.querySelectorAll(".number");
const operatorInput = document.querySelectorAll(".operator");
const resultInput = document.querySelector(".result");
const commaInput = document.querySelector(".comma");
const clearInput = document.querySelector(".clear");


let inputFieldNumber;
let storeSecondNumber;
let numberClicks = 0;
const displayNumber = Array.from(numberInput);
displayNumber.forEach(number => {
    number.addEventListener("click", () => {
         if (operatorClicks == 0) {
                inputFieldNumber = number.innerText;
                inputField.innerText = inputField.innerText + inputFieldNumber;
                firstNumber = +inputField.innerText;
        } else if (operatorClicks == 1) {
                inputFieldNumber = number.innerText;
                inputField.innerText = inputField.innerText + inputFieldNumber;
                secondNumber = +inputField.innerText;
                storeSecondNumber = +inputField.innerText.slice();
        } else {
                numberClicks += 1;
                if (numberClicks == 1) {
                    firstNumber = storeSecondNumber;
                    inputField.innerText = "";
                }
                inputFieldNumber = number.innerText;
                inputField.innerText = inputField.innerText + inputFieldNumber;
                secondNumber = +inputField.innerText;
        }
    })
})

let operatorClicks = 0;
const operatorValue = Array.from(operatorInput);
operatorValue.forEach(input => {
    input.addEventListener("click", () => {
        let value = input.innerText;
        switch (value) {
            case "+":
                operator = "+";
                operatorClicks += 1;
                inputFieldNumber = "";
                inputField.innerText = "";
                numberClicks = 0;
                storeSecondNumber = secondNumber;
                break;
            case "-":
                operator = "-";
                operatorClicks += 1;
                inputFieldNumber = "";
                inputField.innerText = "";
                numberClicks = 0;
                storeSecondNumber = secondNumber;
                break;
            case "*":
                operator = "*";
                operatorClicks += 1;
                inputFieldNumber = "";
                inputField.innerText = "";
                numberClicks = 0;
                storeSecondNumber = secondNumber;
                break;
            case "/":
                operator = "/";
                operatorClicks += 1;
                inputFieldNumber = "";
                inputField.innerText = "";
                numberClicks = 0;
                storeSecondNumber = secondNumber;
                break;
        }
    })
})

resultInput.addEventListener("click", () => {
    const result = operate(firstNumber, secondNumber, operator);
    inputField.innerText = result;
    operatorClicks = 0;
    numberClicks = 0;
    firstNumber = result;
    secondNumber = 0;
})





