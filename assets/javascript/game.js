   
//Global variables
var randomNumber = null;
var wins = 0;
var losses = 0;
var totalScore = 0;

var redCrystal = 0;
var blueCrystal = 0;
var yellowCrystal = 0;
var greenCrystal = 0;


//Generate random number with maximun and minimum values)
getRandomInt = function (max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
randomNumber = getRandomInt(120, 19);
console.log(randomNumber);

//Generate random number for the Crystals
redCrystal = getRandomInt (12, 1);
console.log("Red Crystal", redCrystal);

blueCrystal = getRandomInt (12, 1);
console.log("Blue Crystal", blueCrystal);

yellowCrystal = getRandomInt (12, 1);
console.log("Yellow Crystal", yellowCrystal);

greenCrystal = getRandomInt (12, 1);
console.log("Green Crystal", greenCrystal);

//Click functions



//Game functions

//New Game
$(document).ready(function() {

function newGame() {
    totalScore = 0;
    $("#randomNumber").text(randomNumber);
    $("#totalScore").text(totalScore);
    $("#redCrystal").attr("data-crystalvalue", redCrystal);
    $("#blueCrystal").attr("data-crystalvalue", blueCrystal);
    $("#yellowCrystal").attr("data-crystalvalue", yellowCrystal);
    $("#greenCrystal").attr("data-crystalvalue", greenCrystal);
    $("#wins").text(wins);
    $("#losses").text(losses);
    console.log(redCrystal, blueCrystal, yellowCrystal, greenCrystal);

}

//Win the game - alert You win and
function winner(){
    alert("You win!");
    $("#winOrLose").text("You win!");
    wins++;
    $("#wins").text(wins);
    resetGame();
}

//Lose the game - alert You lose - Try Again
function loser(){
    alert("You Lose - Try Again");
    $("#winOrLose").text(losses);
    losses++;
    $("#losses").text(losses);
    resetGame();
}

//Reset the game
function resetGame() {
    $("#randomNumber").html(randomNumber);
    $("#winOrLose").html("<h2>Wins: " + wins + "</h2>" + "<h2>Losses: " + losses +"</h2>");
    $("#totalScore").html(totalScore);
    newGame();
}

newGame();

function crystalClick () {
    totalScore += parseInt($(this).attr("data-crystalvalue"));
    $("#totalScore").html(totalScore);
    if (totalScore === randomNumber) {
        winner();
        
    }
    else if (totalScore > randomNumber) {
        loser();
    };

};

$(document).on("click", ".crystalimg", crystalClick);

// $(".crystalimg").on("click"), function (){
//     if (totalScore >= randomNumber){
//         return;
//     }
//     var crystalValue = $(this).attr("data-crystalvalue");
//     crystalValue = parseInt(crystalValue);
//     totalScore += crystalValue;
//     $("#totalScore").text(totalScore);

//     if (totalScore === randomNumber) {
//         winner();
//     } else if (totalScore > randomNumber) {
//         loser();
//     }
// }
});
