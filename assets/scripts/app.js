const defaultResult =  0;
let currentResult = defaultResult;
let calculationDeccription;

function getUserInputedNumber() {
    return parseInt(userInput.value);
}

function addition() {
    const userInputedNumber = getUserInputedNumber();
    calculationDeccription = currentResult + "+" + userInputedNumber;
    currentResult = currentResult + userInputedNumber;
    outputResult(currentResult, calculationDeccription);
}

addBtn.addEventListener("click", addition);