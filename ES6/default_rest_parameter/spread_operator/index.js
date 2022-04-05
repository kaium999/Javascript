function addNumber(x,y,z){
	return x+y+z;
}

let number=[1,2,3];

//document.write(addNumber(number[0] , number[1], number[2] ));/*General Rules*/

document.write(addNumber(...number));/* This time used spread Operator */

document.write("<br>");

/* Difference Between Rest Parameter And Spread Operator

	=>We can use Spread operator Anywhere but Rest Parameter use Only Last Position or Last Parameter
	=>We can not use rest Parameter middle position or first position in Parameter 

*/

/* How to Push one array to another array use by Spread Opearator*/

let Array_one=[1,2,3,4,5];
let Array_two=[5,6, ...Array_one];

document.write(`Here used spread operator in this array ${Array_two}`);



