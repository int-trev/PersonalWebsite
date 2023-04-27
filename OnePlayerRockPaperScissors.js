const P1ChoiceText = document.querySelector("#P1Choice");
const P2ChoiceText = document.querySelector("#P2Choice");
const P1WinCount = document.querySelector("#P1WinCount");
const P2WinCount = document.querySelector("#P2WinCount");
const resultText = document.querySelector("#ResultText");

var P1Choice = null;
var P2Choice = null;
var P1WinCounter = 0;
var P2WinCounter = 0;

function MakeChoice(choice)
{
    //adding an if in case someone changes the HTML code.
    if(choice != 'Rock' && choice != 'Scissors' && choice != 'Paper')
        return;
    if(P1Choice == null)
    {
        P1Choice = choice;
        P1ChoiceText.innerHTML = "Player 1 Choice: " + P1Choice;
        ComputerSelection();
        console.log(choice);
    }
}

function ComputerSelection()
{
    var ComputerIntegerSelection = Math.floor(Math.random * 3);
    MapSelection(ComputerIntegerSelection);
}

function StartGame()
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

function MapSelection(selection)
{
    if(selection == 0)
    {
        P2Choice = "Rock";
    }
    else if(selection == 1)
    {
        P2Choice = "Paper";
    }
    else
    {
        P2Choice = "Scissors";
    }
    P2ChoiceText.innerHTML = "Player 2 Choice: " + P2Choice;
    StartGame();
}




