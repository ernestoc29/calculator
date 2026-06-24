let firstNumber = "";
let secondNumber = "";
let currentOperator = "";

const functionBtns = document.querySelectorAll(".function");
const numberBtns = document.querySelectorAll(".number");
const operationBtns = document.querySelectorAll(".operation");
const signsBtn = document.getElementById("signs");

numberBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        if (!currentOperator) {
            firstNumber += btn.id;
            console.log(firstNumber);
        } else {
            secondNumber += btn.id;
            console.log(secondNumber);
        };
    });
});

operationBtns.forEach(btn => {
     btn.addEventListener("click", () => {
        if (btn.id === "equals") {
            console.log(operate(firstNumber, currentOperator, secondNumber));
        } else if (btn.id === "decimal") {
            if (!currentOperator) {
                if (!firstNumber.includes(".")) {
                    firstNumber += ".";
                }
                console.log(firstNumber)
            } else {
                if(!secondNumber.includes(".")) {
                    secondNumber += "."
                }
                console.log(secondNumber)
            }
        } else {
            currentOperator = btn.id
            console.log(currentOperator);
        }
    })
})

function operate(num1, operator, num2) {

}