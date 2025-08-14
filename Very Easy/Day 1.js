// // 2. Return Something to Me!
// // Write a function that returns the string "something" joined with a space " " and the given argument a.

// function giveMeSomething(str){
//     // return "something " + str
    
//     // let something = "something ";
//     // return something.concat(str)

//     let something = "something ";
//     return something + str
// }

// // Examples
// console.log(giveMeSomething("is better than nothing")) // ➞ "something is better than nothing"

// console.log(giveMeSomething("Bob Jane")) // ➞ "something Bob Jane"

// console.log(giveMeSomething("something")) // ➞ "something something"



// // 3. Basic Variable Assignment
// // A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

// function nameString(name){
//     let Edabit = "Edabit";
//     let result = name.concat(Edabit)
//     return result
// }

// // Examples
// console.log(nameString("Mubashir")) // ➞ "MubashirEdabit"

// console.log(nameString("Matt")) // ➞ "MattEdabit"

// console.log(nameString("javaScript")) // ➞ "javaScriptEdabit"




// // 4. Boolean to String Conversion
// // Create a function that takes a boolean variable flag and returns it as a string.

// function boolToString(bool){
//     // return `${bool}`;
//     return bool.toString();
// }

// // Examples
// console.log(boolToString(true)) // ➞ "true"

// console.log(boolToString(false)) // ➞ "false"


// // 5. Miserable Parody of a Calculator
// // Create a function that will handle simple math expressions. The input is an expression in the form of a string.

// function calculator(str){
//     return eval(str)
// }

// // Examples
// console.log(calculator("23+4")) // ➞ 27

// console.log(calculator("45-15")) // ➞ 30

// console.log(calculator("13+2-5*2")) // ➞ 5

// console.log(calculator("49/7*2-3")) // ➞ 11