// Purpose of Function's and their work:
// function greet(){
//     console.log("Hello Jessica!");
// }
// greet();
// To greet someone else we dont need to create a new function instead we use a parameters and arguments:
// function greet(name){
//     console.log(`Hello ${name}`);
// }
// greet("Jessica");
// greet("Ayush");
// greet("Sahil");

// // after execution function's return a value which is by default a undefined:
// function nothing(){
//     console.log("Noting...");
// }
// let some=nothing();
// console.log(some);

// // If you need your function to return a specific value, then you will need to use the return statement. Here is an example of using a return statement to return the multiple operation values:
// function calculate(num1,num2,num3){
//     console.log("Operation's");
//     return (num1+num2)*num3;

// }
// console.log(calculate(3,10,9));

// // An anonymous function is a function without a name that can be assigned to a variable like this:
// const operation=function(a,b,c){
//     return a**b**c;
// }
// console.log(operation(2,3,2));
// // Functions support default parameters, allowing you to set default values for parameters. These default values are used if the function is called without an argument for that parameter. Here's an example:

// function wish(name="Sahil"){
//     console.log(`All the best ${name}!`);
// }
// wish();
// wish("Ayush");

// // In summary, functions allow you to write reusable and organized code. They can take inputs (parameters), perform actions, and return outputs.
// // testing:
// function mystery(a,b=3){
//     return a*b;
// }
// console.log(mystery(4));

// Arrow Function's & their work:
const sum=(num)=>{
    return num*5;
}
console.log(sum(6));

// Using regular function syntax:
function calculate(width,height){
    let area=width*height;
    return area;
}
console.log(calculate(4,9));
// arrow function syntax:
const calculation=(r)=>{
    let circumfrance=2*3.14*r;
    return circumfrance;

}
console.log(calculation(4));

// In arrow function we can write like this :
const greetings = name => console.log("Hello, " + name + "!");
// BUt in regular function syntax we can't cz it give's error:
// function greetings name console.log("Hello, " + name + "!");
// If you tried to remove the curly braces and place the calculation on the same line, then you would get an Uncaught SyntaxError: Unexpected token 'return' message:
// const area=(w,h)=> return w*h;
// this shows error cz of return
const area=(w,h)=> w*h;
console.log(area(3,4));

// What Is Scope in Programming, and How Does Global, Local, and Block Scope Work?:
// Global Scope:
const msg="Hello Guys!";
function greet(){
    console.log(msg);
}
greet();
console.log(msg);
// Scope in which a variable can be asscesible from anywhere;
// Local Scope:
function song(){
    let english="I wanna be Your's";
    console.log(english);
}
song();
// console.log(english)
// Local scope, on the other hand, refers to variables that are only accessible within a function.

// Block scope:
if(6>=4 && 3<=5){
    let condition="It is a true";
    console.log(condition)
}
// console.log(condition);
// Global variables should be used sparingly, as they can lead to naming conflicts and make your code harder to maintain. Local variables help to keep different parts of your code isolated, which is especially useful in larger programs. Block scoping with let and const provides even finer control over variable accessibility, helping to prevent errors and make your code more predictable. Mastering these basic concepts of global, local, and block scope will provide a solid foundation for understanding more advanced topics.

