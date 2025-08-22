// // 26. Is the Word Singular or Plural?
// // Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

// function isPlural(str){
//     let forResult = str.split("");
//     let result = false;

//     if(forResult[forResult.length - 1] === "s"){
//         result = true;
//     }

//     return result;
// }

// // Examples
// console.log(isPlural("changes")) // ➞ true

// console.log(isPlural("change")) // ➞ false

// console.log(isPlural("dudes")) // ➞ true

// console.log(isPlural("magic")) // ➞ false



// 27. Concatenating First and Last Character of a String
// Create a function that takes a string and returns the concatenated first and last character.

function firstLast(str){
    let forResult = str.split("");

    return [forResult[0], forResult[forResult.length - 1]].join("")
}

// Examples
console.log(firstLast("ganesh")) // ➞ "gh"

console.log(firstLast("kali")) // ➞ "ki"

console.log(firstLast("shiva")) // ➞ "sa"

console.log(firstLast("vishnu")) // ➞ "vu"

console.log(firstLast("durga")) // ➞ "da"