var num1=50;
var num2=25;
console.log("Here are two numbers that are",num1,"&",num2);

//using +=
var sum = num1+=num2;
console.log("The summation of those two using shorthand is",sum);
//To make the num1's value initial
num1-=num2;

//using -=
var sub=num1-=num2;
console.log("The subtraction of those two using shorthand is",sub);
//To make the num1's value initial
num1+=num2;

//using *=
var multi=num1*=num2;
console.log("The multiplication of those two using shorthand is",multi);
//To make the num1's value initial
num1/=num2;

//using /=
var div=num1/=num2;
console.log("The multiplication of those two using shorthand is",div);

