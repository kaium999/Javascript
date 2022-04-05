var arrayOne=[10,5,20,30,40,3,7,8];

/*const displayTwo=arrayOne.filter(function (x){
	return x>10;
})

document.write(displayTwo);*/



const displayTwo=arrayOne.filter((x)=>{
	return x>10;
})
document.write(displayTwo);