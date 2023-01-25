// After knowing about string methods, practice those by solving problems given below.

let from = 'Syrio Forel';
let quote = 'There is only one thing we say to death: Not today';
let to = 'Arya Stark';

/*
1. Find the index of the first 'is' in the variable quote. And store it in a new variable named indexOfIs
*/
let indexOfIs = 
quote.indexOf("is");

console.log(indexOfIs);
/*
2. Find the character at the index indexOfIs (Problem 1) in quote.
*/
quote.charAt(indexOfIs);
/*
3. Log the message saying `The index of first is in quote is 7`
*/
console.log(`The index of first 'is' in quote is ${indexOfIs}`);

/*
4. Log the message for first 6 characters of quote like this.
  The character at index 0 is 'T'
  The character at index 1 is 'h'
  The character at index 2 is 'e'
  The character at index 3 is 'r'
  The character at index 4 is 'e'
  The character at index 5 is ' '
*/
for (let i = 0; i < 6; i++) {
  console.log(`The character at index ${i} is '${quote[i]}'`);
}

/*
5. Using the variable from , to and quote variable dispaly this message
  "Syrio Forel said There is only one thing we say to death: Not today to Arya Stark." (use concat method)
*/
let message = from.concat(" said ", quote, " to ", to, ".");
console.log(message);

/*
6. Does from, to and quote ends with "rk". Check all three.
// */
// let strings = [from, quote, to];
// for (let i = 0; i < strings.length; i++) {
//   console.log(strings[i].endsWith("rk"));
// }
 from.endsWith("rk");
 quote.endsWith("rk");
 to.endsWith("rk");
/*
7. Does quote includes the word "Only"
*/
console.log(quote.includes("Only"));

/*
8. Does quote includes the word " we"
*/
console.log(quote.includes("we"));

/*
9. Find the index of the the word `we` in quote
*/

console.log(quote.indexOf("we"));

/*
10. Split the quote into individual word and store it in a variable name quoteSplitted
*/
let quoteSplitted = quote.split(" ");
console.log(quoteSplitted);

/*
11. Change the word "today" in quoteSplitted to "tomorrow" and join all the words to form a sentance.
*/
// let newQuoteSplitted = quoteSplitted.map( word => word === "today" ? word = "tomorrow" : word);
// let newQuote = newQuoteSplitted.join(" ");
// console.log(newQuote)

let index = quoteSplitted.indexOf("today");

quoteSplitted[index] = "tomorrow";

quoteSplitted.join(" ");
/*
12. Find the index of second "o" in quote. Use indexOf
*/ 
// let firstIndex = quote.indexOf("o");
// let secondIndex = quote.indexOf("o", firstIndex + 1);
// console.log(secondIndex);

console.log(quote.indexOf("o",8));
/*
13. Find the last index of letter "a" in quote.
*/
let lastIndex = quote.lastIndexOf("a");
console.log(lastIndex);

/*
14. Find the second last index of letter "a" in quote.
*/
let secondLastIndex = quote.lastIndexOf("a", lastIndex - 1);
console.log(secondLastIndex);

/*
15. Make the quote 70 character long. If it has less characters add rest as .......
Example: "Hello" (convert to 10 characters) => "Hello....."
Store the output in a new variable
// */
// let startQuote = quote;
// if(quote.length < 70) {
//     startQuote = quote.substring(0, 70);
//     let dots = ".".repeat(70 - startQuote.length);
//     startQuote = startQuote.concat(dots);
// }
// console.log(startQuote);

let max = 70;

let length = quote.length;

let newQuote = quote + ".".repeat(max-length);
console.log(newQuote);
/*
16. Do same as (15) but the ... should come in start. Store the output in a new variable
*/
// let endQuote = quote;
// if(quote.length < 70) {
//     let dots = ".".repeat(70 - quote.length);
//     endQuote = dots.concat(quote);
// }
// console.log(endQuote);

let newStartQuote =  ".".repeat(max-length) + quote;
console.log(newStartQuote);

/*
17. Log the repeat of "Hello World!" 10 times.
*/
console.log(" Hello World!".repeat(10));
/*
18. Replace today to tomorrow in quote.
*/
console.log(quote.replace("today","tomorrow"));
/*
19. Replace Stark to Lannister in quoteTo
*/
console.log(to.replace("Stark","Lannister"))
/*
20. Make the quote of length 30 and put ... at the end. (use slice)
*/
quote = quote.slice(0,30) + "...";
console.log(quote);
/*
21. Find out does quote, from, to starts with "A"
*/
// let result = [quote, from, to];

// result.forEach(function(str) {
//   console.log(str.startsWith("A"));
// });

 console.log(
  quote.startsWith("A"));
  
 console.log(
  from.startsWith("A"));

  console.log(
   to.startsWith("A"));