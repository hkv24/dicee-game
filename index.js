alert("Refresh Me!");
var a, b;
a = Math.floor(Math.random() * 6);
b = Math.floor(Math.random() * 6);
a = a  + 1; // Bcz. Math.floor -> [0,5] and +1 will give [1,6].
b = b + 1;

if(a===1){
  document.querySelector(".img1").src = "images/dice1.png";
}
else if(a===2) {
  document.querySelector(".img1").src ="images/dice2.png";
}
else if(a===3) {
  document.querySelector(".img1").src ="images/dice3.png";
}
else if(a===4) {
  document.querySelector(".img1").src ="images/dice4.png";
}
else if(a===5) {
  document.querySelector(".img1").src ="images/dice5.png";
}
else if(a===6) {
  document.querySelector(".img1").src ="images/dice6.png";
}

if(b===1){
  document.querySelector(".img2").src = "images/dice1.png";
}
else if(b===2) {
  document.querySelector(".img2").src ="images/dice2.png";
}
else if(b===3) {
  document.querySelector(".img2").src ="images/dice3.png";
}
else if(b===4) {
  document.querySelector(".img2").src ="images/dice4.png";
}
else if(b===5) {
  document.querySelector(".img2").src ="images/dice5.png";
}
else if(b===6) {
  document.querySelector(".img2").src ="images/dice6.png";
}


if(a>b) {
  document.querySelector("h1").innerHTML = "🏁 Player 1 Wins ";
}
else if(a===b) {
  document.querySelector("h1").innerHTML = "Draw! ";
}
else {
  document.querySelector("h1").innerHTML = "Player 2 wins 🏁 ";
}
