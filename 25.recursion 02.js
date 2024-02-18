function fibonacci(n){
    a=0;b=1;
    if(n==0){
        return;
    }
    fibonacci(n-1);
    //first value is always 0
    if(n==1){
        console.log(n,"th Fibonacci number is",a);
    }
    //second value is always 1
    else if(n==2){
        console.log(n,"th Fibonacci number is",b);
    }
    else{
        fibValue=a+b;
        a=b;
        b=fibValue;
        console.log(n,"th Fibonacci number is",fibValue);
    }
}
fibonacci(10);

// Here is the modified one 
/*
function fibonacci(n){
    a=0;b=1;
    if(n==2){
        console.log(n-1,"th Fibonacci number is",a);
        console.log(n,"th Fibonacci number is",b);
        return;
    }
    fibonacci(n-1);
    fibValue=a+b;
    a=b;
    b=fibValue;
    console.log(n,"th Fibonacci number is",fibValue);
}
fibonacci(10);
*/