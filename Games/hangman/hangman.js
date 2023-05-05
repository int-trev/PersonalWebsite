const P1ChoiceText = document.querySelector("#P1Choice");
const P2ChoiceText = document.querySelector("#P2Choice");
const P1WinCount = document.querySelector("#P1WinCount");
const P2WinCount = document.querySelector("#P2WinCount");
const resultText = document.querySelector("#ResultText");


var incorrectGuesses = 0;
var guessedWords = Array(26).fill(0);
var wordBank;

let options = {
    method: "GET",
    headers: {
        'Content-Type':"application/json;charset=utf-8"
    }
}

console.log("HI");
OnLoad();


function OnLoad()
{
    //load all the words from the data into an array
    fetch('https://int-trev.github.io/PersonalWebsite/Data/WordBank.json', options)
    .then((response) => response.json())
    .then((json) => function() {
        wordBank=json.words;
        console.log("hi");
        console.log(wordBank);
    })
}

function Start()
{
    //pick a word at random
    //reset the counter of wrong guesses to 0
    //reset the array of guesses answers to all 0s (array of length 26)
}

function KeyPressed(key)
{
    //take the key as an int value, so take its ascii - 97
    //test that in the array, if already in dont do anything
    //if not in, check if it is in the word
    //if in the word, mark those letters and show them in the frontend
    //if not in the word, add to incorrect guess
    //add to the array
    //call Validate
}

function Validate()
{
    //if wrong guesses = 5, show word and say they lost
    //if word is fully discovered, show word and say they won
}