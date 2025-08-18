// // 6. Buggy Code (Part 4)
// // Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

// // Can you help her?

// function greeting(str){
//     if(str === "Mubashir"){
//         return `Hello, my Love!`;
//     }else{
//         return `Hello, ${str}`
//     }
// }

// // Examples
// console.log(greeting("Matt")) // ➞ "Hello, Matt!"

// console.log(greeting("Helen")) // ➞ "Hello, Helen!"

// // console.log(greeting("Mubashir")) // ➞ "Hello, my Love!"


// // 7. Compare Strings by Count of Characters
// // Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

// function comp(str1, str2){
//     if(str1.length === str2.length){
//         return true;
//     }else{
//         return false
//     }
// }

// // Examples
// console.log(comp("AB", "CD"))  //➞ true

// console.log(comp("ABC", "DE"))  //➞ false

// console.log(comp("hello", "edabit"))  //➞ false


// // 8. Is the String Empty?
// // Create a function that returns true if a string is empty and false otherwise.

// function isEmpty(str){
//     if(str.length < 1){
//         return true;
//     }else{
//         return false;
//     }
// }

// // Examples
// console.log(isEmpty("")) // ➞ true

// console.log(isEmpty(" ")) // ➞ false

// console.log(isEmpty("a")) // ➞ false


// // 9. Recursion: Length of a String
// // Write a function that returns the length of a string. Make your function recursive.

// function length(str){
//     return str.length
// }

// // Examples
// console.log(length("apple")) // ➞ 5

// console.log(length("make")) // ➞ 4

// console.log(length("a")) // ➞ 1

// console.log(length("")) // ➞ 0


// // 10. Recursion: Length of a String
// // Write a function that returns the length of a string. Make your function recursive.

// function length(str){
//     if(str === "") {
//         return 0; // base case
//     }

//     return 1 + length(str.slice(1));
// }

// // Examples
// console.log(length("apple")) // ➞ 5

// console.log(length("make")) // ➞ 4

// console.log(length("a")) // ➞ 1

// console.log(length("")) // ➞ 0


// // 11. Return a String as an Integer
// // Create a function that takes a string and returns it as an integer.

// function stringInt(str){
//     // return parseInt(str);
//     return Number(str);
// }

// // Examples
// console.log(stringInt("6")) // ➞ 6

// console.log(stringInt("1000")) // ➞ 1000

// console.log(stringInt("12")) // ➞ 12


// // 12. Concatenate First and Last Name into One String
// // Given two strings, firstName and lastName, return a single string in the format "last, first".

// function concatName(firstName, lastName){
//     return `${lastName} ${firstName}`
// }

// // Examples
// console.log(concatName("First", "Last")); // ➞ "Last, First"

// console.log(concatName("John", "Doe")); // ➞ "Doe, John"

// console.log(concatName("Mary", "Jane")); // ➞ "Jane, Mary"


// // 13. Evaluate an Equation
// // Create a function that evaluates an equation.

// function eq(str){
//     return eval(str)
// }

// // Examples
// console.log(eq("1+2")); // ➞ 3

// console.log(eq("6/(9-7)")); // ➞ 3

// console.log(eq("3+2-4")); // ➞ 1



// // 14. Format I: Template String
// // Write a template string according to the following example:

// // Example
// const a = "John";
// const b = "Joe";
// const c = "Jack";
// const template = `Their names were: ${a}, ${b} and ${c}.` // ➞ "Their names were:  John,  Joe  and  Jack."

// console.log(template)



// 15. Is the String Odd or Even?
// Given a string, return true if its length is even or false if the length is odd.

function oddOrEven(str){
    let lengths = str.length;

    if(lengths % 2 === 0){
        return `The word "${str}" has ${lengths} characters.
        ${lengths} is an even number, so the program outputs is true.`
    }else{
        return `The word "${str}" has ${lengths} characters.
        ${lengths} is an odd number, so the program outputs is false.`
    }
}

// Examples
console.log(oddOrEven("apples")); // ➞ true
// The word "apples" has 6 characters.
// 6 is an even number, so the program outputs true.

console.log(oddOrEven("pears")); // ➞ false
// "pears" has 5 letters, and 5 is odd.
// Therefore the program outputs false.

console.log(oddOrEven("cherry")); // ➞ true