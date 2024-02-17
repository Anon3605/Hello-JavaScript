// first step : Declaration
// var name_of_array=[] 
// second step : Value Assign
// var name_of_array=[1,2,3,4,5,6,7,8,9]
// third step : ending definition
// var name_of_array=[1,2,3,4,5,6,7,8,9];


var numArr=[1,2,3,4,5,6,7,8,9];
console.log(numArr);
console.log(numArr.length);
//Array indexing starts from 0 to arrName.length-1
console.log("Last value in numArr is",numArr[numArr.length-1]);
// To find a value from a specific index, we use .indexOf(value) method
console.log("Index number of 6 ini numArr is", numArr.indexOf(6));
// To push a value we use .push(value) method and to pop we use .pop() method
numArr.push(1000);
console.log("Last value in numArr after pushing 1000 is",numArr[numArr.length-1]);
var popped=numArr.pop();
console.log("Popped value is",popped);
//Here are a way to change value of an index in an array
numArr[3]=60;
console.log(numArr);

var strArr=["a","e","i","o","u"];
console.log(strArr);
console.log(strArr.length);
//Array indexing starts from 0 to arrName.length-1
console.log("Last value in strArr is",strArr[strArr.length-1]);
// To find a value from a specific index, we use .indexOf(value) method
console.log("Index number of u in strArr is", strArr.indexOf("u"));
// To push a value we use .push(value) method and to pop we use .pop() method
strArr.push("xyz");
console.log("Last value in strArr after pushing 'xyz' is",strArr[strArr.length-1]);
popped=strArr.pop();
console.log("Popped value is",popped);
//Here are a way to change value of an index in an array
strArr[3]="Ô";
console.log(strArr);

var floatArr=[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, .99, .999, .9999];
console.log(floatArr);
console.log(floatArr.length);
//Array indexing starts from 0 to arrName.length-1
console.log("Last value in floatArr is",floatArr[floatArr.length-1]);
// To find a value from a specific index, we use .indexOf(value) method
console.log("Index number of 0.9 in floatArr is", floatArr.indexOf(0.9));
// To push a value we use .push(value) method and to pop we use .pop() method
strArr.push(.111111);
console.log("Last value in numArr after pushing .111111 is",strArr[strArr.length-1]);
var popped=strArr.pop();
console.log("Popped value is",popped);
//Here are a way to change value of an index in an array
floatArr[3]=0.444444;
console.log(floatArr);



//Intermediate Array Functions
//Here are some functions that can be used in array
var nameArr01=["Kehlani McCann","Heath Ballard","Alejandra Holt","Niko Case","Cleo Sullivan","Karson George","Soren McCann","Joyce Oliver","Elora Suarez"];
var nameArr02=["Evan Dennis","Maisie Terrell","Jaxen Richardson","Allison Sullivan","Evan Benson","Collins Valencia","Dax Bridges","Arafat"];

console.log(nameArr01);
console.log(nameArr02);

//To see if an element is inside a list we use includes(parameter) method
//This returns only true or false
console.log("Do Arafat includes in nameArr01 array? :",nameArr01.includes("Arafat"));
console.log("Do Arafat includes in nameArr01 array? :",nameArr02.includes("Arafat"));

//To Concat two arrays we use + which output as strings
let allNameStr=nameArr01+nameArr02;
console.log(allNameStr);

//To make a list by concatinating other lists
var allNameArr=nameArr01.concat(nameArr02); //nameArr01 will not change
console.log(allNameArr);

//To take a portion of an array, we use splice(start_index,end_index)
//end index is excluded
allNameStr=nameArr01.splice(0,5);
console.log(allNameStr);

// to delete elements by indexedDB, we use splice(start_index,end_index)
// deleting the first 5 names in nameArr02 
console.log("Initial Name Array 2:",nameArr02);
var hello=nameArr02.splice(0,5);//stored in hello
console.log("Array, after deleting first 5 elements",nameArr02);

// To add values at the first of an Array, we use unshift
// To remove values from the frist of an Array, we use shift
nameArr02.unshift(hello[4]);
console.log("After shifting last element in nameArr02, we get",nameArr02);
nameArr02.unshift(hello[3]);
console.log("After shifting 4th element in nameArr02, we get",nameArr02);
nameArr02.unshift(hello[2]);
console.log("After shifting 3rd element in nameArr02, we get",nameArr02);
nameArr02.unshift(hello[1]);
console.log("After shifting 2nd element in nameArr02, we get",nameArr02);
nameArr02.unshift(hello[0]);
console.log("After shifting 1st element in nameArr02, we get",nameArr02);

console.log("Now removing first 4 elements from the array");
// loop alert 
for(var i=0; i<4; i++){
    nameArr02.shift();
}
console.log(nameArr02);

