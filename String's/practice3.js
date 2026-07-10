// In JavaScript, you can access the numeric code of a character using the charCodeAt() method. This method returns the UTF-16 code unit of the character at a specified index. For the first 128 characters, this value matches the ASCII code.
// let char="A";
// console.log(char.charCodeAt(0));
// let letter=String.fromCharCode(65);
// console.log(letter)
/* For instance, you might use charCodeAt() to check if a character is uppercase, lowercase, or a digit by comparing its ASCII value.
On the other hand, fromCharCode() can be used to dynamically generate characters from their ASCII codes*/
// let sentence="Javascript is a fun and a easy language";
// let result=sentence.includes("a",20);
// console.log(result)
// // Include method is used to check if the given substring by user is there in main string or not if the substring is not there the false msg pops up and if yes then it put true.
// let msg="Hi, My Name is Sahil Pandey. My age is 18.";
// let extract=msg.slice(15,27);
// console.log(extract)
// let msg2="My anime name is solo leaveling."
// extract=msg2.slice(3)
// console.log(extract)
// let mo="My Fav language is Python.";
// extract=mo.slice(-7);
// console.log(extract);
// The slice() method is a powerful tool for extracting parts of a string in JavaScript.
// ASCII, short for American Standard Code for Information Interchange
/*In summary, the toUpperCase() and toLowerCase() methods in JavaScript are powerful tools for transforming strings into all uppercase or lowercase letters.

These methods are particularly useful for standardizing text input, making case-insensitive comparisons, and ensuring design consistency.*/
// const Intro="Hi, My Role in the company is a Software Developer.";
// const uppercase=Intro.toUpperCase();
// console.log(uppercase);

// const Introduction="   Hi,my Name is Sahil and Iam a gammer";
// const lowercase=Introduction.toLowerCase();
// console.log(lowercase);
// /*In summary, trimming whitespace is an essential part of working with strings in JavaScript. Whether you want to clean up input data or ensure consistent string comparisons, you can use trim() to remove whitespace from both sides of a string, or use trimStart() and trimEnd() to target specific sides.*/
// const star="   Hello   World!";
// const trimed=star.trim();
// console.log(trimed);
// // console.log(start)
// const greet="    Congrat\'s  ";
// const end=greet.trimStart();
// console.log(end);
// const goi="hellowolrd!    "
// const start=goi.trimEnd();
// console.log(start)


// const cases="freecodecamp";
// const convert=cases.slice(0,4)+cases[4].toUpperCase()+cases.slice(5,8)+cases[8].toUpperCase()+cases.slice(9,12);
// console.log(convert);
// let sentence="Ayush is a funny guys and good person.";
// console.log(sentence);
// let newSentence=sentence.replace("funny","land");
// console.log(newSentence)
// // It is a case-sensitive
// let word="A whale is Big";
// let newWord=word.replace("big","small");
// console.log(newWord)
// /*The replace() method in JavaScript is a powerful and flexible tool for string manipulation.
// It lets you replace specific parts of a string, whether you're dealing with individual characters, words, or complex patterns using regular expressions.
// While it's ideal for straightforward replacements, understanding its case sensitivity and default behavior (like replacing only the first occurrence) can help you use it more effectively.*/
// let text="Python is a fun and Python is easy";
// let newText=text.replace("Python","Java");
// console.log(newText)
// To replace all same word at onces use replaceAll methond.
/*The repeat() method can simplify tasks that involve string duplication, making your code more concise and readable.

Whether you're generating repeated text patterns or filling a space with characters, repeat() can save you from writing loops or more complex code.

You are not limited to passing a number directly into the repeat() method. You can also pass a variable that stores a number value.*/
const count=5;
let value="Notification!\n";
let newValue=value.repeat(count);
console.log(newValue)
let counts=4.8;
let sentence="HI!\n";
const newSentence=sentence.repeat(counts);
console.log(newSentence);
let text=`"Sorry!"
`;
// let newText=text.repeat(0);  
let newText=text.repeat(10)
console.log(newText);