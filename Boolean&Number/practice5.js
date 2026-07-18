// // How does NaN Work's:
// // console.log(NaN===NaN);
// // let result=0/0;
// // console.log(result);

// // In this case, dividing zero by zero is mathematically undefined, so JavaScript returns NaN. One peculiar property of NaN is that it's not equal to anything, including itself.

// // console.log(isNaN(true));

// // console.log(isNaN(undefined));
// // console.log(isNaN(NaN));
// // console.log(isNaN(null));
// // console.log(isNaN({}));

// // console.log(isNaN("37"));      // false: "37" is converted to 37
// // console.log(isNaN("37.37"));   // false: "37.37" is converted to 37.37
// // console.log(isNaN(""));        // false: empty string is converted to 0
// // console.log(isNaN(" "));       // false: string with a space is converted to 0


// // console.log(isNaN("Sahil"));

// // The isNaN() function log true whenever the given parameter not converted into a number.It performe type coversion before testing. 
// // To Due to these potential inconsistencies, ES6 (the sixth edition of JavaScript, released in 2015) introduced Number.isNaN(). This method does not attempt to convert the parameter to a number before testing. It only returns true if the value is exactly NaN:

// console.log(Number.isNaN(true));

// console.log(Number.isNaN(undefined));
// console.log(Number.isNaN(NaN));
// console.log(Number.isNaN(null));
// console.log(Number.isNaN({}));

// console.log(Number.isNaN("37"));
// console.log(Number.isNaN("37.37"));   
// console.log(Number.isNaN(""));       
// console.log(Number.isNaN(" "));      


// console.log(Number.isNaN("Sahil"));
// console.log(Number.isNaN(parseFloat(`123`)))
// let a=0;
// let b=0;
// let result=a/b;
// if(Number.isNaN(result)){
//     result="Error: Division resulted in NaN"
//     console.log(result)
// }

// parseFloat and parseInt:
console.log(parseFloat(`6.1 ft height`))
console.log(parseFloat("sahil123"));
console.log(parseFloat("1.2.3"));
console.log(parseFloat("2.3"));

console.log(parseInt("2.3"));
console.log(parseInt("45ft"));
console.log(parseInt("Sahil123"));
console.log(parseInt("45"));
// Both methods have some noteworthy behaviors. They ignore leading whitespace:
console.log(parseFloat("  3.4"));
console.log(parseInt("  10"));
// They handle plus and minus signs at the beginning of the string:
console.log(parseInt("+69"));
console.log(parseInt("-69"));
// testing
console.log(parseInt("1+45"));
console.log(parseInt("4-3"));
console.log(parseInt("4*5"));
// In conclusion, parseFloat() and parseInt() are valuable tools for converting strings to numbers in JavaScript. Understanding how they work and their specific behaviors allows you to handle numeric data more effectively in your applications, especially when dealing with user inputs or external data sources.


// tofixed Method:
let a=3.1234;
console.log(a.toFixed(2));
let x=3.24;
console.log(x.toFixed(1));



let num=2.34564;
let num1=5.45564;
console.log(num.toFixed(3));
console.log(num1.toFixed(3));

// As you can see, .toFixed() rounds up when the next digit is 5 or greater, and rounds down otherwise. If you call .toFixed() without arguments, it defaults to 0 decimal places:
console.log(3.145.toFixed());
console.log(5.55.toFixed());

let price = 21.34;
let taxRate = 1.67;
let total=price+(price*taxRate);

console.log("Total: $" + total.toFixed(2));
console.log("Total: $" + total.toFixed());


// In conclusion, the .toFixed() method is a powerful tool for formatting numbers in JavaScript, particularly when you need to control the display of decimal places. While it's primarily used for formatting output, remember its behavior, especially when precise calculations are needed.