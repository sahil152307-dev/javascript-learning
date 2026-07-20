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

// // parseFloat and parseInt:
// console.log(parseFloat(`6.1 ft height`))
// console.log(parseFloat("sahil123"));
// console.log(parseFloat("1.2.3"));
// console.log(parseFloat("2.3"));

// console.log(parseInt("2.3"));
// console.log(parseInt("45ft"));
// console.log(parseInt("Sahil123"));
// console.log(parseInt("45"));
// // Both methods have some noteworthy behaviors. They ignore leading whitespace:
// console.log(parseFloat("  3.4"));
// console.log(parseInt("  10"));
// // They handle plus and minus signs at the beginning of the string:
// console.log(parseInt("+69"));
// console.log(parseInt("-69"));
// // testing
// console.log(parseInt("1+45"));
// console.log(parseInt("4-3"));
// console.log(parseInt("4*5"));
// // In conclusion, parseFloat() and parseInt() are valuable tools for converting strings to numbers in JavaScript. Understanding how they work and their specific behaviors allows you to handle numeric data more effectively in your applications, especially when dealing with user inputs or external data sources.


// // tofixed Method:
// let a=3.1234;
// console.log(a.toFixed(2));
// let x=3.24;
// console.log(x.toFixed(1));



// let num=2.34564;
// let num1=5.45564;
// console.log(num.toFixed(3));
// console.log(num1.toFixed(3));

// // As you can see, .toFixed() rounds up when the next digit is 5 or greater, and rounds down otherwise. If you call .toFixed() without arguments, it defaults to 0 decimal places:
// console.log(3.145.toFixed());
// console.log(5.55.toFixed());

// let price = 21.34;
// let taxRate = 1.67;
// let total=price+(price*taxRate);

// console.log("Total: $" + total.toFixed(2));
// console.log("Total: $" + total.toFixed());


// In conclusion, the .toFixed() method is a powerful tool for formatting numbers in JavaScript, particularly when you need to control the display of decimal places. While it's primarily used for formatting output, remember its behavior, especially when precise calculations are needed.

// console.log(-1/0);
// comparisons work with Null and undefined:
// In summary, while null and undefined are both used to represent the absence of a value, they behave differently in comparisons. Understanding these differences is key to writing clear and error-free JavaScript code.
// console.log(null==undefined);
// console.log(null===undefined);
// console.log(null==0);
// console.log(null>=0);
// console.log(null>0);
// console.log(null=='');

// console.log(undefined==" ");
// console.log(undefined==0);
// console.log(undefined>=0);
// console.log(undefined>0);

// What Are Switch Statements and How Do They Differ from If/Else Chains?

//  switch statement evaluates an expression and matches its value against a series of case clauses. When a match is found, the code block associated with that case is executed. Here's a basic structure of a switch statement:
// Syntax:
// switch (expression) {
//   case value1:
//     // code to be executed if expression === value1
//     break;
//   case value2:
//     // code to be executed if expression === value2
//     break;
//   default:
//     // code to be executed if expression doesn't match any case
// }

// let marks=99;

// switch(true){
//     case marks>=90:
//         console.log("Grade A");
//         break;

//     case marks>=80:
//         console.log("Grade B");
//         break;

//     case marks>=70:
//         console.log("Grade C");
//         break;

//     case marks>=60:
//         console.log("Grade D");
//         break;

//     case marks<60:
//         console.log("Fail");
//         break;

//     default:
//         console.log("Invaild marks");

// }
// let dayOfWeek = 3; 

// switch (dayOfWeek) {
//     case 1:
//         console.log("It's Monday! Time to start the week strong.");
//         break;
//     case 2:
//         console.log("It's Tuesday! Keep the momentum going.");
//         break;
//     case 3:
//         console.log("It's Wednesday! We're halfway there.");
//         break;
//     case 4:
//         console.log("It's Thursday! Almost the weekend.");
//         break;
//     case 5:
//         console.log("It's Friday! The weekend is near.");
//         break;
//     case 6:
//         console.log("It's Saturday! Enjoy your weekend.");
//         break;
//     case 7:
//         console.log("It's Sunday! Rest and recharge.");
//         break;
//     default:
//         console.log("Invalid day! Please enter a number between 1 and 7.");
// }

// Here is an example of when you might use an if/else statement over a switch statement:
// let creditScore = 720; 
// let annualIncome = 60000; 
// let loanAmount = 200000; 

// let eligibilityStatus;

// if (creditScore >= 750 && annualIncome >= 80000) {
//     eligibilityStatus = "Eligible for premium loan rates.";
// } else if (creditScore >= 700 && annualIncome >= 50000) {
//     eligibilityStatus = "Eligible for standard loan rates.";
// } else if (creditScore >= 650 && annualIncome >= 40000) {
//     eligibilityStatus = "Eligible for subprime loan rates.";
// } else if (creditScore < 650) {
//     eligibilityStatus = "Not eligible due to low credit score.";
// } else {
//     eligibilityStatus = "Not eligible due to insufficient income.";
// }

// console.log(eligibilityStatus);

// In summary, while both switch statements and if/else if chains allow for multiple-branch logic in your code, they have different strengths. switch statements excel at handling multiple possible values for a single variable, while if/else if chains offer more flexibility for complex conditions. The choice between them often comes down to the specific requirements of your code and personal or team coding style preferences.
// checking:
// console.log(5===2+3||4==2)
// if(1){
//     console.log("True!")
// }
// const a=2;
// if(1=="1"){
//     let b=3;
//     console.log(a+b);
// }
// console.log(b)


let vehicle = "car";

switch (vehicle) {
  case "bike":
    console.log("Bikes are two-wheelers.");
    break;
  case "car":
    console.log("Some cars are 4x4.");
  case "truck":
    console.log("Trucks can carry heavy loads.");
    break;
  default:
    console.log("Unknown vehicle.");
}
let x = 5;
if (x > 1 && x < 10) {
  console.log("x is between 1 and 10");
} else {
  console.log("x is not between 1 and 10");
}