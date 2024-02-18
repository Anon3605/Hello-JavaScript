/*
syntax(This is high level memory consuming method which is only fancy way to work like loop)
function function_name(parameter){
    if(breaking_condition){
        return something; (to traverse backward)
    }
    operations(optional);
    return function_name(parameter_increment/decrement);
}
*/

function recSum(a){
    if(a==0){
        return 0
    }
   return  recSum(a-1)+a;

}
console.log(recSum(10));

/*
Recursion is a feature used in creating a function that
 keeps calling itself but with a smaller input every 
 consecutive time until the code's desired result 
 from the start is achieved
*/
//This recursion is summing all the numbers from 1 to 10;
//summation (1+2+3+4+5+6+7+8+9+10)

