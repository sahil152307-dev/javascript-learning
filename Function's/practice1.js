// Purpose of Function's and their work:
// function greet(){
//     console.log("Hello Jessica!");
// }
// greet();
// To greet someone else we dont need to create a new function instead we use a parameters and arguments:
function greet(name){
    console.log(`Hello ${name}`);
}
greet("Jessica");
greet("Ayush");
greet("Sahil");

// after execution function's return a value which is by default a undefined:
function nothing(){
    console.log("Noting...");
}
let some=nothing();
console.log(some);

// If you need your function to return a specific value, then you will need to use the return statement. Here is an example of using a return statement to return the multiple operation values:
function calculate(num1,num2,num3){
    console.log("Operation's");
    return (num1+num2)*num3;

}
console.log(calculate(3,10,9));

// An anonymous function is a function without a name that can be assigned to a variable like this:
const operation=function(a,b,c){
    return a**b**c;
}
console.log(operation(2,3,2));
// Functions support default parameters, allowing you to set default values for parameters. These default values are used if the function is called without an argument for that parameter. Here's an example:

function wish(name="Sahil"){
    console.log(`All the best ${name}!`);
}
wish();
wish("Ayush");

// In summary, functions allow you to write reusable and organized code. They can take inputs (parameters), perform actions, and return outputs.
// testing:
function mystery(a,b=3){
    return a*b;
}
console.log(mystery(4));