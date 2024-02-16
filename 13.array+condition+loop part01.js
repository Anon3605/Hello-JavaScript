// Printing all elements on an array 
var numbers=[12, 15, 16, 19, 22, 29, 36, 64, 89, 99, 420];
console.log("Printing all elements on an array using for loop")
for(i=0; i<numbers.length; i++){
    console.log("Number",i+1,"element is",numbers[i])
}

console.log("Printing all elements on an array using while loop")
i=0
while(i<numbers.length){
    console.log("Number",i+1,"element is",numbers[i]);
    i++;
}