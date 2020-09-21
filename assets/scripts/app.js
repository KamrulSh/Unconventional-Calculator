const defaultResult =  0;
let currentNumber = defaultResult;
let calculationDeccription;

function add() {
    calculationDeccription = currentNumber + "+" + userInput.value;
    currentNumber = currentNumber + parseInt(userInput.value);
    outputResult(currentNumber, calculationDeccription);
}

addBtn.addEventListener("click", add);