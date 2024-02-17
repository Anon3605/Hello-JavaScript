var string1="Hello World";
//all the characters including the spaces are considered as strings if they are under quotation
//Strings indexing starts from 0 to strName.length-1
console.log(string1);
console.log("The Length of string1 is",string1.length);
console.log("The 0th index of string1 is",string1[0]);
console.log("You can't change the index value in a string which is why this is called immutable");

const firstname="arafat";
const lastname="sarkar";
const names=firstname+" "+lastname;
console.log("The given name is",names,"now here is a how we can make the name using toUpperCase and toLowerCase methods-->");
//to make upper case a character we use toUpperCase() and to lower case a character we use toLowerCase()
var modifiedName="";
for(var i=0; i<names.length; i++){
    if(i==0 || names[i-1]==" "){
        modifiedName+=names[i].toUpperCase();
    }
    else{
        modifiedName+=names[i].toLowerCase();
    }
}
console.log(modifiedName);

console.log("Now all these commands will return a boolean values")
console.log("To know if there are any character in the string we use includes(parameter)")
console.log("To know the index of  that character in the string we use indexOf(parameter)")
console.log("To know if the string start with the characters, we use startswith(parameter)")
console.log("To know if the string ends with the characters, we use endswith(parameter)")

console.log("Character a in the string? ",names.includes('a'));
console.log("Character x in the string? ",names.includes('x'));
console.log("Index of character a in the names",names.indexOf('a'));
console.log("Index of character x in the names",names.indexOf('x'));
console.log("Given Character doesn't exists in the string or -1");
console.log("The string start with the character a",names.startsWith("a"));
console.log("The string start with the character x",names.startsWith("x"));
console.log("The string ends with the character r",names.endsWith("r"));
console.log("The string ends with the character x",names.endsWith("x"));

//slicing a string 
console.log("Slicing the first part or the string modifiedName");
var midpoint=names.indexOf(" ");
midpoint=modifiedName.slice(midpoint+1);
console.log("Modified name is",modifiedName);
console.log("After slicing midpoint is",midpoint);