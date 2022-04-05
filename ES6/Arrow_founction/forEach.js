/*var array1=[20,30,40,50];


for(var i=0;i<array1.length;i++){
	document.write(array1[i]);
}
*/


var numbers=[20,30,40,50]
var SqureArray = [];
numbers.forEach(function (x){
	document.write(x);
});

numbers.forEach(function(x){
	SqureArray.push(x*x);
})

document.write(SqureArray);
console.log(SqureArray);
