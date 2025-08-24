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

