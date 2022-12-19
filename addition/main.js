const input1 = document.createElement("input");
input1.setAttribute("className","addition");
input1.setAttribute("type","text");
input1.setAttribute("id","input1");
input1.setAttribute("placeholder","enter the number");
document.body.appendChild(input1);
document.write("<br><br>");

const btn = document.createElement("button")
document.body.appendChild(btn);
btn.type="button";
btn.innerHTML="click";
btn.onclick=function(){

var n = parseInt(document.getElementById("input1").value);
var add = 0;
while(n!=0){
	let digit=n%10;
	add= (add*10)+digit;
	n = parseInt(n/10);
}
temp=0;
while(add!=0)
{
	rem=add%10;
	temp+=rem;
	add = parseInt(add/10)
	if(add!=0)
	{
		document.write(rem+"+");
	}
	else
	{
		document.write(rem);
	}
}
document.write("="+temp);
}