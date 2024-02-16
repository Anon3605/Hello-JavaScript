var onionWeight1 = 5;
var onionWeight2 = 10;

// Addition 
var totalOnionWeight = onionWeight1+onionWeight2;
console.log("Total Weight of onion is ", totalOnionWeight," KG");
console.log("For shorthand we use '+=' operand");


// Multiplication
var onionsInWeight = 15;
var totalOnions = totalOnionWeight * onionsInWeight;
console.log("Number of onions in ", totalOnionWeight," KG is ",totalOnions);
console.log("For shorthand we use '*=' operand");


// Division
var totalCost = 3000;
var pricePerKG = totalCost/totalOnionWeight;
console.log("Price per kg ",pricePerKG," TK");
console.log("For shorthand we use '/=' operand");


// Subtraction
var taxPerKg = 1.5;
var mainOnionPrice =totalCost-(taxPerKg*totalOnionWeight);
console.log("Main Price without taxes ",mainOnionPrice," TK");
console.log("For shorthand we use '-=' operand");

//Modulus
var num1=6;
var num2=4;
reminder=num1%num2;
console.log("This is used by modulus operator and the reminder of",num1,"/",num2,"is",reminder);
console.log("For shorthand we use '%=' operand");

