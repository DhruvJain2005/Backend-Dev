const {
  capitalizeString,
  reverseString,
  countVowels
} = require("./stringUtils");

const text = "Dhruv";

console.log("Capitalized:", capitalizeString(text));
console.log("Reversed:", reverseString(text));
console.log("Vowel Count:", countVowels(text));