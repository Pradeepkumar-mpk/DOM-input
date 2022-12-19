const container = document.createElement("div");
document.body.append(container);
container.style.backgroundColor="orange";
container.style.display="flex";
container.style.justifyContent="space-evenly";


const input1 = document.createElement("input");
input1.setAttribute("class","addition");
input1.setAttribute("type","text");
input1.setAttribute("id","input1");
input1.setAttribute("placeholder","enter the number");
input1.style.backgroundColor="lightblue"
input1.style.border="5px solid teal"
input1.style.borderRadius="70px";
input1.style.padding="10px"
container.appendChild(input1);
document.write("<br><br>");

const btn = document.createElement("button")
container.appendChild(btn);
btn.type="button";
btn.innerHTML="click";
btn.style.backgroundColor="lightseagreen";
btn.style.border="3px solid lightblue";
btn.style.padding="5px";
btn.style.borderRadius="60px"
btn.onclick=function(){

var n = parseInt(document.getElementById("input1").value);
var i = n;
var sum = 0;
while (i>0){
	var digit= i%10;
	sum=sum+digit**3;
	i=parseInt(i/10);
}
/*do{
	var digit= i%10;
	sum=sum+digit**3;
	i=parseInt(i/10);
}
while(i>0);*/

/*for (i=n;i>0;i++){
	var digit= i%10;
	sum=sum+digit**3;
	i=parseInt(i/10);
}*/

if (sum===n){
	document.write("it is a armstrong number");
}
else{
	document.write("it is not a armstrong number");
}
}