
const input1 = document.createElement("input");
input1.setAttribute("className","table");
input1.setAttribute("type","text");
input1.setAttribute("id","input1");
input1.setAttribute("placeholder","enter which table");
document.body.appendChild(input1);
document.write("<br><br>");

const input2 = document.createElement("input");
input2.setAttribute("className","limit");
input2.setAttribute("type","text");
input2.setAttribute("id","input2");
input2.setAttribute("placeholder","enter upto limit");
document.body.appendChild(input2);
document.write("<br><br>");

const btn = document.createElement("button")
document.body.appendChild(btn);
btn.type="button";
btn.textContent="table";
btn.onclick=function()


{
	var n = parseInt(document.getElementById("input1").value); 
	var a = parseInt(document.getElementById("input2").value); 
	let i = 1;
	do{
	   document.write(i+"*"+n+"="+i*n+"<br>");	
	   i++;
	}
	while (i<=a);
}
