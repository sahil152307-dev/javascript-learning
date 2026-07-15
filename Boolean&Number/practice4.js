// // Conditional Statement's:
// //Truthy values are any values that result in true when evaluated in a Boolean context like an if statement. Here are examples of truthy values:
// // non-empty strings, for example, hello
// // any number other than 0 and -0, for example, 4, -5, and others
// // arrays
// // objects
// // the boolean true
// // On the other hand, falsy values are values that evaluate to false in a boolean context. JavaScript has few falsy values, which makes them easy to remember. Here are a few falsy values:
// // boolean false
// // 0 (zero)
// // "" (empty string)
// // null
// // undefined
// // NaN (Not a Number)

// // if/else if/else:
// const student=3;
// if(student>=5){
//     console.log("Student is eligible for the admission.")
// }else{
//     console.log("Student is not eligible for the admission.")
// }

// let marks=345;
// let Percent=(marks/400)*100;

// if(Percent>=90){
//     console.log("Grade A+");
// }else if(Percent>=80){
//     console.log("Grade A");
// }else if(Percent>=70){
//     console.log("Grade B");
// }else if(Percent>=60){
//     console.log("Grade C");
// }else if(Percent>=50){
//     console.log("Grade D")
// }
// else{
//     console.log("Fail");
// }
// // The ternary operator is a compact way to write simple if/else statements. It has three parts: a condition, a result if the condition is true, and a result if it is false.
// const temperature=30;
// const weather=temperature>=30 ? 'Sunny':'Cool';
// console.log(`It's a ${weather} day`);
// syntax=condition ? expressionIfTrue : expressionIfFalse;
// So, which should you use between an if statement and a ternary? Use a ternary while dealing with a single condition or single expressions, or when you want a compact syntax for simple logic. Use if/else statements when you're dealing with complex conditions and multiple statements, as things become unreadable if you nest ternaries.

//  Binary Logical Operators:
// Truthy both side so right will be printed
const num="String"&&45;
console.log(num);
// falsy value will be printed
const falsy=null&&'a';
console.log(falsy)
// if both are falsy value it return's first one;
let wrong=undefined&&NaN;
console.log(wrong);
// candidate demand-
let age=20
let salary=34000;
// company demand-
if(age>=20 && salary<=30000){
    console.log("You can join the company!");
}else{
    console.log("You can't join the company!");
}
// OR Operator
let result=45||0;
console.log(result);
let test=null||'Str';
console.log(test);

let unknownUser;
if(unknownUser||'Sahil'){
    console.log("Welcome!");
}else{
    console.log("Unknown")
}
// nullish coalescing operator is more sophisticated than logical OR and logical AND. 
let userSetting={
    theme:"light",
    Sensitivity:null,
    player:true,   
};

let Sensitivity=userSetting.Sensitivity ?? 190;
console.log(Sensitivity)
