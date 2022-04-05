document.querySelector("button").addEventListener("click",MyFunction);

function MyFunction(){
	alert("Hello");
}

var myHead=document.querySelector("h1");
myHead.addEventListener("mouseover",HeadFunction);

function HeadFunction(){
	myHead.classList.add("Heading_style");
}

myHead.addEventListener("mouseout",HeadFunctionOut);

function HeadFunctionOut(){
	myHead.classList.remove("Heading_style");
}