let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord(words) {
  let longestWord = "";
  words.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });
  return longestWord;
}

console.log(findLongestWord(words));

// - Convert the above array "words" into an array of length of word instead of word.
function convertToLengthArray(words) {
  let lengthArray = [];
  words.forEach(word => {
    lengthArray.push(word.length);
  });
  return lengthArray;
}

console.log(convertToLengthArray(words));

// - Create a new array that only contains word with atleast one vowel.
function filterWordsWithVowel(words) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return words.filter(word => {
    for (let i = 0; i < word.length; i++) {
      if (vowels.includes(word[i].toLowerCase())) {
        return true;
      }
    }
    return false;
  });
}

console.log(filterWordsWithVowel(words));

// - Find the index of the word "rhythm"
function findIndexOfWord(words, targetWord) {
  let index = -1;
  words.forEach((word, i) => {
    if (word === targetWord) {
      index = i;
      return;
    }
  });
  return index;
}

console.log(findIndexOfWord(words, "rhythm"));

// - Create a new array that contians words not starting with vowel.
function filterWordsNotStartingWithVowel(words) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return words.filter(word => !vowels.includes(word[0].toLowerCase()));
}

console.log(filterWordsNotStartingWithVowel(words));

// - Create a new array that contianse words not ending with vowel
function filterWordsNotEndingWithVowel(words) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return words.filter(word => !vowels.includes(word[word.length - 1].toLowerCase()));
}

console.log(filterWordsNotEndingWithVowel(words));

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(numbers) {
  let sum = 0;
  numbers.forEach(number => {
    sum += number;
  });
  return sum;
}

console.log(sumArray(numbers));

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
function multiplyByThree(numbers) {
  return numbers.map(number => number * 3);
}

console.log(multiplyByThree(numbers));

// - Create a new array that contains only even numbers

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// - Create  a new array that contains only odd numbers.

let oddNumbers = numbers.filter(num => num % 2 === 1);
console.log(oddNumbers);
// - Create a new array that should have true for even number and false for odd numbers.
const newArray = numbers.map(num => num % 2 === 0);

console.log(newArray);
// - Sort the above number in assending order.
const sortedNumbers = numbers.sort((a, b) => a - b);

console.log(sortedNumbers);


// - Does sort mutate the original array?
  // yes

// - Find the sum of the numbers in the array.
const sum = numbers.reduce((acc, cur) => acc + cur, 0);

console.log(sum)
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(numbers) {
  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum / numbers.length;
  }
  
  console.log(averageNumbers(numbers));
  
  
let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(words) {
  const sum = words.reduce((acc, cur) => acc + cur.length, 0);
  return sum / words.length;
  }
  
  console.log(averageWordLength(strings));