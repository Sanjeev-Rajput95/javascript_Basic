//console.log("Print hello world");
//let a = 23;
//let b = 43;
//let add = a + b;
//console.log(add);

const prompt = require("prompt-sync")();
let num = prompt("Enter the number") ;
if(num%2==0) {
    console.log("isEven");
} 
else {
    console.log("notEven");
}