// // 41. Spaces Between Each Character
// // Create a function that takes a string and returns a string with spaces in between all of the characters.

// function spaceMeOut(str){
//     return str.split("").join("")
// }

// // Examples
// console.log(spaceMeOut("space")) // ➞ "s p a c e"

// console.log(spaceMeOut("far out")) // ➞ "f a r   o u t"

// console.log(spaceMeOut("elongated musk")) // ➞ "e l o n g a t e d   m u s k"




// // 42. Amazing Edabit!
// // Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.

// function amazingEdabit(Str){
//     let forResult = Str.split(" ");

//     if(forResult[0] === "edabit"){
//         return Str
//     }else{
//         return `${forResult[0]} is not amazing.`
//     }
// }

// // Examples
// console.log(amazingEdabit("edabit is amazing.")) // ➞ "edabit is amazing."

// console.log(amazingEdabit("Mubashir is amazing.")) // ➞ "Mubashir is not amazing."

// console.log(amazingEdabit("Infinity is amazing.")) // ➞ "Infinity is not amazing."



// // 43. Modifying the Last Character
// // Create a function which makes the last character of a string repeat n number of times.

// function modifyLast(str, rpt){
//     let forResult = str.split("");
    
//     let lastElm = forResult[forResult.length - 1];

//     let preResult = [str];

//     for(let i = 1; i < rpt; i++){
//         preResult.push(lastElm)
//     }

//     return preResult.join("")
// }

// // Examples
// console.log(modifyLast("Hello", 3)) // ➞ "Hellooo"

// console.log(modifyLast("hey", 6)) // ➞ "heyyyyyy"

// console.log(modifyLast("excuse me what?", 5)) // ➞ "excuse me what?????"




// // 44. Classes For Fetching Information on a Sports Player
// // Create a class that takes the following four arguments for a particular football player:

// // name
// // age
// // height
// // weight
// // Also, create three functions for the class that returns the following strings:

// // getAge() returns "name is age age"
// // getHeight() returns "name is heightcm"
// // getWeight() returns "name weighs weightkg"
// // Examples
// //  p1 = new Player("David Jones", 25, 175, 75)


// class Player {
//     constructor(Name, Age, Height, Weight){
//         this.name = Name;
//         this.age = Age;
//         this.height = Height;
//         this.Weight = Weight; 
//     }

//     getAge(){
//         return `${this.name} is age ${this.age}`;
//     }

//       getHeight(){
//         return `${this.name} is ${this.height}cm`;
//     }

//       getWeight(){
//         return `${this.name} weights ${this.Weight}kg`;
//     }
// }

// let p1 = new Player("David Jones", 25, 175, 75)

//   console.log(p1.getAge()) // ➞ "David Jones is age 25"
//   console.log(p1.getHeight()) // ➞ "David Jones is 175cm"
//   console.log(p1.getWeight()) // ➞ "David Jones weighs 75kg"



// // 45. How Many D's Are There?
// // Create a function that counts how many D's are in a sentence.

// function countDs(str){
//     let count = 0;
//     let forResult = str.split("")

//     for(let i = 0; i < forResult.length; i++){
//         if(forResult[i] === "d" || forResult[i] === "D"){
//             count++
//         }
//     }
    
//     return count
// }

// // Examples
// console.log(countDs("My friend Dylan got distracted in school.")) // ➞ 4

// console.log(countDs("Debris was scattered all over the yard.")) // ➞ 3

// console.log(countDs("The rodents hibernated in their den.")) // ➞ 3



// // 46. Raucous Applause
// // After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound.

// // An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps)

// // Given a string of what the overlapping claps sounded like, return how many claps were made in total.

// function countClaps(str){
//     let count = 0;
//     let forResult = str.split("");

//     for(let i = 0; i < forResult.length; i++){
//         if(forResult[i] === "C"){
//             count++
//         }
//     }

//     return count
// }

// // Examples
// console.log(countClaps("ClaClaClaClap!")) // ➞ 4

// console.log(countClaps("ClClClaClaClaClap!")) // ➞ 6

// console.log(countClaps("CCClaClClap!Clap!ClClClap!")) // ➞ 9



// // // 47. Lowercase, Uppercase or Mixed?
// // // Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.

// // function getCase(str){
// //     let lowerCaseStr = str.toLowerCase();
// //     let UpperCaseStr = str.toUpperCase();

// //     if (str === lowerCaseStr){
// //         return "Lower"
// //     } else if(str === UpperCaseStr){
// //         return "Upper"
// //     } else{
// //         return "Mixed"
// //     }
// // }

// // // Examples
// // console.log(getCase("whisper...")) // ➞ "lower"

// // console.log(getCase("SHOUT!")) // ➞ "upper"

// // console.log(getCase("Indoor Voice")) // ➞ "mixed"



// // 48. WordCharWord
// // Create a function that will put the first argument, a character, between every word in the second argument, a string.

// function add(repl, str){
//     let forResult = str.split(" ");
//     let forRepl = forResult[0];
//     let result = forResult[0].replace(forRepl, `${forRepl}${repl}`);
    
//     let finalResult = str.replace(forRepl, result);
//     return finalResult.split(" s").join("")
// }

// // Examples
// console.log(add("R", "javascript is fun"))  //➞ "javascriptRisRfun"

// console.log(add("#", "hello world!"))  //➞ "hello#world!"

// console.log(add("#", " "))  //➞ "#"



// // 49. Scottish Screaming
// // A strong Scottish accent makes every vowel similar to an "e", so you should replace every vowel with an "e". Additionally, it is being screamed, so it should be in block capitals.

// // Create a function that takes a string and returns a string.

// function toScottishScreaming(str){
//     let strToArr = str.split("");

//     for(let i = 0; i < strToArr.length; i++){
//         if(strToArr[i] == "a" || strToArr[i] == "e" ||strToArr[i] == "i" ||strToArr[i] == "o" ||strToArr[i] == "u"){
//             strToArr[i] = "e";
//         }
//     }

//     return strToArr.join("")
// }

// // Examples
// console.log(toScottishScreaming("hello world")) //➞ "HELLE WERLD"

// console.log(toScottishScreaming("Mr. Fox was very naughty")) //➞ "MR. FEX WES VERY NEEGHTY"

// console.log(toScottishScreaming("Butterflies are beautiful!")) //➞ "BETTERFLEES ERE BEEETEFEL!"




// 50. The Study of Wumbology
// Create a function that flips M's to W's (all uppercase).

function wumbo(str){
    let forResult = str.split("");

    for(let i = 0; i < forResult.length; i++){
        if(forResult[i] == "M"){
            forResult[i] = "W";
        }
    }

    let result = forResult.join("");

    return result
}

// Examples
console.log(wumbo("I LOVE MAKING CHALLENGES")) // ➞ "I LOVE WAKING CHALLENGES"

console.log(wumbo("MEET ME IN WARSAW")) // ➞ "WEET WE IN WARSAW"

console.log(wumbo("WUMBOLOGY")) // ➞ "WUWBOLOGY"