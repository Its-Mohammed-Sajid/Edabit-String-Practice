// 28. Stuttering Function
// Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.

function stutter(str){
    let forResult = str.split("");
    
    return `${forResult[0]}${forResult[1]}... ${forResult[0]}${forResult[1]}... ${str}?`
}

// Examples
console.log(stutter("incredible")) // ➞ "in... in... incredible?"

console.log(stutter("enthusiastic")) // ➞ "en... en... enthusiastic?"

console.log(stutter("outstanding")) // ➞ "ou... ou... outstanding?"