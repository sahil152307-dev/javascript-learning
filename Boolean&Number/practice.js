// const positiveValue = 23;
// console.log(typeof positiveValue);
// const floatingValue = 3.4;
// console.log(typeof floatingValue);
// // Special Case
// const num = 1 / 0;
// console.log(num);
// console.log(typeof num);
// const nan = 'hello' / 2;
// console.log(nan);
// console.log(typeof nan);

// const hex = 0x00FF00;
// console.log(typeof hex);
// Apart from the standard decimal system (base 10), JavaScript also supports numbers in different bases such as binary, octal, and hexadecimal. Binary is a base-2 system that uses only digits 1 and 0. Octal is a base-8 system that uses only digits 0 to 7. Hexadecimal is a base-16 system that uses digits 0 to 9 and letters a to f, like you see in CSS hex colors. Number is a important data type.

// Arithmetic Operator's
// 1)Add
// const num1=4 + 5 + 3;
// console.log(num1)
// Order of the number doesnt matter's

// 2)Subtract
// let num1=34;
// let num2=23;
// console.log(num1 - num2);
// 3)Multiplication
// let num1=15;
// let num2=5;
// let num3=10;
// const multi=num1*num2+num3;
// console.log(multi);
// 4)Division
// const num1=50;
// const num2=10;
// console.log(num1/num2);

// const num3=45;
// const num4=35;
// const num5=0;
// const divide= num5/num3/num4;
// console.log(divide)
// // It's important to note that if you try to divide by zero, JavaScript will return Infinity:
// const special=1/0;
// console.log(special);

// 5)Remainder
// const num1=35;
// const num2=5;
// console.log(num1%num2);
// console.log(45%4);

// 6)Exponential (power factor used for squaring or  raises one number to the power of another:)
// const num1=2;
// const num2=6;
// console.log(num1**num2);
// You can use multiple operator at one's and it's based on operator precedence;
// When you use + with a number and a string, JavaScript decides to treat them both as strings and joins them together. If you check the type of the result with the typeof operator, you'd see it's indeed a string:

// // Operation with String's:
// const add='10'+9;
// console.log(add)
// console.log(typeof add);
// // if not a number 
// const add1='abc'+45;
// console.log(add1)
// console.log(typeof add1)
// // if boolean's: true treated as 1 and false treated as 0;
// const bool=true + 1;
// console.log(bool)
// console.log(typeof bool)


// const bool1=false + 1;
// console.log(bool1);
// // undefined & null : null treated as 0 and undefined treated as NaN
// const num=undefined+2;
// const nu=null+8;
// console.log(num);
// console.log(nu);

const result3 = 'Hello' + true;
console.log(result3); // "Hellotrue"
console.log(typeof result3); // string


// JavaScript often performs type coercion, automatically converting data types such as numbers, strings, and booleans in sometimes unexpected ways. Understanding these conversions is crucial for avoiding bugs and writing robust code in your projects.

// // Above Example Number converted into String
// const sub='10'-5;
// const multiPlication='10'*4;
// const divided='34'/2;
// console.log(sub,multiPlication,divided);



