const btn = document.querySelectorAll("button");
const calculatorScreen = document.querySelector(".resultNumber");

let calculatorDigits = 0;
let currentCalculatorNumber = "";
let numberArray = [];
let userInput = "";

function addition(a, b) {
    if (isNaN(b) || b == "b") {
        return a;
    }
    if (a + b >= 1000000000) {
        return calculatorScreen.textContent = 1000000000;  
    }
    c = a + b;
    numberChecked = roundLongDecimals((c));
	return numberChecked;
};

function subtraction(a, b) {
    if (isNaN(b) || b == "b") {
        return a;
    }   
    if (a - b <= -1000000000) {
        return calculatorScreen.textContent = -1000000000;  
    }
    c = a - b;
    numberChecked = roundLongDecimals((c));
	return numberChecked;
};

function multiplication(a, b) {
    if (isNaN(b)) {
        return a;
    }
    if (a * b >= 1000000000) {
        return calculatorScreen.textContent = 1000000000;  
    }
    if (a * b <= -1000000000)
    {
        return calculatorScreen.textContent = -1000000000;  
    }
    c = a * b;
    numberChecked = roundLongDecimals((c));
	return numberChecked;
};

function division(a, b) {
    if (isNaN(b)) {
        return a;
    }
    if (a / b >= 1000000000) {
        return calculatorScreen.textContent = 1000000000;  
    }
    if (a / b <= -1000000000) {
        return calculatorScreen.textContent = -1000000000;  
    }
    c = a / b;
    numberChecked = roundLongDecimals((c));
    return numberChecked;
};

function operate() {
    numberOne = Number(numberArray[0]);
    numberTwo = Number(numberArray[1]);

    if (userInput == undefined) {
        return numberOne;
    }
    if (userInput == "addition") {
        return addition(numberOne, numberTwo);
    }
    else if (userInput == "subtraction") {
        return subtraction(numberOne, numberTwo);
    }
    else if (userInput == "multiplication") {
        return multiplication(numberOne, numberTwo);
    }
    else if (userInput == "division") {
        // Stop user from dividing number by 0
        if (numberOne == "0" || numberTwo == "0") {
            return calculatorScreen.textContent = "Nope."; 
        }
        return division(numberOne, numberTwo);
    }
    else {
        return "ERROR";
    }
};

function roundLongDecimals(x) {
    // Split decimal number
    let afterDecimalStr = x.toString().split('.')[1]
    let beforeDecimalStr = x.toString().split('.')[0]

    if (afterDecimalStr == undefined) {
        return x;
    }

    // Round  decimals if number is too long
    if (beforeDecimalStr.length >= 9) {
        let roundedNumber = Math.round(c)
        return roundedNumber;
    } 

    // Round answers with long decimals
    else if (afterDecimalStr.length >= 4) {
        let roundedNumber = Math.round(c * 1000) / 1000
        return roundedNumber;
    }
    else {
    return x;   
    }   
};

