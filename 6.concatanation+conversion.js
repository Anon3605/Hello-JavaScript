// Here are some rules in javascript which is interesting and that is,
// as you can add two numbers you can also add,
// 1. Two strings with + sign
// 2. integers and strings with + sign

var number1=5;
var number2=9;

var firstName="Arafat";
var lastName="Sarkar";

//Number+Number
console.log(number1+number2);
//String+String
console.log(firstName+" "+lastName);
//Number+String
console.log(number1+firstName);
//String+Number
console.log(lastName+number2);
//String+float
console.log("Here is a float "+4.999 +" that is concatenated with the sentence ");

//This is the concatanation
console.log("This is used by concatinating"+" "+firstName+" "+lastName);

// To convert a string to Integer number we use "parseInt" keyword
var string2Number="10000"
console.log("Here is a number which is a string",string2Number);
number2String=parseInt(string2Number);
console.log("Here is a number which is an Integer",number2String);


// To convert a string to float number we use "parseFloat" keyword
string2Number="1000.8880"
console.log("Here is a number which is a string",string2Number);
number2String=parseFloat(string2Number);
console.log("Here is a number which is an Integer",number2String);

// To convert a float string to integer number we use "parseFloat" keyword
string2Number="1000.8880"
console.log("Here is a number which is a string",string2Number);
number2String=parseInt(string2Number);
console.log("Here is a number which is an Integer",number2String);