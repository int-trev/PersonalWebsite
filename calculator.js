var lastNum = null;
var currentNum = 0;
var total = null;

var func = null;

const inputText = document.querySelector("#inputText");
const functionText = document.querySelector("#functionText");
const lastText = document.querySelector("#lastText");
const resultText = document.querySelector("#resultText");


function clickedNum(num) 
{
    currentNum = currentNum * 10 + num;
    console.log(currentNum);
    inputText.value = currentNum;
}

function clickedClear()
{
    currentNum = 0;
    inputText.value = "0";
}

function clickedClearAll()
{
    lastNum = null;
    lastText.value = "";
    currentNum = 0;
    inputText.value = "";
    func = null;
    functionText.value = "";
    total = null;
    resultText.value = "";

}


function clickedFunction(operator) {
    if(lastNum == null)
    {
        lastNum = currentNum;
        lastText.value = currentNum;
        func = operator;
        functionText.value = operator;
        currentNum = 0;
        inputText.value = "";
    }
    else //if there is a number left over
    {
        lastNum = total;
        lastText.value = total;
        func = operator;
        functionText.value = operator;
        currentNum = 0;
        inputText.value = "";
        resultText.value = "";
    }
}

// Do check here to check for edge cases (overflows and divide by 0)
function clickedEquals() {
    if(func == "+")
    {
        total = lastNum + currentNum;
    }
    else if(func == "-")
    {
        total = lastNum - currentNum;
    }
    else if(func == "*")
    {
        total = lastNum * currentNum;
        console.log("here");
    }
    else
    {
        total = lastNum / currentNum;
    }
    console.log("total is" + total);
    resultText.value = total;
}


