let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits);
// Add a new element ('Papaya') into fruits array at end
fruits.push('Papaya');
console.log(fruits);
// Remove the last element from fruits array
fruits.pop();
// console.log(fruits);
console.log(fruits);
// Log the current length of fruits array
 console.log(fruits.length);
// Remove the first element from fruits and log the value of fruits (use delete arr[0])
  delete fruits[0];
  console.log(fruits);
// Log the element on index 0 and 1
   console.log(fruits[0],fruits[1])
// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)
fruits.shift(-1);
console.log(fruits); 
// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.unshift('Guava');
console.log(fruits); 
// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
fruits.unshift('Dragon Fruit');
console.log(fruits); 

// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not
console.log(fruits[0] === 'Dragon Fruit', fruits[1] === 'Guava');

// Update the value of index 1 to `Pears`
fruits[1] = "Pears";
console.log(fruits); 

// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
fruits.splice(1,0, 'Kiwi','Lemon');
console.log(fruits);

// Remove (slice) all the element from index 5
console.log(fruits.slice(0,5));

// Create another array named moreFruits with values ['Berries', 'Melons']

 var moreFruits = ['Berries', 'Melons'];

// Concat moreFruits into fruits array (re-assign so the value gets updated)
    
   let allFruits = fruits.concat(moreFruits);
 
// Log the name of all fruit in console    
      console.log(allFruits);
// Convert each fruit name to lowercase and log it
   toLower = allFruits.map(function(x){return x.toLocaleLowerCase();})
   console.log(toLower);

// Convert all fruits name into lowercase and store in new array named lowercaseFruits
   var lowercaseFruits = toLower;
   console.log(lowercaseFruits);
// Convert all fruits name into uppercase and store in new array named uppercaseFruits
uppercaseFruits = allFruits.map(function(x){return x.toLocaleUpperCase();})
console.log(uppercaseFruits);

let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
 console.log(numbers.flat(1));  
// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)
console.log(numbersTwo.flat(2));
// Convert the numbersThree array to one level element.
console.log(numbersThree.flat(Infinity));
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.
  numbersThree =numbersThree.flat(Infinity);
  console.log(numbersThree) 
// Use forEach to log all the elements of numberThree array
//   function forEachElement(number){
//     console.log(number);
//   } 
//  numbersThree.forEach((number) => forEachElement(number));

 function log(number){
  console.log(number); 
} 

 numbersThree.forEach(log);

// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
doubleNumbers = numbersThree.map(function(x){
    return x * 2;
})

console.log(doubleNumbers);
// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map
tripleNumbers = numbersThree.map(function(x){
    return x * 3;
})

console.log(tripleNumbers);

// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map
halfNumbers = numbersThree.map(function(x){
    return x / 2;
})

console.log(halfNumbers);

// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array
let oddNumbers = numbersThree.map(function(x){
    return x % 2 === 1;
})
console.log(oddNumbers);

// Create a new variable named evenNumbers that store all the even numbers in numbersThree array
evenNumbers = numbersThree.map(function(x){
    return x % 2 === 0 ;
})

console.log(evenNumbers);

// Find the index of 10 in numbersThree array
 console.log(numbersThree.indexOf(10));
// Reverse the values of numbersThree array
console.log(numbersThree.reverse());
// Reverse the values of numbersTwo array
console.log(numbersTwo.reverse());
// Join all fruits with '-', convert to uppercase and log it
   let upper = fruits.map(element => {
    return element.toUpperCase();
   }
    )
    console.log(upper.join("-"));
// Join all fruits with '&', convert to lowercase and log it
let lower = fruits.map(element => {
    return element.toLowerCase();
   }
    )
    console.log(lower.join("&"));