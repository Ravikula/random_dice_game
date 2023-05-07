var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);

var dice1Img="images/dice"+randomNumber1+".png";
var dice2Img="images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",dice1Img);
document.querySelector(".img2").setAttribute("src",dice2Img);

if (randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="Player 1 Wins!";
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").textContent="Player 2 Wins!";
}
else if (randomNumber1===randomNumber2){
    document.querySelector("h1").textContent="It's a Tie!";
}