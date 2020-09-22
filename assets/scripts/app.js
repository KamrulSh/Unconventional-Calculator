const defaultResult = 0;
let currentResult = defaultResult;
let calculationDeccription;
let logEntries = [];

// get user inputed number
function getUserInputedNumber() {
    return parseFloat(userInput.value);
}

// show the calculated output with log
function getCalculatedOutput(operator, resultBeforeCalc, finalResult) {
    calculationDeccription = resultBeforeCalc + operator + finalResult;
    outputResult(currentResult, calculationDeccription);
}

function writeOperationLog(operationId, prevCurrentResult, userInputedNumber, currentResult) {
    const logEntry = {
        operation: operationId,
        prevValue: prevCurrentResult,
        inputValue: userInputedNumber,
        result: currentResult
    };
    logEntries.push(logEntry);
    console.log(logEntry.operation);
    console.log(logEntries);
}

// this function adds two numbers
function addition() {
    const prevCurrentResult = currentResult;
    const userInputedNumber = getUserInputedNumber();
    currentResult += userInputedNumber;
    getCalculatedOutput("+", prevCurrentResult, userInputedNumber);
    writeOperationLog("ADD", prevCurrentResult, userInputedNumber, currentResult);
}

// this function subtracts two numbers
function subtraction() {
    const prevCurrentResult = currentResult;
    const userInputedNumber = getUserInputedNumber();
    currentResult -= userInputedNumber;
    getCalculatedOutput("-", prevCurrentResult, userInputedNumber);
    writeOperationLog("SUB", prevCurrentResult, userInputedNumber, currentResult);
}

// this function multiplies two numbers
function multiplication() {
    const prevCurrentResult = currentResult;
    const userInputedNumber = getUserInputedNumber();
    currentResult *= userInputedNumber;
    getCalculatedOutput("*", prevCurrentResult, userInputedNumber);
    writeOperationLog("MUL", prevCurrentResult, userInputedNumber, currentResult);
}

// this function devides two numbers
function division() {
    const prevCurrentResult = currentResult;
    const userInputedNumber = getUserInputedNumber();
    currentResult /= userInputedNumber;
    getCalculatedOutput("/", prevCurrentResult, userInputedNumber);
    writeOperationLog("DIV", prevCurrentResult, userInputedNumber, currentResult);
}

addBtn.addEventListener("click", addition);
subtractBtn.addEventListener("click", subtraction);
multiplyBtn.addEventListener("click", multiplication);
divideBtn.addEventListener("click", division);

