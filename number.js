// to generate random no.

function rndnum(){
var rannum= Math.floor(Math.random()*101);
return rannum;
}
var rnum=rndnum();
// intializing values
var usertry=document.querySelector("input");
//console.log(userguess);
var submit=document.querySelector("button");
var result=document.querySelector(".result");
var lowhi=document.querySelector(".lowhi");
var lastguess=document.querySelector(".lastguess");

var newgame=document.querySelector(".newgame");
var gamereset=document.querySelector(".gamereset");
// checking starts
var guess=1;
usertry.value="";
usertry.focus();
submit.onclick=function(){
var userguess=usertry.value;
userguess=Number(userguess);
if (guess==1){
lastguess.textContent="Previous Guess: ";
}
lastguess.textContent= lastguess.textContent+userguess+" ";
if (isNaN(userguess)){
result.textContent="It seems you haven't typed a number";
result.style.backgroundColor="red";
usertry.focus();
usertry.value="";
lowhi.textContent="";

}

else {
submit.disabled=false;
if (guess==10){
result.textContent="!!GAME OVER!!";
result.style.backgroundColor="red";
usertry.value="";
usertry.disabled=true;
submit.disabled=true;
newgame.disabled=false;
}

else if (userguess===420){result.textContent="The number is " +rnum;
result.style.backgroundColor="red";
usertry.focus();
usertry.value="";}
else if(userguess<rnum){
result.textContent="Sorry! Wrong Number";
result.style.backgroundColor="red";
lowhi.textContent="Your guess is low";
usertry.value="";
newgame.disabled=true;
lastguess.textContent=lastguess.textContent+usertry.value;
}
else if (userguess>rnum){
result.textContent="Sorry! Wrong Number";
result.style.backgroundColor="red";
lowhi.textContent="Your guess is high";
usertry.value="";
newgame.disabled=true;
}


else if (userguess===rnum){
result.textContent="Congratulations! You got it.";
result.style.backgroundColor="green";
lowhi.textContent="";
usertry.value="";
usertry.disabled=true;
submit.disabled=true;
newgame.disabled=false;
}
guess=guess+1;
usertry.focus();
}
}

//reseting button
newgame.onclick=function(){
guess=1;
result.textContent="";
lastguess.textContent="";
lowhi.textContent="";
result.style.backgroundColor="white";
usertry.disabled=false;
submit.disabled=false;
usertry.focus();
rnum=rndnum();
}
gamereset.onclick=function(){
usertry.value="";
usertry.focus();
}
