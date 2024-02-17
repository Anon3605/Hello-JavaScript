//Run this code in a browser console to see the full functionality
//Open a browser--> Right click--> go to inspect--> go to console

var x=parseInt(prompt("Enter a number "));
var y=parseInt(prompt("Enter another number "));
alert("Here are the signs that you can use for this program, +, -, *, /, %");
var z= prompt("Enter the Sign ");

console.log(typeof(x));

function adder(x,y){
    return x+y;
}
function adder(x,y){
    return x+y;
}
function subber(x,y){
    return x-y;
}
function multer(x,y){
    return x*y;
}
function divver(x,y){
    return x/y;
}
function modder(x,y){
    return x%y;
}

if(z=="+"){
    alert("Your summation is "+adder(x,y))
}
else if(z=="-"){
    alert("Your subtraction is "+subber(x,y))
}
else if(z=="*"){
    alert("Your multiplication is "+multer(x,y))
}
else if(z=="/"){
    alert("Your division is "+divver(x,y))
}
else if(z=="%"){
    alert("Your reminder is "+modder(x,y))
}
else{
    alert("Why testing this program? Dude, just chill!!")
}

/*
In JavaScript, the + operator is used for both addition and 
string concatenation. When the + operator is used between two strings, 
it concatenates them. That's why using + between 
strings and variables works to concatenate them.
*/

//Alert can work with concatanation.