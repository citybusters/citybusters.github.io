var usertry=document.querySelector("input");
var submit=document.querySelector("button");
var result=document.querySelector(".result");
submit.onclick=function(){
var a =Number(usertry.value);
var b=a;

var b=parseInt(a).toString(2);
result.textContent="The binary code for "+a+" is "+b;
//document.write("The binary code for "+a+" is "+b);
}