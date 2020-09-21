const defaultResult =  0;
let currentResult = defaultResult;
let calculationDeccription;

// get user inputed number
function getUserInputedNumber() {
    return parseFloat(userInput.value);
}

// show the calculated output with log
function getCalculatedOutput(operator, resultbeforeCalc, finalResult) {
    calculationDeccription = resultbeforeCalc + operator + finalResult;
    outputResult(currentResult, calculationDeccription);
}

// this function adds two numbers
function addition() {
    const prevCurrentResult = currentResult;
    const userInputedNumber = getUserInputedNumber();
    currentResult = currentResult + userInputedNumber;
    getCalculatedOutput("+", prevCurrentResult, userInputedNumber);
}

// this function subtracts two numbers
function subtraction() {
    const prevCurrentResult = currentResult;
    const userInputedNumber = getUserInputedNumber();
    currentResult = currentResult - userInputedNumber;
    getCalculatedOutput("-", prevCurrentResult, userInputedNumber);
}

// this function multiplies two numbers
function multiplication() {
    const prevCurrentResult = currentResult;
    const userInputedNumber = getUserInputedNumber();
    currentResult = currentResult * userInputedNumber;
    getCalculatedOutput("*", prevCurrentResult, userInputedNumber);
}

// this function devides two numbers
function division() {
    const prevCurrentResult = currentResult;
    const userInputedNumber = getUserInputedNumber();
    currentResult = currentResult / userInputedNumber;
    getCalculatedOutput("/", prevCurrentResult, userInputedNumber);
}

addBtn.addEventListener("click", addition);
subtractBtn.addEventListener("click", subtraction);
multiplyBtn.addEventListener("click", multiplication);
divideBtn.addEventListener("click", division);

