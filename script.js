const btn = document.querySelectorAll("button");

let stopLoop = false;
let numberArray = [];
let currentCalculatorNumber = "";
let userInput = "";
let calculatorDigits = 0;
const calculatorScreen = document.querySelector(".resultNumber");

function addition(a, b) {
    if (isNaN(b) || b == "b") {
        console.log("yep");
        return a;
    }

    if (a + b >= 1000000000) {
        return calculatorScreen.textContent = 1000000000;  
    }

    c = a + b;
    numberOneChecked = roundLongDecimals((c));
	return numberOneChecked;
};

function subtraction(a, b) {
    console.log("this is a", a);
    console.log("this is b", b);
    if (isNaN(b) || b == "b") {
        console.log("yep");
        return a;
    }   
    if (a - b <= -1000000000) {
        return calculatorScreen.textContent = -1000000000;  
    }

    console.log("current a and b", a, b);
    c = a - b;
    numberOneChecked = roundLongDecimals((c));
	return numberOneChecked;
};

function multiplication(a, b) {
    console.log("this is a", numberOne);
    console.log("this is b", numberTwo);
    if (isNaN(b)) {
        console.log("yep");
        return a;
    }

    if (a * b >= 1000000000) {
        return calculatorScreen.textContent = 1000000000;  
    }
    if (a * b <= -1000000000)
    {
            return calculatorScreen.textContent = -1000000000;  
    }
    console.log("current a and b", a, b);

    c = a * b;
    numberOneChecked = roundLongDecimals((c));
	return numberOneChecked;
}

function division(a, b) {
    console.log("this is a", numberOne);
    console.log("this is b", numberTwo);
    if (isNaN(b)) {
        console.log("yep");
        return a;
    }
    if (a / b >= 1000000000) {
        return calculatorScreen.textContent = 1000000000;  
    }
    if (a * b <= -1000000000)
        {
                return calculatorScreen.textContent = -1000000000;  
        }

    else {
        c = a / b;
        numberOneChecked = roundLongDecimals((c));
        return numberOneChecked;
    }
}

function operate() {

    console.log("so its " + Number(numberArray[0]) + " and " + Number(numberArray[1]) + " which is equal to");
    numberOne = Number(numberArray[0]);
    numberTwo = Number(numberArray[1]);

    console.log("THIS IS USER INPUT", userInput);
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
        if (numberOne == "0" || numberTwo == "0") {
            console.log("HELLO"); 
            return calculatorScreen.textContent = "Nope."; 
        }
        return division(numberOne, numberTwo);
    }
    else {
        return "ERROR";
    }
}

function roundLongDecimals(x) {
    console.log("x befor anything", x);

    
    let afterDecimalStr = x.toString().split('.')[1]
    let beforeDecimalStr = x.toString().split('.')[0]
    console.log("current after decimal string", afterDecimalStr);
    // So it grabs the variable
    // Turns it into a string splits it
    // Now you have 2 arrays, one before dot one after
    // The variable grab only hte values after
    // so basically everything after the dot is the variable
    if (afterDecimalStr == undefined) {
        return x;
    }
    if (beforeDecimalStr.length >= 9) {
        console.log("before rounding is", c);
        let roundedNumber = Math.round(c)
        console.log("ROUNDED NUMBER IS", roundedNumber);
        return roundedNumber;
    } 
    else if (afterDecimalStr.length >= 4) {
        let roundedNumber = Math.round(c * 1000) / 1000
        console.log("ROUNDED NUMBER IS", roundedNumber);
        return roundedNumber;
    }
    else {
    return x;   
    }   
  }

