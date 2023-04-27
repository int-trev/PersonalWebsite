const P1ChoiceText = document.querySelector("#P1Choice");
const P2ChoiceText = document.querySelector("#P2Choice");
const P1WinCount = document.querySelector("#P1WinCount");
const P2WinCount = document.querySelector("#P2WinCount");
const resultText = document.querySelector("#ResultText");

var P1Choice = null;
var P2Choice = null;
var P1WinCounter = 0;
var P2WinCounter = 0;

//using this to add ability to change selection
document.addEventListener("keydown", (event) => {
    if((event.key == "Q" || event.key == "q") && P1Choice == null)
    {
        console.log("hi");
        P1Choice = "Rock";
        P1ChoiceText.innerHTML = "Selected";
        StartGame();
    }
    else if((event.key == "W" || event.key == "w") && P1Choice == null)
    {
        P1Choice = "Paper";
        P1ChoiceText.innerHTML = "Selected";
        StartGame();
    }
    else if((event.key == "E" || event.key == "e")&& P1Choice == null)
    {
        P1Choice = "Scissors";
        P1ChoiceText.innerHTML = "Selected";
        StartGame();
    }
    else if((event.key == "B" || event.key == "b") && P2Choice == null)
    {
        P2Choice = "Rock";
        P2ChoiceText.innerHTML = "Selected";
        StartGame();
    }
    else if((event.key == "N" || event.key == "n") && P2Choice == null)
    {
        P2Choice = "Paper";
        P2ChoiceText.innerHTML = "Selected";
        StartGame();
    }
    else if((event.key == "M" || event.key == "m") && P2Choice == null)
    {
        P2Choice = "Scissors";
        P2ChoiceText.innerHTML = "Selected";
        StartGame();
    }
    else if(event.key == " ")
    {
        ResetGame();
    }
    else
    {
        console.log(event);
    }
})


function StartGame()
{
    if(P1Choice != null && P2Choice != null)
    {
        
        var winner = ValidateGame();
        if(winner == "P1")
        {
            resultText.innerHTML = "Player 1 Wins!";
            P1WinCounter++;
            P1WinCount.innerHTML = "Player 1 win count: " + P1WinCounter;
        }
        else if(winner == "P2")
        {
            resultText.innerHTML = "Player 2 Wins!";
            P2WinCounter++;
            P2WinCount.innerHTML = "Player 2 win count: " + P2WinCounter;
        }
        else
        {
            resultText.innerHTML = "It was a tie. :(";
        }
    }
}

//resets the choices and the html text
function ResetGame()
{
    P1Choice = null;
    P2Choice = null;
    P1ChoiceText.innerHTML = "Player 1 Choice: Not chosen yet"
    P2ChoiceText.innerHTML = "Player 2 Choice: Not chosen yet"
    resultText.innerHTML = "Game in progress"
}

//validates the different states of what can happen
function ValidateGame()
{
    ShowSelections();
    if(P1Choice == P2Choice)
    {
        return "Tie"
    }
    else if((P1Choice == "Rock" && P2Choice == "Scissors") 
    || (P1Choice == "Scissors" && P2Choice == "Paper") 
    || (P1Choice == "Paper" && P2Choice == "Rock"))
    {
        return "P1"
    }
    else
    {
        return "P2"
    }
}

//makes the html show the responses instead of just that they selected
function ShowSelections()
{
    P1ChoiceText.innerHTML = "Player 1 Choice: " + P1Choice;
    P2ChoiceText.innerHTML = "Player 2 Choice: " + P2Choice;
}





