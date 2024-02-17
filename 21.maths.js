const value01=12;
const value02=19;

var difference=value01-value02;
console.log(difference);

//Absolute
console.log("If we need the absolute value we can use Math.abs(value) in JavaScript");
difference=Math.abs(difference);
console.log(difference);

//Round
console.log("To make a value in round figure we use Math.round(value) method in over a variable");
console.log("Floor if bellow .5 and ceil is above or equal .5");
difference = 5.443;
console.log("The value is", difference);
rounded=Math.round(difference);
console.log("The value after rounding is",rounded);

//Ceil
console.log("To ceil a value in we use Math.ceil(value)");
ceiled=Math.ceil(difference);
console.log("The value after ceiling is",ceiled);

//Floor
floored=Math.floor(difference);
console.log("The value after floored is",floored);

//Power
console.log("To power a value over a value we use Math.pow(value_A,value_B)");
powered=Math.pow(value01,value02);
console.log("The value after",value01,"powered over",value02,"is",powered);

// Random 
console.log("To find a random number we use Math.random() method that can be used to generate randoms");
console.log(Math.random());
console.log(Math.random()*100);
console.log(Math.round(Math.random()*100));