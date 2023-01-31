// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
    console.log(numbers.indexOf(101));

// - Find the last index of `9` in numbers
    console.log(numbers.lastIndexOf(9));

// - Convert value of strings array into a sentance like "This is a collection of words"
    console.log(strings.join(" "));

// - Add two new words in the strings array "called" and "sentance"
// let sortedArr = [...strings];
// sortedArr.push("called", "sentance");

// console.log(sortedArr);

strings.splice(0,0,"called", "sentance");
// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

strings.join(" ");

// - Remove the first word in the array (strings)

strings.unshift();

// - Find all the words that contain 'is' use string method 'includes'
var filteredWords = strings.filter(word => word.includes('is'));
console.log(filteredWords); 
 
// - Find all the words that contain 'is' use string method 'indexOf'
var filteredWords = strings.filter(word => word.indexOf("is") !== -1);
console.log(filteredWords); 

// - Check if all the numbers in numbers array are divisible by three use array method (every)

var isDivisible = numbers.every(number => number % 3 === 0);
console.log(isDivisible); 

// -  Sort Array from smallest to largest

numbers.sort((a, b) => a - b);

// - Remove the last word in strings
    console.log(strings.pop());

// - Find largest number in numbers
   var largest = numbers.sort((a, b) => a - b).pop();
   console.log(largest); // 101

// - Find longest string in strings

// var longest = "";
// for (var i = 0; i < sortedArr.length; i++) {
//     if (sortedArr[i].length > longest.length) {
//         longest = sortedArr[i];
//     }
// // 
// console.log(longest); 

let longestString = strings.sort((a, b) => a.length - b.length).pop();
console.log(longestString); 


// - Find all the even numbers

var evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); 

// - Find all the odd numbers
var oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(oddNumbers); 

// - Place a new word at the start of the array use (unshift)
console.log(strings.unshift("it"))
// - Make a subset of numbers array [18,9,7,11]
var subset = numbers.slice(3, 6);
console.log(subset); 

// - Make a subset of strings array ['a','collection']
var subset = strings.slice(2,4);
console.log(subset); 

// - Replace 12 & 18 with 1221 and 1881
// var newNumbers = sortedNum.map(number => {
//     if (number === 12) return 1221;
//     if (number === 18) return 1881;
//     return number;
// });
// console.log(newNumbers); 
console.log(
  numbers.map((num) =>{
    if(num === 12){
      return 1221;
    } else if (num === 18){
      return 1881;
    } else{
      return num;
    }
  })
// - Replace words in strings array with the length of the word

// var newStrings = sortedArr.map(string => string.length);
// console.log(newStrings); 
 stringsLength = strings.map((string) => string.length);

 console.log(stringsLength)

// - Find the sum of the length of words using above question

// var newStrings = sortedArr.map(string => string.length);
// var sum = newStrings.reduce((acc, val) => acc + val, 0);
// console.log(sum); 



// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
var filteredCustomers = customers.filter(customer => customer.firstname[0] === 'J');
console.log(filteredCustomers);

// - Create new array with only first name
var firstNames = customers.map(customer => customer.firstname);
console.log(firstNames); 

// - Create new array with all the full names (ex: "Joe Blogs")
var fullNames = customers.map(customer => customer.firstname + " " + customer.lastname);
console.log(fullNames); 

// - Sort the array created above alphabetically

console.log([...fullNames].sort());
// - Create a new array that contains only user who has at least one vowel in the firstname.

// var vowels = ['a','e','i','o','u','A','E','I','O','U'];
// var filteredCustomers = customers.filter(customer => {
//     for (let i = 0; i < customer.firstname.length; i++) {
//         if (vowels.includes(customer.firstname[i])) return true;
//     }
//     return false;
// });
// console.log(filteredCustomers);


let vowelCustomer = customers.filter((customer)=>{
  if(
    customer.firstname.toLowerCase().includes("a") ||
    customer.firstname.toLowerCase().includes("e") ||
    customer.firstname.toLowerCase().includes("i") ||
    customer.firstname.toLowerCase().includes("o") ||
    customer.firstname.toLowerCase().includes("u") 
  ){
    return true;
  }else{
    return false;
  }
});
