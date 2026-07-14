// Conditional Statement's:
//Truthy values are any values that result in true when evaluated in a Boolean context like an if statement. Here are examples of truthy values:
// non-empty strings, for example, hello
// any number other than 0 and -0, for example, 4, -5, and others
// arrays
// objects
// the boolean true
// On the other hand, falsy values are values that evaluate to false in a boolean context. JavaScript has few falsy values, which makes them easy to remember. Here are a few falsy values:
// boolean false
// 0 (zero)
// "" (empty string)
// null
// undefined
// NaN (Not a Number)

// if/else if/else:
const student=3;
if(student>=5){
    console.log("Student is eligible for the admission.")
}else{
    console.log("Student is not eligible for the admission.")
}

let marks=345;
let Percent=(marks/400)*100;

if(Percent>=90){
    console.log("Grade A+");
}else if(Percent>=80){
    console.log("Grade A");
}else if(Percent>=70){
    console.log("Grade B");
}else if(Percent>=60){
    console.log("Grade C");
}else if(Percent>=50){
    console.log("Grade D")
}
else{
    console.log("Fail");
}
// The ternary operator is a compact way to write simple if/else statements. It has three parts: a condition, a result if the condition is true, and a result if it is false.
const temperature=30;
const weather=temperature>=30 ? 'Sunny':'Cool';
console.log(`It's a ${weather} day`);
// syntax=condition ? expressionIfTrue : expressionIfFalse;
// So, which should you use between an if statement and a ternary? Use a ternary while dealing with a single condition or single expressions, or when you want a compact syntax for simple logic. Use if/else statements when you're dealing with complex conditions and multiple statements, as things become unreadable if you nest ternaries. 