btn.forEach((button) => {
    button.addEventListener("click", () => {
        button.classList.add('active');
        setTimeout(function(){
            button.classList.remove('active');
        }, 100);

        if (button.id ==  "0" || button.id == "1" || button.id ==  "2" || button.id == "3" ||
            button.id == "4" || button.id == "5" || button.id == "6" || button.id == "7" ||
            button.id == "8" || button.id == "9" || button.id == ".") {
            calculatorDigits += 1;
            
            if (calculatorDigits >= 10) {                                          
                return;
            }
            else {
                currentCalculatorNumber += button.id;
                calculatorScreen.textContent = currentCalculatorNumber;  
            }  
        }

        else if (button.id == "addition") {
            if (userInput == "subtraction" || userInput == "multiplication" || userInput == "division") {
                if (currentCalculatorNumber == "") {
                    return;
                }
                else {
                    numberArray.push(currentCalculatorNumber);
                    numberArray = [operate()];
                    calculatorScreen.textContent = numberArray;
                    currentCalculatorNumber = "";
                    userInput = "";
                    calculatorDigits = 0;
                }
            }
            else {
                userInput = "addition";
            }
            if (currentCalculatorNumber == "") {
                return userInput = "addition";
            }
            userInput = "addition";
            numberArray.push(currentCalculatorNumber);
            currentCalculatorNumber = "";
            calculatorDigits = 0;
        }

        else if (button.id == "subtraction") {
            if (currentCalculatorNumber == "" && userInput == "") {
                currentCalculatorNumber = "-";
                return;
            }
            if (userInput == "addition" || userInput == "multiplication" || userInput == "division") {
                if (currentCalculatorNumber == "") {
                    return;
                }
                else {
                    numberArray.push(currentCalculatorNumber);
                    numberArray = [operate()];
                    calculatorScreen.textContent = numberArray;
                    currentCalculatorNumber = "";
                    userInput = "";
                    calculatorDigits = 0;
                }
            }
            else {
                userInput = "subtraction";
            }
            if (currentCalculatorNumber == "") {
                return userInput = "subtraction";
            }
            userInput = "subtraction";
            numberArray.push(currentCalculatorNumber);
            currentCalculatorNumber = "";
            calculatorDigits = 0;
        }

        else if (button.id == "multiplication") {
            if (userInput == "addition" || userInput == "subtraction" || userInput == "division") {
                if (currentCalculatorNumber == "") {
                    return;
                }
                else {
                    numberArray.push(currentCalculatorNumber);
                    numberArray = [operate()];
                    calculatorScreen.textContent = numberArray;
                    currentCalculatorNumber = "";
                    userInput = "";
                    calculatorDigits = 0;
                }
            }
            else {
                userInput = "multiplication";
            }
            if (currentCalculatorNumber == "") {
                return userInput = "multiplication";
            }
            userInput = "multiplication";
            numberArray.push(currentCalculatorNumber);
            currentCalculatorNumber = "";
            calculatorDigits = 0;
        }

        else if (button.id == "division") {
            if (userInput == "addition" || userInput == "subtraction" || userInput == "multiplication") {
                if (currentCalculatorNumber == "") {
                    return;
                }
                else {
                    numberArray.push(currentCalculatorNumber);
                    numberArray = [operate()];
                    calculatorScreen.textContent = numberArray;
                    currentCalculatorNumber = "";
                    userInput = "";
                    calculatorDigits = 0;
                    }
            }
            else {
                userInput = "division";
            }
            if (currentCalculatorNumber == "") {
                return userInput = "division";
            }
            userInput = "division";
            numberArray.push(currentCalculatorNumber);
            currentCalculatorNumber = "";
            calculatorDigits = 0;
        }

        else if (button.id == "numberReverse") {
            if (currentCalculatorNumber == "") {
                return;
            }
            currentCalculatorNumber = currentCalculatorNumber - (currentCalculatorNumber * 2);
            calculatorScreen.textContent = currentCalculatorNumber;  
        }  

        else if (button.id == "clear") {
            calculatorScreen.textContent = 0;
            numberArray = [];
            currentCalculatorNumber = "";
            userInput = "";
            calculatorDigits = 0;
        }

        else if (button.id == "percentage") {            
            if (currentCalculatorNumber == "") {
                return;
            }
            currentCalculatorNumber = currentCalculatorNumber / 100;
            calculatorScreen.textContent = currentCalculatorNumber;
        }

        else if (button.id == "decimal") {
            if (currentCalculatorNumber.endsWith('.')) {
                return;
            }
    
            if (Number.isInteger(Number(currentCalculatorNumber))) {
                currentCalculatorNumber = currentCalculatorNumber + ".";
            }
            else {
                return;
            }
        }

        else if (button.id == "result") {
            // Return if user clicks on result without number input
            if (userInput == "") {
                return;
            }
            numberArray.push(currentCalculatorNumber);
            numberArray = [operate()];
            calculatorScreen.textContent = numberArray;  
            numberArray = [];
            currentCalculatorNumber = "";
            userInput = "";
            calculatorDigits = 0;
        }

        if (numberArray.length >= 2) {
            numberArray = [operate()];
            calculatorScreen.textContent = numberArray;  
            currentCalculatorNumber = "";
            calculatorDigits = 0;
        }
    });
});