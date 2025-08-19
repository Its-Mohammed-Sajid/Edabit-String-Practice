// // 15. String and Number Conversions
// // You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

// function intToString(Num){
//     // return Num.toString();
//     return `${Num}`
// }

// function stringToInt(str){
//     // return parseInt(str);
//     return Number(str)
// }

// // Examples:
// console.log(intToString(4)) // ➞ "4"

// console.log(stringToInt("4")) // ➞ 4

// console.log(intToString(29348)) // ➞ "29348"



// // 17. Word without First Character
// // Create a function that takes a word and returns the new word without including the first character.

// function newWord(str){
//     return str.slice(1);
// }

// // Examples
// console.log(newWord("apple")) // ➞ "pple"

// console.log(newWord("cherry")) // ➞ "herry"

// console.log(newWord("plum")) // ➞ "lum"


// // 18. Name Greeting!
// // Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

// function helloName(name){
//     // return `Hello ${name}!`;

//     let greet = "Hello "
//     return greet.concat(name + "!")
// }

// // Examples
// console.log(helloName("Gerald")) // ➞ "Hello Gerald!"

// console.log(helloName("Tiffany")) // ➞ "Hello Tiffany!"

// console.log(helloName("Ed")) // ➞ "Hello Ed!"




// // 19. Convert an Array to a String
// // Create a function that takes an array of numbers or letters and returns a string.

// function arrayToString(arr){
//     // return arr.join("");
//     let strOfArr = arr.toString();
//     return strOfArr.split(",").join("")
// }

// // Examples
// console.log(arrayToString([1, 2, 3, 4, 5, 6])); // ➞ "123456"

// console.log(arrayToString(["a", "b", "c", "d", "e", "f"])); // ➞ "abcdef"

// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"])); // ➞ "123asdAAAA"