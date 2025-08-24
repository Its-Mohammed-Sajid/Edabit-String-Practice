// 31. Default Mood
// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".

// function moodToday(mood){
//     let defaultMood = "neutral";

//     if(mood){
//         return `Today, I am feeling ${mood}`;
//     }else{
//         return `Today, I am feeling ${defaultMood}`;
//     }
// }

// // Examples
// console.log(moodToday("happy")) // ➞ "Today, I am feeling happy"

// console.log(moodToday("sad")) // ➞ "Today, I am feeling sad"

// console.log(moodToday()) // ➞ "Today, I am feeling neutral"





// // 32. Count the Syllables
// // Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).

// function countSyllables(str){
//     return str.length / 2
// }


// // Examples
// console.log(countSyllables("Hehehehehehe")) // ➞ 6

// console.log(countSyllables("bobobobobobobobo")) // ➞ 8

// console.log(countSyllables("NANANA")) // ➞ 3



// // 33. Array of Strings to Array of Numbers
// // Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// // Example:

// function toNumberArray(arr){
//     return arr.map((elm) => {
//         return Number
//     })
// }

// // ["1", "3", "3.6"] ➞ [1, 3, 3.6]
// // Examples
// console.log(toNumberArray(["9.4", "4.2"])) // ➞ [9.4, 4.2]

// console.log(toNumberArray(["91", "44"])) // ➞ [91, 44]

// console.log(toNumberArray(["9.5", "8.8"])) // ➞ [9.5, 8.8]



// // 34. Char-to-ASCII
// // Create a function that returns the ASCII value of the passed in character.

// function ctoa(str){
//     return str.charCodeAt(0)
// }

// // Examples
// console.log(ctoa("A")) // ➞ 65

// console.log(ctoa("m")) // ➞ 109

// console.log(ctoa("[")) // ➞ 91

// console.log(ctoa("\\")); // ➞ 92




// // 35. Case Insensitive Comparison
// // Write a function that validates whether two strings are identical. Make it case insensitive.

// function match(str1, str2){
//     let forResult = str2.toLowerCase();
    
//     return str1 === forResult
// }

// // Examples
// console.log(match("hello", "hELLo")) // ➞ true

// console.log(match("motive", "emotive")) // ➞ false

// console.log(match("venom", "VENOM")) // ➞ true

// console.log(match("mask", "mAskinG")) // ➞ false




// // 36. Repeat String
// // Create a function that takes a string txt and a number n and returns the repeated string n number of times.

// // If given argument txt is not a string, return Not A String !!

// function repeatString(str, repeat){
//     let result = [];

//     for(let i = 0; i < repeat; i++){
//         result.push(str)
//     }

//    if(typeof str === "string"){
//     return result.join("");
//    }else{
//     return "Not A String !!";
//    }
// }

// // Examples
// console.log(repeatString("Mubashir", 2)) // ➞ "MubashirMubashir"

// console.log(repeatString("Matt", 3)) // ➞ "MattMattMatt"

// console.log(repeatString(1990, 7)) // ➞ "Not A String !!"



// // 37. String or Integer?
// // Create a function that checks if the argument is an integer or a string. Return "int" if it's an integer and "str" if it's a string.

// function intOrString(value){
    
//     if(typeof value === "number"){
//         return "int";
//     }else if(typeof value === "string"){
//         return "str";
//     }
// }

// // Examples
// console.log(intOrString(8)) // ➞ "int"

// console.log(intOrString("Hello")) // ➞ "str"

// console.log(intOrString(9843532)) // ➞ "int"




// // 38. Hello; Hello World; World
// // Write a function that takes an integer and:

// // If the number is a multiple of 3, return "Hello".
// // If the number is a multiple of 5, return "World".
// // If the number is a multiple of both 3 and 5, return "Hello World".

// function helloWorld(num){
//     if(num % 3 === 0 && num % 5 !== 0){
//         return "Hello";
//     }else if(num % 5 === 0 && num % 3 !== 0){
//         return "World";
//     }else if(num % 3 === 0 && num % 5 === 0){
//         return "Hello World"
//     }
// }

// // Examples
// console.log(helloWorld(3)) // ➞ "Hello"

// console.log(helloWorld(5)) // ➞ "World"

// console.log(helloWorld(15)) // ➞ "Hello World"





// // 39. String to Integer and Vice Versa
// // Write two functions:

// // toInt() : A function to convert a string to an integer.
// // toStr() : A function to convert an integer to a string.

// function toInt(val){
//     return Number(val);
// }

// function toStr(val){
//     return String(val);
// }

// // Examples
// console.log(toInt("77")) // ➞ 77

// console.log(toInt("532")) // ➞ 532

// console.log(toStr(77)) // ➞ "77"

// console.log(toStr(532)) // ➞ "532"




// 40. Burrrrrrrp
// Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.

function longBurp(num){
    return "Bu" + "r".repeat(num) + "p";
}

// Examples
console.log(longBurp(3)) // ➞ "Burrrp"

console.log(longBurp(5)) // ➞ "Burrrrrp"

console.log(longBurp(9)) // ➞ "Burrrrrrrrrp"