function calculator() {
btn.forEach((button) => {
    button.addEventListener("click", () => {
            if (button.id ==  "0" || button.id == "1" || button.id ==  "2" || button.id == "3" || button.id == "4" || button.id == "5" || button.id == "6" || button.id == "7" | button.id == "8" || button.id == "9" || button.id == ".") {
                calculatorDigits += 1;
                console.log("CALCULATOR DIGITS", calculatorDigits);

                console.log("CURRENT USER INPUT RN", userInput);
                console.log("CURRENT CALC NUMBER", currentCalculatorNumber);
                if (calculatorDigits >= 10) {                                          
                    return;
                 }
                else {
                    currentCalculatorNumber += button.id;
                    console.log(currentCalculatorNumber);
                    calculatorScreen.textContent = currentCalculatorNumber;  

                }  
            }


            else if (button.id == "addition") {

                if (userInput == "subtraction" || userInput == "multiplication" || userInput == "division") {
                    if (currentCalculatorNumber == "") {
                        console.log("ITS THE SITUATION");
                        return;
                    }
                    else {
                        console.log(userInput);
                        console.log("USER INPUT HAS ALREADY BEEN TYPED");
                        console.log("current", currentCalculatorNumber);
                    
    
                        numberArray.push(currentCalculatorNumber);
    
                        numberArray = [operate()];
                        console.log("FINAL RESULT IS", numberArray);
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
    
                numberArray.push(currentCalculatorNumber);
                console.log(numberArray);
                console.log(currentCalculatorNumber);
                
                currentCalculatorNumber = "";
                calculatorDigits = 0;
            }

            else if (button.id == "subtraction") {

                if (currentCalculatorNumber == "" && userInput == "") {
                    currentCalculatorNumber = "-";
                    console.log("HIII");
                    return;
                }
    
                if (userInput == "addition" || userInput == "multiplication" || userInput == "division") {
                    if (currentCalculatorNumber == "") {
                        console.log("ITS THE SITUATION");
                        return;
                    }
                    else {
                        console.log(userInput);
                        console.log("USER INPUT HAS ALREADY BEEN TYPED");
                    
    
                        numberArray.push(currentCalculatorNumber);
    
                        numberArray = [operate()];
                        console.log("FINAL RESULT IS", numberArray);
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
    
                numberArray.push(currentCalculatorNumber);
                console.log(numberArray);
                console.log(currentCalculatorNumber);
    
                userInput = "subtraction";
    
                currentCalculatorNumber = "";
                calculatorDigits = 0;
            }

            else if (button.id == "multiplication") {
            
                if (userInput == "addition" || userInput == "subtraction" || userInput == "division") {
                    if (currentCalculatorNumber == "") {
                        console.log("ITS THE SITUATION");
                        return;
                    }
                else {
                        console.log(userInput);
                        console.log("USER INPUT HAS ALREADY BEEN TYPED");
                        console.log("current", currentCalculatorNumber);
                    
    
                        numberArray.push(currentCalculatorNumber);
    
                        numberArray = [operate()];
                        console.log("FINAL RESULT IS", numberArray);
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
    
    
                numberArray.push(currentCalculatorNumber);
                console.log(numberArray);
                console.log(currentCalculatorNumber);
    
                userInput = "multiplication";
    
                currentCalculatorNumber = "";
                calculatorDigits = 0;
            }

            else if (button.id == "division") {
            
                if (userInput == "addition" || userInput == "subtraction" || userInput == "multiplication") {
                    if (currentCalculatorNumber == "") {
                        console.log("ITS THE SITUATION");
                        return;
                    }
                else {
                        console.log(userInput);
                        console.log("USER INPUT HAS ALREADY BEEN TYPED");
                        console.log("current", currentCalculatorNumber);
                    
    
                        numberArray.push(currentCalculatorNumber);
    
                        numberArray = [operate()];
                        console.log("FINAL RESULT IS", numberArray);
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
    
    
                numberArray.push(currentCalculatorNumber);
                console.log(numberArray);
                console.log(currentCalculatorNumber);
    
                userInput = "division";
    
                currentCalculatorNumber = "";
                calculatorDigits = 0;
            }

            else if (button.id == "numberReverse") {
                if (currentCalculatorNumber == "") {
                    console.log("ITS THE SITUATION");
                    return;
                }
                console.log("YOU ARE USING THE + - SIGN")
                currentCalculatorNumber = currentCalculatorNumber - (currentCalculatorNumber * 2);
                console.log(currentCalculatorNumber);
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
                    console.log("ITS THE SITUATION");
                    return;
                }
            console.log("YOU ARE USING THE PERCENTAGE SIGN")
            currentCalculatorNumber = currentCalculatorNumber / 100;
            console.log(currentCalculatorNumber);
            calculatorScreen.textContent = currentCalculatorNumber;
            }

            else if (button.id == "decimal") {
                if (currentCalculatorNumber.endsWith('.')) {
                    console.log("YEP");
                    return;
                }
    
                if (Number.isInteger(Number(currentCalculatorNumber))) {
                    console.log("yep");
                    currentCalculatorNumber = currentCalculatorNumber + ".";
                    console.log("new number is", currentCalculatorNumber);
                }
                else {
                    console.log("nope");
                    return;
                }
            }


            else if (button.id == "result") {
                if (userInput == "") {
                    return;
                }
                numberArray.push(currentCalculatorNumber);
    
                console.log("THIS IS NUMBER ARRAY 0!", numberArray[0]);
                console.log("THIS IS NUMBER ARRAY 1!", numberArray[1]);
    
                numberArray = [operate()];
                console.log("FINAL RESULT IS", numberArray);
                calculatorScreen.textContent = numberArray;  

                numberArray = [];
                currentCalculatorNumber = "";
                userInput = "";
                calculatorDigits = 0;
            }

        if (numberArray.length >= 2) {
            console.log("MAX ARRAY LENGTH");

            console.log("THIS IS NUMBER ARRAY 0!", numberArray[0]);
            console.log("THIS IS NUMBER ARRAY 1!", numberArray[1]);

            numberArray = [operate()];
            console.log("FINAL RESULT IS", numberArray);
            calculatorScreen.textContent = numberArray;  
            console.log("THIS IS THE CURRENT CALCULATOR SCREN TEXT CONTENT!", calculatorScreen.textContent);

            currentCalculatorNumber = "";
            calculatorDigits = 0;
            console.log("HI THIS IS CALCULATOR DIGITS CURRENTLY", calculatorDigits);
        }
    });
  });
}

console.log(calculator());