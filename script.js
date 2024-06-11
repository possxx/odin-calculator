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
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*": 
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

const inputField = document.querySelector(".input-field");
const numberInputs = Array.from(document.querySelectorAll(".number"));
const commaInput = document.querySelector(".comma");
const operatorInputs = Array.from(document.querySelectorAll(".operator"));
const resultInput = document.querySelector(".result");
const clearInput = document.querySelector(".clear");

let displayValue;

numberInputs.forEach((numberInput) => {
    numberInput.addEventListener("click", () => {
        if (inputField.innerText == "ERROR") {
            inputField.innerText = "";
            firstNumber = undefined;
            secondNumber = undefined;
            operator = undefined;
            resultClicks = 0;
            operatorClicks = 0;
        }
        if (resultClicks == 1) {
            inputField.innerText = "";
            firstNumber = undefined;
            secondNumber = undefined;
            operator = undefined;
            resultClicks = 0;
            operatorClicks = 0;
        }
        if (operatorClicks == 1) {
            inputField.innerText = "";
            secondNumber = undefined;
            operatorClicks = 0;
        }
        if (!(operator)) {
            inputField.innerText += numberInput.innerText;
            displayValue = Number(inputField.innerText);
            firstNumber = displayValue;
        } else {
            inputField.innerText += numberInput.innerText;
            displayValue = Number(inputField.innerText);
            secondNumber = displayValue;
        }
    })
})

commaInput.addEventListener("click", () => {
    if (inputField.innerText == "ERROR") {
        inputField.innerText = "";
        firstNumber = undefined;
        secondNumber = undefined;
        operator = undefined;
        resultClicks = 0;
        operatorClicks = 0;
    }
    if (resultClicks == 1) {
        inputField.innerText = "";
        firstNumber = undefined;
        secondNumber = undefined;
        operator = undefined;
        resultClicks = 0;
        operatorClicks = 0;
    }
    if (operatorClicks == 1) {
        inputField.innerText = "";
        secondNumber = undefined;
        operatorClicks = 0;
    }
    if (!(operator)) {
        if (!(inputField.innerText.includes("."))) {
            inputField.innerText += commaInput.innerText;
            displayValue = Number(inputField.innerText);
            firstNumber = displayValue;
        }
    } else {
        if (!(inputField.innerText.includes("."))) {
            inputField.innerText += commaInput.innerText;
            displayValue = Number(inputField.innerText);
            secondNumber = displayValue;
        }
    }
})

/*
Keeps track of when an operator button is pressed and uses 
the displayed number after the operation for the next calculation.
*/
let operatorClicks = 0;
let result;

operatorInputs.forEach((operatorInput) => {
    operatorInput.addEventListener("click", () => {
        switch (operatorInput.innerText) {
            case "+":
                if (firstNumber != undefined && secondNumber == undefined) {
                    operator = "+";
                    inputField.innerText = "";
                    operatorClicks = 0;
                    resultClicks = 0;
                } else if (firstNumber != undefined && secondNumber != undefined) {
                    if (operator == "/" && secondNumber == 0) {
                        inputField.innerText = "ERROR";
                    } else {
                    result = operate(firstNumber, secondNumber, operator);
                    if (result.toString().includes(".")) {
                        result = result.toFixed(2);
                    }
                    inputField.innerText = result;
                    operator = "+";
                    firstNumber = Number(inputField.innerText);
                    secondNumber = undefined;
                    operatorClicks = 1;
                    }
                }
                break;
            case "-":
                if (firstNumber == undefined && secondNumber == undefined) {
                    inputField.innerText = "-";
                } else if (firstNumber != undefined && secondNumber == undefined) {
                    operator = "-";
                    inputField.innerText = "";
                    operatorClicks = 0;
                    resultClicks = 0;
                } else if (firstNumber != undefined && secondNumber != undefined) {
                    if (operator == "/" && secondNumber == 0) {
                        inputField.innerText = "ERROR";
                    } else {
                    result = operate(firstNumber, secondNumber, operator);
                    if (result.toString().includes(".")) {
                        result = result.toFixed(2);
                    }
                    inputField.innerText = result;
                    operator = "-";
                    firstNumber = Number(inputField.innerText);
                    secondNumber = undefined;
                    operatorClicks = 1;
                    }
                }
                break;
            case "*":
                if (firstNumber != undefined && secondNumber == undefined) {
                    operator = "*";
                    inputField.innerText = "";
                    operatorClicks = 0;
                    resultClicks = 0;
                } else if (firstNumber != undefined && secondNumber != undefined) {
                    if (operator == "/" && secondNumber == 0) {
                        inputField.innerText = "ERROR";
                    } else {
                    result = operate(firstNumber, secondNumber, operator);
                    if (result.toString().includes(".")) {
                        result = result.toFixed(2);
                    }
                    inputField.innerText = result;
                    operator = "*";
                    firstNumber = Number(inputField.innerText);
                    secondNumber = undefined;
                    operatorClicks = 1;
                    }
                }
                break;
            case "/": 
                if (firstNumber != undefined && secondNumber == undefined) {
                    operator = "/";
                    inputField.innerText = "";
                    operatorClicks = 0;
                    resultClicks = 0;
                } else if (firstNumber != undefined && secondNumber != undefined) {
                    if (operator == "/" && secondNumber == 0) {
                        inputField.innerText = "ERROR";
                    } else {
                    result = operate(firstNumber, secondNumber, operator);
                    if (result.toString().includes(".")) {
                        result = result.toFixed(2);
                    }
                    inputField.innerText = result;
                    operator = "/";
                    firstNumber = Number(inputField.innerText);
                    secondNumber = undefined;
                    operatorClicks = 1;
                    }
                }
                break;
        }
    })
})

/*
Keeps track of when the result button is pressed and effectively clears
all inputs if it is followed by a number input but uses the displayed
number for the next calculation if it is followed by an operator input.
*/
let resultClicks = 0;

resultInput.addEventListener("click", () => {
    if (firstNumber != undefined && secondNumber != undefined) {
        if (operator == "/" && secondNumber == 0) {
            inputField.innerText = "ERROR";
        } else {
        result = operate(firstNumber, secondNumber, operator);
        if (result.toString().includes(".")) {
            result = result.toFixed(2);
        }
        inputField.innerText = result;
        firstNumber = Number(inputField.innerText);
        secondNumber = undefined;
        resultClicks++;
        }
    }
})

clearInput.addEventListener("click", () => {
    inputField.innerText = "";
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    resultClicks = 0;
    operatorClicks = 0;
})

















