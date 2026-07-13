// // Booleans & Equality/Inequality
// let age=18;         
// // true
// if(age>=18){
//     console.log("Can drive");
// } else{
//     console.log("Can't drive");
// }

// // It is considered best practice to use strict inequality and equality operators whenever possible, as they do not perform type coercion. Most of the time in professional projects, you will see codebases that usually prefer these two operators over the inequality and equality operators.

// // let a=45;
// // let b="45";
// // console.log(a==b);
// // // equality
// // console.log(a===b);
// // // Strictly equality

// // let x=56;
// // let y=78;
// // console.log(x!=y);
// // // Inequality
// // let c=34;
// // let d="34";
// // console.log(c!==d);
// // // Stricly Inequality

// // let p=3;
// // let q="3";
// // console.log(p!=q);

// // Comparison Operator's:
// // let x=23;
// // let y=45;
// // let z='23';

// // console.log(x>y);
// // console.log(y>x);
// // console.log(z>=x); 
// // // In above 3rd one the comparision operator use type coresion at z;

// // let a=4;
// // let b=5;
// // let c="4";

// // console.log(a<b);
// // console.log(b<a);
// // console.log(a<=c);

// /* A truthy value is a value that evaluates to true in a boolean context. Examples of truthy values are:
// Non-empty strings
// Non-zero numbers
// The boolean true */
// /*Falsy values are values that evaluate to false in a boolean context. Examples of falsy values are:
// "" (empty string)
// 0
// false
// null
// undefined
// NaN*/

// // Unary Operator's:
// // Not operator
// // const a=true;
// // const b=false;
// // const not= !b;
// // console.log(not)

// // // plus Operator

// // const bool=true;
// // const boolToSomething= +bool;
// // console.log(boolToSomething)
// // console.log(typeof bool)
// // console.log(typeof boolToSomething)
// // // convert to number data type;

// // // Unary negation operator
// // const str="67";
// // const strToNumber= -str;
// // console.log(strToNumber);
// // console.log(typeof str)
// // console.log(typeof strToNumber)

// // Bitwise Not Operator:
// // The bitwise NOT operator is a less commonly used unary operator. Represented by a tilde, ~, it inverts the binary representation of a number. Computers store numbers in binary format (1s and 0s). The ~ operator flips every bit, meaning it changes all 1s to 0s and all 0s to 1s. You will learn more about binary and bits in a future lesson.
// // ~x === -(x + 1)
// // const num=5;
// // console.log(~num);

// // // typeof is also a unary operator
// // let num1="45";
// // console.log(typeof num1);

// // The void keyword is a unary operator that evaluates an expression and returns undefined.

// const sum=34;
// console.log(void(sum));

// // Bitwise Operator
// // Add Operator
// let x=7;
// let y=3;
// console.log(x&y);
// // OR operator
// let a=3;
// let b=9;
// console.log(a|b);

// // left sift Operator
// let num=6;
// // binary of 6 is 0110 cz of left sift extra one 0 will add at right sside ot the binary number of 6 so it become 01100 so the value it gives will be 2x of the actual num value and in case of <<2 it will 4x of the actual value
// console.log(6<<1);
// console.log(6<<2);

// // right shift operator
// let num1=8;
// // binart of 8 is 1000 cz of right shift the last value on binary falls and became 100 and then the binary will return the /2 value of the original value andd in case of >>2 it give /4
// console.log(num1>>1);
// console.log(num1>>2);

// // XOR Operator
// let digi1=9;
// // binary of 9 is 1001;
// let digi2=3;
// // binary of 3 is 0011;
// // answer will be 1010 (10)
// console.log(digi1^digi2);

// let a1 = 13;
// // binary of 13 is 1101
// let b1 = 6;
// // binary of 6 is 0110

// console.log(a1 & b1);
// // answer 0100(4)
// console.log(a1 | b1);
// // answer 1111(15)
// console.log(a1 ^ b1);
// // answer 1011(11)
