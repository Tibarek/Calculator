const numOne = document.querySelector(".num-1");
const numTwo = document.querySelector(".num-2");
const numThree = document.querySelector(".num-3");
const numFour = document.querySelector(".num-4");
const numFive = document.querySelector(".num-5");
const numSix = document.querySelector(".num-6");
const numSeven = document.querySelector(".num-7");
const numEight = document.querySelector(".num-8");
const numNine = document.querySelector(".num-9");
const numZero = document.querySelector(".num-0");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const times = document.querySelector(".times");
const divideSign = document.querySelector(".divide-sign");
const clear = document.querySelector(".clear");
const  equals = document.querySelector(".equals");
const viewDisplay = document.querySelector(".viewDisplay");
const history = document.querySelector(".history");

function add (addend1, addend2){
    return addend1 + addend2;
}


function subtract (minuend , subtrahend){
    return minuend - subtrahend;
}

function multiply (factor1, factor2){
    return factor1 * factor2;
}

function divide (dividend, divisor){
    return dividend / divisor;
}

let firstNum = '';
let operator = "";
let secondNum = '';
let val = "";

function clearDisplay(){
    viewDisplay.textContent = 0;
    val = "";
    firstNum = '';
    operator = "";
    secondNum = '';
}

function populateDisplay(btnName){
    let content = btnName.textContent;
    if(content !== "+" && content !== "-" && content !== "x" && content !== "/" && content !== "="){
        secondNum += content;
    }

    if(content === "+" || content === "-" || content === "x" || content === "/" || content == "="){
        if(firstNum === ""){
            firstNum = secondNum;
            secondNum = "";
        }
        
     

    if(firstNum !== "" && secondNum !==  "" && operator !== ""){
            operate(firstNum,operator,secondNum);
    }

    operator = content;
}
    val += content;
    if(content === "="){
        history.textContent = `${val} ${firstNum}`;
        clearDisplay();
    }else{
        viewDisplay.textContent = val;
    }
}

function operate(operateFirstNum, op, operateSecondNum){
    if(op === "+"){
        firstNum = add(+operateFirstNum,+operateSecondNum);
        secondNum = "";
        
    } else if(op === "-") {
        firstNum = subtract(+operateFirstNum,+operateSecondNum);
        secondNum = "";
        
    }else if(op ==="x"){
        firstNum = multiply(+operateFirstNum,+operateSecondNum);
        secondNum = "";
        
    }else if(op === "/"){
        firstNum = divide(+operateFirstNum,+operateSecondNum);
        secondNum = "";
    }

}

// button event handler

numOne.addEventListener("click", () => {
    populateDisplay(numOne);
});
numTwo.addEventListener("click", () => {
    populateDisplay(numTwo);
});
numThree.addEventListener("click", () => {
    populateDisplay(numThree);
});
numFour.addEventListener("click", () => {
    populateDisplay(numFour);
});
numFive.addEventListener("click", () => {
    populateDisplay(numFive);
});
numSix.addEventListener("click", () => {
    populateDisplay(numSix);
});
numSeven.addEventListener("click", () => {
    populateDisplay(numSeven);
});
numEight.addEventListener("click", () => {
    populateDisplay(numEight);
});
numNine.addEventListener("click", () => {
    populateDisplay(numNine);
});
numZero.addEventListener("click", () => {
    populateDisplay(numZero);
});
clear.addEventListener("click", () => {
    clearDisplay();
    history.textContent =  "";
});

plus.addEventListener("click", () => {
    populateDisplay(plus);
});

minus.addEventListener("click", () => {
    populateDisplay(minus);
});

times.addEventListener("click", () => {
    populateDisplay(times);
});

divideSign.addEventListener("click", () => {
    populateDisplay(divideSign);
});

equals.addEventListener("click", () => {
    populateDisplay(equals);
});


