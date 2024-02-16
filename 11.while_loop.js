/*
While loop in js
Syntax(when the condition is broken, the while loop will be stopped)
while(condition){
    action_code;
    increment OR decrement
}
1.Loop variable
2.While condition
3.Loop body
4.Increment/Decrement of the condition to break
5.If the 4th condition is not fulfilled then the loop will run for infinite
*/
//Reverse Way
console.log("Printing values from 10-1");
var iteration=10;
while(iteration!=0){
    console.log(iteration);
    iteration--;
}
console.log("Printing values from 0-10");
while(iteration<=10){
    console.log(iteration);
    iteration++;
}
iteration--;
//Reverse Way
console.log("Printing the even numbers from 1-10")
while(iteration>0){
    console.log(iteration);
    iteration-=2;
}
iteration++;
console.log("Printing the odd numbers from 1-10")
while(iteration<10){
    console.log(iteration);
    iteration+=2;
}

