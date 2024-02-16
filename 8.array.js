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