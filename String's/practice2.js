/*In conclusion, JavaScript's dynamic typing allows variables to change types freely, which offers flexibility but can lead to unexpected errors during execution.

Statically typed languages like Java require you to specify variable types upfront, which helps catch errors before the program runs but offers less flexibility.*/
// let points=23;
// console.log(typeof points);
// let signInComplete=true;
// console.log(typeof signInComplete);
// // Be aware of assigning a variable value to null cz it is a qurik which is in the language from the first implementation it return typeof of object data
// let something=null;
// console.log(typeof something); 
// let human={
//     name: "Ayush",
//     age:13,
//     nature: "Anger"
// };
// console.log(human)
// let key=Symbol("Name");
// let value=Symbol("Name");
// console.log(key===value);
// let bigNumber=124356377474848484;
// console.log(typeof bigNumber);
// let age=23;
// console.log(age)
/*A const cannot reassign nor re-decalerd the value and let can be re assign value but not re decalerd*/
// Bracket notation is useful when you need to access specific characters in a string, such as extracting initials from a name or checking a specific letter for validation.
// let name="Sahil";
// console.log(name[0]);
// let greet="Welcome";
// console.log(greet[greet.length-1]);
// let vur="as";
// let firstTwo=vur[0]+vur[1];
// console.log(firstTwo);
// Escaping and creating newlines are essential when you’re formatting output or handling special characters in strings. These techniques help you prevent errors and ensure your text appears exactly as intended
// let poem="Twinkle, twinkle, little star\nHow I wonder what you are!\nUp above the world so high"
// console.log(poem)
// let wish="\"congrat\'s\"";
// console.log(wish);
// let comment="for commenting use this \\\\-\-"
// console.log(comment);
// const name="Ayush";
// let age=13;
// const Breed="Gali ka Kutta";
// let Info=`My Name is ${name}
// And I'm ${age} year old
// My Breed is ${Breed}!`
// console.log(Info)
// let Name="Sahil";
// let complete=`Hello ${Name}`;
// console.log(complete);
// let Anime="\"Your Name\"";
// let imdbRating=9.5;
// let highestRate=10;
// let myFav=`My Fav Anime is ${Anime}
// // and My rating For the anime is ${(imdbRating / highestRate) * 100}%`;
// // console.log(myFav)
// // Template literals are particularly useful when you need to include variables or expressions in strings, format complex strings, or work with multiline text. They are more concise and readable compared to traditional string concatenation.
// // Using indexOf() can be very useful when you need to check if a substring is present in a string and to determine its position for further operations.
// let sentence="Python is a easiest Language You can start with and Python Is A Powefull Language Too"
// let position=sentence.indexOf("PYTHON");
// console.log(position)
// By understanding the prompt() method, you gain a simple way to interact with users and retrieve information directly through the browser, even though it may not be widely used in modern web applications.
