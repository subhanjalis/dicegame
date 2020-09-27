var player1 = prompt("Enter your name player 1.");
var player2 = prompt("Enter your name player 2.");
document.querySelectorAll("p")[0].innerHTML= player1;
document.querySelectorAll("p")[1].innerHTML= player2;
var randomNumber1 = Math.floor(Math.random()*6 +1);
var image1 = "images/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.floor(Math.random()*6 +1);
var image2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img1").setAttribute("src",image1);
document.querySelector(".img2").setAttribute("src",image2);
if(randomNumber1 > randomNumber2)
document.querySelector("h1").innerHTML= player1 +" won ! 🥳";
if(randomNumber1 === randomNumber2)
document.querySelector("h1").innerHTML="Its a draw ! 😇";
if(randomNumber1 < randomNumber2)
document.querySelector("h1").innerHTML=player2 + " won ! 🥳";
