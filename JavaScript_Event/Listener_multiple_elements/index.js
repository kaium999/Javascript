var one=document.querySelectorAll("button")[0];
one.addEventListener("click",functionOne);
function functionOne () {
	document.querySelector("p").innerHTML="You Clicked Button One";
}