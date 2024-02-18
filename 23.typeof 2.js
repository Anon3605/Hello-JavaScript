var num1=15;
var num2=15.66;
var str="hello";
var arr=[1,2,3,4,5];
var obj={1:1,2:2,3:3,4:4,5:5};
var bool=true;
function total_sum(array){
    let sum=0;
    for(var i=0;i<array.length; i++){
        sum+=array[i]
    }
    return sum;
}
total=total_sum(arr);

console.log("1.",typeof(num1));
console.log("2.",typeof(num2));
console.log("3.",typeof(str));
console.log("4.",Array.isArray(arr))
console.log("This is used because there always output is object if typeof is used on an array");
console.log("5.",typeof(obj));
console.log("6.",typeof(total_sum));
console.log("7.",typeof(bool));
