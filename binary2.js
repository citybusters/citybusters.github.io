var a =Number(prompt("Enter the number to be converted :"));
var b=0;

while(a>0){
b=a%2;
console.log("ream"+b);
a= parseInt(a/2);
console.log("div"+a);
var s=s+b;
console.log("abc"+s);
}
alert(s);

while (s>0)
{
var n = s % 10;
var r = r * 10 + n ;
s = parseInt(s/10);
}
alert("here is your binary code "+r);
