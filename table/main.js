function fun (){
	var n = document.getElementById("name1").value;
	var a = document.getElementById("name2").value;
	let i = 1;
	do{
	   document.write(i+"*"+n+"="+i*n+"<br>");	
	   i++;
	}
	while (i<=a);
}
