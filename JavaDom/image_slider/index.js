var image=["Image/one.jpg","Image/two.jpg","Image/three.jpg"];
var picture=document.querySelector("img");



count=0;
function next(){
	count++;
	if(count>=image.length){
		count=0;
		picture.src=image[count];

	}else{
	picture.src=image[count];
}
}
function privious(){

		count--;
	if(count<0){
		count=image.length-1;
		picture.src=image[count];

	}else{
	picture.src=image[count];
}
	// body...
}

