// // 21. Check String for Spaces
// // Create a function that returns true if a string contains any spaces.

// function hasSpaces(str){
//     let forRes = str.split("");
    
//     return forRes.some((elm) => {
//         return elm === ' ';
//     })
// }

// // Examples
// console.log(hasSpaces("hello")) // ➞ false

// console.log(hasSpaces("hello, world")) // ➞ true

// console.log(hasSpaces(" ")) // ➞ true

// console.log(hasSpaces("")) // ➞ false

// console.log(hasSpaces(",./!@#")) // ➞ false



// // 22. Is the Last Character an "N"?
// // Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

// function isLastCharacterN(str){
//     let forResult = str.split("");
    
//     if(forResult[forResult.length-1] === "n"){
//         return true;
//     }else{
//         return false;
//     }
// }

// // Examples
// console.log(isLastCharacterN("Aiden")) // ➞ true

// console.log(isLastCharacterN("Piet")) // ➞ false

// console.log(isLastCharacterN("Bert")) // ➞ false

// console.log(isLastCharacterN("Dean")) // ➞ true



// // 23. Luke, I Am Your ...
// // Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

// // Person	Relation
// // Darth Vader	father
// // Leia	sister
// // Han	brother in law
// // R2D2	droid

// // Examples

// function relationToLuke(str){
//     let person = ["Darth Vader", "Leia", "Han"];
//     let relation = ["father.", "sister.", "brother in law."];
//     let result;
//     let indx = person.indexOf(str);

//     for(let i = 0; i < person.length; i++){
//         result = `Luke, I am your ${relation[indx]}`;
//     }
    
//     return result 
// }

// console.log(relationToLuke("Darth Vader")) // ➞ "Luke, I am your father."

// console.log(relationToLuke("Leia")) // ➞ "Luke, I am your sister."

// console.log(relationToLuke("Han")) // ➞ "Luke, I am your brother in law."





// // 24. Front 3 - Slice Check Repeat Concatenate
// // Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.

// function frontThree(str){
//     let forResult = []
    
//     let firstThree = str.split("");
    
//     for(let i = 0; i < 3; i++){
//         forResult.push(firstThree[i])
//     }

//     let result = forResult.join("");

//     return [result, result, result].join("")
// }

// // Examples
// console.log(frontThree("Python")) // ➞ "PytPytPyt"

// console.log(frontThree("Cucumber")) // ➞ "CucCucCuc"

// console.log(frontThree("bioshock")) // ➞ "biobiobio"




// 25. Extract City Facts
// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

function cityFacts(obj){
    return `${obj.name} has a population of ${obj.population} and is situated in ${obj.continent}`
}

// Examples
console.log(cityFacts({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe"
})) // ➞ "Paris has a population of 2,140,526 and is situated in Europe"

console.log(cityFacts({
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia"
})) // ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"