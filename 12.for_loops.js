/*
for loop in js
Syntax(when the condition is broken, the for loop will be stopped)
for(variable_initialization, condition, increment/decrement){
    action
} 
*/
//Reverse Way
console.log("Printing values from 10-1");
for(var i=10; i>0; i--){
    console.log(i)
}
console.log("Printing values from 0-10");
for(var i=0; i<=10; i++){
    console.log(i)
}
//Reverse Way
console.log("Printing the even numbers from 1-10")
for(var i=10; i>=0; i-=2){
    console.log(i)
}
console.log("Printing the odd numbers from 1-10")
for(var i=1; i<=10; i+=2){
    console.log(i)
}