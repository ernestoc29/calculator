let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let result = "";

const functionBtns = document.querySelectorAll(".function");
const numberBtns = document.querySelectorAll(".number");
const operationBtns = document.querySelectorAll(".operation");
const signsBtn = document.getElementById("signs");

const problem = document.querySelector(".problem");
const solution = document.querySelector(".solution");

numberBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (!currentOperator) {
            firstNumber += btn.id;
            problem.textContent = firstNumber;
        } else {
            secondNumber += btn.id;
            problem.textContent = `${firstNumber} ${wordToSymbol(currentOperator)} ${secondNumber}`;
        }
    });
});

functionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.id === "clear") {
            problem.textContent = "";
            solution.textContent = "";
            firstNumber = "";
            secondNumber = "";
            currentOperator = "";
            result = "";
        } else if (btn.id === "delete") {
            if (secondNumber) {
                secondNumber = secondNumber.slice(0 , -1);
                problem.textContent = `${firstNumber} ${wordToSymbol(currentOperator)} ${secondNumber}`;
            } else if (currentOperator && !secondNumber) {
                currentOperator = "";
                problem.textContent = `${firstNumber}`;
            } else {
                firstNumber = firstNumber.slice(0, -1);
                problem.textContent = `${firstNumber}`;
            }
        }
    })
})

operationBtns.forEach(btn => {
     btn.addEventListener("click", () => {
        if (btn.id === "equals") {
            result = operate(firstNumber, currentOperator, secondNumber);
            solution.textContent = result;
        } else if (btn.id === "decimal") {
            handleDecimal();
        } else {
            if (firstNumber && currentOperator && secondNumber) {
                result = operate(firstNumber, currentOperator, secondNumber)
                console.log(result);
                firstNumber = result.toString();
                secondNumber = "";
            }

            currentOperator = btn.id;
            problem.textContent = `${firstNumber} ${wordToSymbol(currentOperator)}`
            console.log(currentOperator);
        }
    });
});

function wordToSymbol(operator) {
    let currentOperatorDisplay = "";

    if (operator === "plus") {
        currentOperatorDisplay = "+";
    } else if (operator === "minus") {
        currentOperatorDisplay = "-";
    } else if (operator === "multiply") {
        currentOperatorDisplay = "*";
    } else if (operator === "divide") {
        currentOperatorDisplay = "÷";
    }

    return currentOperatorDisplay;
}

function handleDecimal() {
    if (!currentOperator) {
        if (!firstNumber.includes(".")) {
            firstNumber += ".";
            problem.textContent = firstNumber;
        }
        console.log(firstNumber)
    } else {
        if(!secondNumber.includes(".")) {
            secondNumber += ".";
            problem.textContent = `${firstNumber} ${wordToSymbol(currentOperator)} ${secondNumber}`;
        }
        console.log(secondNumber)
    }
}

function operate(num1, operator, num2) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if(operator === "plus") {
        return n1 + n2;
    } else if (operator === "minus") {
        return n1 - n2;
    } else if (operator === "multiply") {
        return n1 * n2;
    } else if (operator === "divide") {
       if (n2 === 0) {
       return "Error"
       } else {
        return n1 / n2
       }
    }
}