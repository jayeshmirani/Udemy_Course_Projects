var num1= Math.floor( (Math.random()*6) +1 ), num2= Math.floor( (Math.random()*6) +1 );


document.querySelector("img.img1").setAttribute("src","images/dice"+String(num1)+".png");
document.querySelector("img.img2").setAttribute("src","images/dice"+String(num2)+".png");

if(num1>num2){
  document.querySelector("h1").innerHTML= "Player 1 wins";
}
else if(num1<num2){
  document.querySelector("h1").innerHTML= "Player 2 wins";
}
else {
    document.querySelector("h1").innerHTML= "Its a Draw!";
}
