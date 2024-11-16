// Adding and removing elements
/*
1. Exploring Array Manipulation in Javascript
*/
let fruits = ["orange", "apples", "cherries", "bananas"];
// Task 1. Adding and Removing Elements: .pop() .push()
fruits.push("advocado")
fruits.pop()
console.log(fruits)

// Task 2: Sorting Arrays
// Create a array of numbers in random order
let numbers = [23, 86, 223, 54, 62, 4, 19];
// Sort ascending order
numbers.sort((a, b) => a - b);
// double every number in array
let timesTwo = numbers.map(num => num * 2);
// divide
function addNumbers(numbers) {
  return numbers.map((num) => num / 2)
}
// Filter out the even numbers
let oddNumbers = numbers.filter(num => num % 2 !== 0)

// reduce method add all numbers in array
let sumOf = numbers.reduce((arr, curr) => arr + curr, 0)

console.log("The sum of:", sumOf)
console.log("Odd numbers: ",oddNumbers)

console.log("Multiplied by 2: ", timesTwo)
console.log("Divide numbers by 2 (function version):",addNumbers(numbers))
console.log("Orignal:", numbers)

// String Manipulation in Javascript
//Task 1: .length
let message = "Hello, World!";
console.log("Length: ", message.length)
//Task 2: toUpperCase()
console.log(" Converting to all uppercase: ", message.toUpperCase())
console.log("To all lower case:", message.toLowerCase())

// Task 3: Extracting Substrings
let sentence = "The quick brown fox jumped over the lazy dog";

let extract = sentence.substring(0, 9);

// Task 4 splitting strings
let text = "Javascript is awesome to learn!"; 
let stringSplit = text.split(" ");

console.log("Extracting substrings:", extract);
console.log("Using split manipulation:", stringSplit)