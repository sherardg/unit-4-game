//Global variables
var randomNumber = null;
var wins = 0;
var losses = 0;
var redCrystal = 0;
var blueCrystal = 0;
var yellowCrystal = 0;
var greenCrystal = 0;
var totalScore = 0;
var currentScore = 0;

//Functions

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

//Game Instructions
// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.

//Declaring variable for tallying scores
$('#numberwins').text(wins);
$('#numberlosses').text(losses);

//Click functions
$(document).ready(function() {

$('#three').on ('click', function(){
    currentScore = currentScore + redCrystal;
    console.log("New total score= " + currentScore);
    $('#finalTotal').text(totalScore);
}
})