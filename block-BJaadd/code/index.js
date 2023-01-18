// let colors = [
// "Red",
// "Pink",
// "Orange",
// "Yellow",
// "Purple",
// "Green",
// "Blue",
// "Brown",
// ]

// let numbers = [1,2,3,4,5,6,7,8,9,12,14,15,22,33,44,22,11,99,55,54,33,22,
//     11,99];

//  function double(number,index,arr){
//     console.log(number,index,"🐒")
//     return number * 2;
//  }

//  let doubleNumbers = numbers.map(double);

//  console.log(doubleNumbers);
    
// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//      console.log(number);
// }


// let allNumbers = "";

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     //  console.log(number);
  
//     allNumbers += number + "x ";
// }

// console.log(allNumbers);

//  function log(color){
//     console.log(color);
//  }

//  colors.forEach(log);

//  numbers.forEach(function(number){
//     console.log(number);
//  });

//  numbers.forEach( (num) => console.log(num));

// let isOdd = function(num){
//    return num % 2 !==0;
// };


// let isEven = function(num){
//    return num % 2 ==0;
// };

// function filter(arr,cb){
//    let finalArray = [];

//    for(let num of arr){
//       if(cb(num)){
//          finalArray.push(num);
//       }
  
//    }
//    return finalArray;
// }

// console.log(filter(numbers,isOdd));
// console.log(filter(numbers,isEven));

// let message = "Hello World!";

// let point = 100.232312322;


let colors = ["red","blue",'green','pink'
             ,'orange','violet','gray','black'];


 let numbers = [1,2,3,54,56,26,49,31,33,27,
                 12,63,22,32,34,4,2,342,];

function isTwelve(num){
    return num > 120;
}

let findReturn = numbers.find(isTwelve);

let findIndexReturn = numbers.findIndex(isTwelve);
// function double(number){
//     return number * 2;
// }

// let doubleNumbers = numbers.map(double);

// console.log(doubleNumbers);

// function isEven(num){
//      return num % 2 ===0;
// }

// let evenNumbers = numbers.filter(isEven);

// console.log(evenNumbers);