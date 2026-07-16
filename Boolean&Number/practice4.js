// // // Conditional Statement's:
// // //Truthy values are any values that result in true when evaluated in a Boolean context like an if statement. Here are examples of truthy values:
// // // non-empty strings, for example, hello
// // // any number other than 0 and -0, for example, 4, -5, and others
// // // arrays
// // // objects
// // // the boolean true
// // // On the other hand, falsy values are values that evaluate to false in a boolean context. JavaScript has few falsy values, which makes them easy to remember. Here are a few falsy values:
// // // boolean false
// // // 0 (zero)
// // // "" (empty string)
// // // null
// // // undefined
// // // NaN (Not a Number)

// // // if/else if/else:
// // const student=3;
// // if(student>=5){
// //     console.log("Student is eligible for the admission.")
// // }else{
// //     console.log("Student is not eligible for the admission.")
// // }

// // let marks=345;
// // let Percent=(marks/400)*100;

// // if(Percent>=90){
// //     console.log("Grade A+");
// // }else if(Percent>=80){
// //     console.log("Grade A");
// // }else if(Percent>=70){
// //     console.log("Grade B");
// // }else if(Percent>=60){
// //     console.log("Grade C");
// // }else if(Percent>=50){
// //     console.log("Grade D")
// // }
// // else{
// //     console.log("Fail");
// // }
// // // The ternary operator is a compact way to write simple if/else statements. It has three parts: a condition, a result if the condition is true, and a result if it is false.
// // const temperature=30;
// // const weather=temperature>=30 ? 'Sunny':'Cool';
// // console.log(`It's a ${weather} day`);
// // syntax=condition ? expressionIfTrue : expressionIfFalse;
// // So, which should you use between an if statement and a ternary? Use a ternary while dealing with a single condition or single expressions, or when you want a compact syntax for simple logic. Use if/else statements when you're dealing with complex conditions and multiple statements, as things become unreadable if you nest ternaries.

// //  Binary Logical Operators:
// // Truthy both side so right will be printed
// const num="String"&&45;
// console.log(num);
// // falsy value will be printed
// const falsy=null&&'a';
// console.log(falsy)
// // if both are falsy value it return's first one;
// let wrong=undefined&&NaN;
// console.log(wrong);
// // candidate demand-
// let age=20
// let salary=34000;
// // company demand-
// if(age>=20 && salary<=30000){
//     console.log("You can join the company!");
// }else{
//     console.log("You can't join the company!");
// }
// // OR Operator
// let result=45||0;
// console.log(result);
// let test=null||'Str';
// console.log(test);

// let unknownUser;
// if(unknownUser||'Sahil'){
//     console.log("Welcome!");
// }else{
//     console.log("Unknown")
// }
// // nullish coalescing operator is more sophisticated than logical OR and logical AND. 
// let userSetting={
//     theme:undefined,
//     Sensitivity:null,
//     player:true,   
// };
// // Since null is a nullish value, the string default would be logged to the console. The nullish coalescing operator is incredibly useful in situations where null or undefined are the only values that should trigger a fallback or default value. Here is an example of dealing with a user's preference settings:
// let Sensitivity=userSetting.Sensitivity ?? 190;
// console.log(Sensitivity)
// let theme=userSetting.theme ?? "light";
// console.log(theme)

// // Math Operator and it's method:
// // The Math.random() method generates a random floating-point number between 0 (inclusive) and 1 (exclusive). This means the possible output can be 0, but it will never actually reach 1. Here is an example working with the Math.random() method:
// let random=Math.random();
// console.log(random)
// let random2=Math.random();
// console.log(random2)

// // Math.min() and Math.max() both take a set of numbers and return the minimum and maximum value, respectively. Here is an example of working both of those methods:

// let min=Math.min(23,45,66,78,9);
// console.log(min)
// let max=Math.max(23,45,66,78,9);
// console.log(max)

// // If you wanted to round numbers up or down to the nearest whole integer, you could use the Math.ceil() and Math.floor() methods.
// let roundUp=Math.ceil(0.6);
// console.log(roundUp);
// let roundDown=Math.floor(4.9);
// console.log(roundDown);
// // Hybrid of Floor and ceil is round;
// let round=Math.round(10.2);
// console.log(round);
// console.log(Math.round(8.6));
// A practical application of Math.floor() and Math.random() is to generate a random number between two whole numbers. Here's the syntax for that:
let min=6;
let max=4;
let randomize=Math.floor(Math.random()*(max-min+1))+min;
console.log(randomize);
const max1 = 2;
const min1= 4;
const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);
const randomNumBtw1And20 = Math.floor(Math.random() * 20) + 1;
console.log(randomNumBtw1And20);

//  Math.trunc() removes the decimal part of a number, returning only the integer portion, without rounding:
console.log(Math.trunc(10.1));
console.log(Math.trunc(5.9));

// If you need to get the square root or cube root of a number, you can use the Math.sqrt() and Math.cbrt() methods, respectively:
console.log(Math.sqrt(625));
console.log(Math.cbrt(27));
// If you need to get the absolute value of a number, you can use the Math.abs() method:
console.log(Math.abs(-45));
console.log(Math.abs(45));

// The last method we will look at will be the Math.pow() method: Just like expo:
console.log(Math.pow(24,2));
console.log(Math.pow(9,3));




