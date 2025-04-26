function addition(a, b) {
	return a + b;
};

function subtraction(a, b) {
	return a - b;
};

function multiplication(array) {
    return array.reduce((sum, total) => sum * total);
  };

function division(array) {
    return array.reduce((sum, total) => sum / total);
};

const numberOne = 4;
const numberTwo = 2;
console.log(addition(numberOne, numberTwo));
console.log(subtraction(numberOne, numberTwo));
console.log(multiplication([numberOne, numberTwo]));
console.log(division([numberOne, numberTwo]));


function operator() {
    let userInput = prompt("which operator do you want to use?")

    if (userInput === "addition") {
        return addition(numberOne, numberTwo);
    }
    if (userInput === "subtraction") {
        return subtraction(numberOne, numberTwo);
    }
    if (userInput === "multiplication") {
        return multiplication([numberOne, numberTwo]);
    }
    if (userInput === "division") {
        return division([numberOne, numberTwo]);
    }
    else {
        return "ERROR";
    }
}

console.log(operator());