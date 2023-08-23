var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDice1="dice"+randomNumber1+".png";
var varimage1="img/"+randomDice1;
var imga1= document.querySelectorAll("img")[0];
imga1.setAttribute("src",varimage1);


var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDice2="dice"+randomNumber2+".png";
var varimage2="img/"+randomDice2;
var imga2=document.querySelectorAll("img")[1];
imga2.setAttribute("src",varimage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 wins";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player 2 wins";
}else {
    document.querySelector("h1").innerHTML="Draw";
}
