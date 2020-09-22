const defaultResult = 0;
let currentResult = defaultResult;
let calculationDeccription;
let logEntries = [];

// get user inputed number
function getUserInputedNumber() {
    return parseFloat(userInput.value);
}

// select the calculation operation
function chooseCalculationType(operationType) {
    const prevCurrentResult = currentResult;
    const userInputedNumber = getUserInputedNumber();
    if (operationType == "ADD") {
        currentResult += userInputedNumber;
        mathOperator = "+";
    } else if (operationType == "SUB") {
        currentResult -= userInputedNumber;
        mathOperator = "-";
    } else if (operationType == "MUL") {
        currentResult *= userInputedNumber;
        mathOperator = "*";
    } else {
        currentResult /= userInputedNumber;
        mathOperator = "/";
    }
    getCalculatedOutput(mathOperator, prevCurrentResult, userInputedNumber);
    writeOperationLog(operationType, prevCurrentResult, userInputedNumber, currentResult);
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
    chooseCalculationType("ADD");
}

// this function subtracts two numbers
function subtraction() {
    chooseCalculationType("SUB");
}

// this function multiplies two numbers
function multiplication() {
    chooseCalculationType("MUL");
}

// this function devides two numbers
function division() {
    chooseCalculationType("DIV");
}

addBtn.addEventListener("click", addition);
subtractBtn.addEventListener("click", subtraction);
multiplyBtn.addEventListener("click", multiplication);
divideBtn.addEventListener("click", division);

