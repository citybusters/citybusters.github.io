function randomnum() {
  return Math.floor(Math.random()*(256));
}

function change() {
  var rndCol = "rgb(" + randomnum() + "," + randomnum() + "," + randomnum() + ")";
  return rndCol;
}

for(var x=1; x<=100 ; x++){
var divi= document.createElement("div");
document.body.appendChild(divi);
}





var divs= document.querySelectorAll("div");
for(var i=0;i<divs.length;i++){
divs[i].onmouseover= function(e){
e.target.style.backgroundColor=change();

}
}


