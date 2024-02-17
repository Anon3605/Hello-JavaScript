// Object is a variable that can store multiple values
//If you are a python programmer than object in js is the dictionary in python
//If you are a c++ programmer than object is a vector which individual data is map (STL documentations)

/*
In object, you can store like key and value pairs. It is simply a list, where you can edit the index
as like the first value index being 0, you can give the index as "name" and store a value in it
keys can also called as properties
syntax
var object_name={
    key1:value1,
    key2:value2,
    key3:value3,
    key4:value4,
    key5:value5,
        ...
    key_x:value_x,
};
*/

var person01={name: "Ahmed", age: 28, work:"Employee", body_type: "Thin", marital_status:"Unmarried"};
var my_laptop={
    name:"Aspire V",
    brand:"Acer",
    ram:"8GB",
    storage:"512GB",
    processor:"Core i3 5300K",
    usb: 3,
    purpose: "coding",
    buy: "second hand",
    price: 15000
};

//printing the objects
console.log(person01);
console.log(my_laptop);

// to print a value of a key from an object
// way01
var value01=person01.marital_status;
var value02=my_laptop.processor;
console.log("I am",value01,"with a brain of",value02);
// way02
value01=person01['name'];
value02=my_laptop['name'];
console.log(value01,"uses an",value02,"laptop");
value01=Object.keys(person01);

// To get all the keys from an object in a list 
var properties01=Object.keys(person01);
var properties02=Object.keys(my_laptop);
console.log(properties01);
console.log(properties02);

// To change a value of a key in an object
var value03=my_laptop.purpose;
person01.marital_status="married";
my_laptop.purpose="job";
value01=person01.marital_status;
value02=my_laptop.purpose;
console.log("After getting",value01,"his personal",value03,"computer changed into",value02,"purpose");


//Learn to use loops to go further
var randomObject ={
    greet:"hi",
    sorrow:"sad",
    ear:"hear",
    nose:"smell",
    eye:"see",
    leg:"walk",
    mouth:"say",
    furious:"angry"
};

const keyOfRandomObject=Object.keys(randomObject);
console.log("Every keys are",keyOfRandomObject)
console.log("Here are the values of every single keys")
for(var i=0; i<keyOfRandomObject.length; i++){
    console.log(i+1,randomObject[keyOfRandomObject[i]]);
}