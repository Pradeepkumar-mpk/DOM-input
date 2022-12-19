const input1 = document.createElement("input");
input1.setAttribute("className","addition");
input1.setAttribute("type","text");
input1.setAttribute("id","input1");
input1.setAttribute("placeholder","enter the number");
input1.style.backgroundColor="yellow";
input1.style.border="5px solid coral"
input1.style.borderRadius="50px"
input1.style.padding="10px"
document.body.appendChild(input1);
document.write("<br><br>");

const btn = document.createElement("button")
document.body.appendChild(btn);
btn.type="button";
btn.innerHTML="click";
btn.style="border-radius:50px"
btn.style.backgroundColor="coral";
btn.onclick=function(){
btn.style.padding="10px"
var n = parseInt(document.getElementById("input1").value);
var factorial = 1;
/*for ( var i=1;i<=n;i++){
	factorial *=i
	console.log(factorial);
}*/

/*let i =1;
while(i<=n){
	console.log(factorial*=i);
	i++
}*/
let i = 1;
do {
	factorial*=i
	document.write(factorial+"<br>");
	i++
}
	
while(i<=n)
}