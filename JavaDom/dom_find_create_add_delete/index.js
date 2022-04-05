var link=document.getElementsByTagName("a")[0];

link.innerHTML="Find Out";

/*At first Select Element And Then You can Change Css Style ->>>>>>>>>>>>>*/


link.style.textDecoration="none";

link.style.Color="green";
link.style.fontSize="1.5rem";

link.href="www.google.com";



/* HTML Tag Element Add*/

var headingThree=document.createElement("h1");
var text=document.createTextNode("This is heading Three");
headingThree.appendChild(text);

var div_select=document.getElementById("you_div");
div_select.appendChild(headingThree);

