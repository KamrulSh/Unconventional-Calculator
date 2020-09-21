const defaultResult =  0;
let currentResult = defaultResult;
let calculationDeccription;

function getUserInputedNumber() {
    return parseFloat(userInput.value);
}

function addition() {
    const userInputedNumber = getUserInputedNumber();
    calculationDeccription = currentResult + "+" + userInputedNumber;
    currentResult = currentResult + userInputedNumber;
    outputResult(currentResult, calculationDeccription);
}

function subtraction() {
    const userInputedNumber = getUserInputedNumber();
    calculationDeccription = currentResult + "-" + userInputedNumber;
    currentResult = currentResult - userInputedNumber;
    outputResult(currentResult, calculationDeccription);
}

function multiplication() {
    const userInputedNumber = getUserInputedNumber();
    calculationDeccription = currentResult + "*" + userInputedNumber;
    currentResult = currentResult * userInputedNumber;
    outputResult(currentResult, calculationDeccription);
}

function division() {
    const userInputedNumber = getUserInputedNumber();
    calculationDeccription = currentResult + "/" + userInputedNumber;
    currentResult = currentResult / userInputedNumber;
    outputResult(currentResult, calculationDeccription);
}

addBtn.addEventListener("click", addition);
subtractBtn.addEventListener("click", subtraction);
multiplyBtn.addEventListener("click", multiplication);
divideBtn.addEventListener("click", division);

