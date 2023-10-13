
let equalBtn = document.getElementById("equal");
let dotBtn = document.getElementById("dot");
let percentBtn = document.getElementById("percent");
let numberZeroBtn = document.getElementById("numberZero");
let numberThreeBtn =document.getElementById("numberThree");
let numberTwoBtn =document.getElementById("numberTwo");
let numberOneBtn =document.getElementById("numberOne");
let plusBtn =document.getElementById("plus");
let numberSixBtn =document.getElementById("numberSix");
let numberFiveBtn =document.getElementById("numberFive");
let numberFourBtn =document.getElementById("numberFour");
let minusBtn =document.getElementById("minus");
let numberNineBtn =document.getElementById("numberNine");
let numberEightBtn =document.getElementById("numberEight");
let numberSevenBtn =document.getElementById("numberSeven");
let backspaceBtn =document.getElementById("backspace");
let multiplyBtn =document.getElementById("multiply");
let divideBtn =document.getElementById("divide");
let clearBtn =document.getElementById("clear");
let display =document.getElementById("display");
let lastOperator = false;
 
numberZeroBtn.addEventListener("click",function(){calcDisplay(this)});
numberOneBtn.addEventListener("click",function(){calcDisplay(this)});
numberTwoBtn.addEventListener("click",function(){calcDisplay(this)});
numberThreeBtn.addEventListener("click",function(){calcDisplay(this)});
numberFourBtn.addEventListener("click",function(){calcDisplay(this)});
numberFiveBtn.addEventListener("click",function(){calcDisplay(this)});
numberSixBtn.addEventListener("click",function(){calcDisplay(this)});
numberSevenBtn.addEventListener("click",function(){calcDisplay(this)});
numberEightBtn.addEventListener("click",function(){calcDisplay(this)});
numberNineBtn.addEventListener("click",function(){calcDisplay(this)});
plusBtn.addEventListener("click", function(){calcOperator(this)});
multiplyBtn.addEventListener("click", function(){calcOperator(this)});
divideBtn.addEventListener("click", function(){calcOperator(this)});
minusBtn.addEventListener("click", function(){calcOperator(this)});
backspaceBtn.addEventListener("click", function(){displaylength()});



equalBtn.onclick = function(){
    display.innerText = eval(display.innerText);
}

clearBtn.onclick = function(){
    let btnValue = this.value;
    display.innerText= "";
}

dotBtn.onclick =function(){
    let btnValue=this.value;
    display.innerText += btnValue;
}

/*
backspaceBtn.onclick =function(){
    displaylength();
}
*/

function displaylength(){
    let displayText = display.innerText;
    display.innerText = displayText.slice(0,-1);
}


function calcDisplay(element){
    let btnValue = element.value;
    display.innerText += btnValue;
    console.dir(btnValue)
}

function calcOperator(element){
    if( !lastOperator ){
        lastOperator = true;
        let btnValue = element.value;
        display.innerText += btnValue;
    }
}
 
document.onkeyup = function (e){
    switch(e.key){
        case "0":
            numberZeroBtn.click();
            break;
        case "1":
            numberOneBtn.click();
            break;
        case "2":
            numberTwoBtn.click();
            break;
        case "3":
            numberThreeBtn.click();
            break;
        case "4":
            numberFourBtn.click();
            break;
        case "5":
            numberFiveBtn.click();
            break;
        case "6":
            numberSixBtn.click();
            break;
        case "7":
            numberSevenBtn.click();
            break; 
        case "8":
            numberEightBtn.click();
            break;
        case "9":
            numberNineBtn.click();
            break;  
        case "Enter":
            equalBtn.click();
            break;
        case "+":
            plusBtn.click();
            break;
        case "-":
            minusBtn.click();
            break;
        case "/":
            divideBtn.click();
            break;
        case "*":
            multiplyBtn.click();
            break;
        case "%":
            percentBtn.click();
            break;
        case "Backspace":
        case "Delete":
            backspaceBtn.click();
            break;
        case ".":
            dotBtn.click();
            break;
        case "Escape":
            clearBtn.click();
            break;
    }




    /*if (e.key == "1")
    numberOneBtn.click();
    if (e.key == "2")
    numberTwoBtn.click();
    if (e.key == "3")
    numberThreeBtn.click();
    if (e.key == "4")
    numberFourBtn.click();
    if (e.key == "5")
    numberFiveBtn.click();
    if (e.key == "6")
    numberSixBtn.click();
    if (e.key == "7")
    numberSevenBtn.click();
    if (e.key == "8")
    numberEightBtn.click();
    if (e.key == "9")
    numberNineBtn.click();
    if (e.key == "0")
    numberZeroBtn.click();
    if (e.key == "+")
    plusBtn.click();
    if (e.key == "-")
    minusBtn.click();
    if (e.key == "*")
    multiplyBtn.click();
    if (e.key == "/")
    divideBtn.click();
    if (e.key == "Enter")
    equalBtn.click();
    if (e.key == "Delete")
    backspaceBtn.click();
*/
}



/*if( !lastOperator ){
        lastOperator = true;
        let btnValue = this.value;
        display.innerText += btnValue;
        */  