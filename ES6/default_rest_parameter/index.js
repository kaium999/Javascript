/* This is ES6 Default Parameter When User do not gives input in parameter */

function DefalutParameter( text="This is DefalutParameter if User don't give Input.."){
	document.write(`${text}`);
}
DefalutParameter();
document.write("<br>");
DefalutParameter("I Love Java");
document.write("<br>");



/* This is Rest Parameter*/
document.write("This is RestParameter----->>>>>>");
document.write("<br>");

function RestParameter(a,b,...c){
	//var c=a+b;
	document.write(`a=${a},b=${b},c=${c}`);
}

RestParameter(20,10,30,40,50);