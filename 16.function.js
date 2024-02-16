function message(){
    console.log("Here is a message for you, this function is called void function and this function purpose is to give nothing as ReturnType. You may thing this is at least printing a message but this is no value that can be stored and this is why this is a void function")
}

function nonParam(){
    return 1000000;
}

function summation(x,y){
    return x+y;
}
function subtraction(x,y){
    return y-x;
}
function multiplication(a,b){
    return a*b;
}
function division(a,b){
    return a/b;
}

function equation(a,b,c,d,e,f){
    var w=summation(a,f);
    var x=summation(a,f);
    var y=summation(b,e);
    var z=summation(c,d);

    return w+x+y+z;
}


message();
console.log("This is a parameter function",equation(9,10,11,12,14,15));
console.log("This is a no parameter function which only returns",nonParam);
