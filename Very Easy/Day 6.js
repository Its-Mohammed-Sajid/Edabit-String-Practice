// // 28. Stuttering Function
// // Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.

// function stutter(str){
//     let forResult = str.split("");
    
//     return `${forResult[0]}${forResult[1]}... ${forResult[0]}${forResult[1]}... ${str}?`
// }

// // Examples
// console.log(stutter("incredible")) // ➞ "in... in... incredible?"

// console.log(stutter("enthusiastic")) // ➞ "en... en... enthusiastic?"

// console.log(stutter("outstanding")) // ➞ "ou... ou... outstanding?"



// // 29. Reverse Psychology
// // For this challenge, you will NOT be given a string. Your task isn't to add "Do not" before the given string. If there is no given string, you will not return "Do not do anything." Do not check the examples to know how to do this challenge.

// function reversePsychology(str){
//     return `Do not ${str}`
// }

// // Examples
// console.log(reversePsychology("wash the dishes")) // ➞ "Do not wash the dishes."

// console.log(reversePsychology("eat your lunch")) // ➞ "Do not eat your lunch."

// console.log(reversePsychology("go to school")) // ➞ "Do not go to school."


// 30. Fraction Greater Than One
// Given a fraction as a string, return whether or not it is greater than 1 when evaluated.

function greaterThanOne(str){
    let preResult = eval(str);
    
    if(preResult > 1){
        return true;
    }else{
        return false
    }
}

// Examples
console.log(greaterThanOne("1/2")) // ➞ false

console.log(greaterThanOne("7/4")) // ➞ true

console.log(greaterThanOne("10/10")) // ➞ false
