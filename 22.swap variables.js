let number1=15;
let number2=10;
console.log("To swap two variables there are two methods");
console.log("Before swap, number1=",number1,"number2=",number2);

// method02
console.log("Method 01 (temp variable)");
var temp=number1;
number1=number2;
number2=temp;
console.log("After swap, number1=",number1,"number2=",number2);

console.log("Before swap, number1=",number1,"number2=",number2);
number1=15;
number2=10;
// method2
console.log("Method 02 (Destructuring)");
[number1,number2]=[number2,number1];
console.log("After swap, number1=",number1,"number2=",number2);