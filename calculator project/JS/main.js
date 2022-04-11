const calculator = {
    displayValue: '0', firstOperand: null, waitSecondOperand: false, operator: null,
};

function inputDigit(digit) {
    var {displayValue, waitSecondOperand} = calculator;
    if (waitSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue = digit;
    }
}

function inputDecimal(dot) {
    if (calculator.waitSecondOperand === true) return;
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

function handleOperator(nextOperator) {
    const {firstOperand, displayValue, operator} = calculator
    const valueOfInput = parseFloat(displayValue);
    if (operator && calculator.waitSecondOperand) {
        calculator.operator = nextOperator;
        return;
    }
    if (firstOperand == null) {
        calculator.firstOperand = valueOfInput;
    } else if (operator) {
        const valueNow = firstOperand || 0;
        let result = performCalculation[operator](valueNow, valueOfInput);
        result = Number(result).toFixed(9);
        result = (result * 1).toString()
        calculator.displayValue = parseFloat(result);
        calculator.firstOperand = parseFloat(result);
    }
    calculator.waitSecondOperand = true;
    calculator.operator = nextOperator;
}
const performCalculation = {
    "/": (firstOperand, secondOperand) => firstOperand / secondOperand,
    "*": (firstOperand, secondOperand) => firstOperand * secondOperand,
    "+": (firstOperand, secondOperand) => firstOperand + secondOperand,
    "-": (firstOperand, secondOperand) => firstOperand - secondOperand,
    "=": (firstOperand, secondOperand) => secondOperand
};

function calculatorReset() {
    calculator.displayValue = "0";
    calculator.firstOperand = null;
    calculator.waitSecondOperand = false;
    calculator.operator = null;
}

function updateDisplay() {
    var display = document.querySelector(".calculatorScreen");
    display.value = calculator.displayValue;
}
updateDisplay();
var keys = document.querySelector(".calculatorKeys");
keys.addEventListener("click", (event) => {
    var {target} = event;
    if (!target.matches("button")) {
        return;
    }
    if (target.classList.contains("operator")) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains("decimal")) {
        inputDecimal(target.value);
        updateDisplay();
    }
    if (target.classList.contains("allClear")) {
        calculatorReset();
        updateDisplay();
        return;
    }
    inputDigit(target.value);
    updateDisplay();
})