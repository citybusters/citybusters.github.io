var main= document.querySelector(".mainimg");
var small= document.querySelector(".small");

for (var i=1;i<5;i++){
var smallimg= document.createElement("img");
smallimg.setAttribute("src", "images/index"+i+".jpeg");
small.appendChild(smallimg);
smallimg.onclick= function(e){
var newatt=e.target.getAttribute("src");
mainsrc(newatt);
}
}

function mainsrc(a){
main.setAttribute("src",a);
}


var btn= document.querySelector("button");
var shade= document.querySelector(".shade");

btn.onmouseover=function(){
var d=btn.getAttribute("class");
if (d==="dark"){
btn.textContent="Lighten";
btn.setAttribute("class","light")
shade.style.backgroundColor="rgba(0,0,0,0.5)";
}
else if (d==="light"){
btn.textContent="Darken";
btn.setAttribute("class","dark")
shade.style.backgroundColor="rgba(0,0,0,0)";
}
}
