Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values *(number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array
 
2. `join`
   - Parameter : -seperator specifies a string to separate
     each pair of adjacent elements of array.
     Each elements are seperated with (",").
     if the seperator is an empty string all characters are joined without any characters in between them.  
    
   - Return : a string with all elements joined.
    if arr.length is 0 empty string is returned.

    Example :
    ```js
    
     let x = ['a','b', 'c','d','e'];
     
     x.join() // 'a,b,c,d,e'
     x.join(x) // 'aa,b,c,d,eba,b,c,d,eca,b,c,d,eda,b,c,d,ee'
     x.join('') // 'abcde'
     x.join(" , ") // 'a , b , c , d , e'
     
     x.join(" - ") // 'a - b - c - d - e'
     x.join(" A1 ") 
     // 'a A1 b A1 c A1 d A1 e'      
     x.join(" A1") // 'a A1b A1c A1d A1e'
     x.join("A1 ") // 'aA1 bA1 cA1 dA1 e'

      function joinArray(arra, separator=',')
    {
    let result = ''
    if (typeof separator !== 'string') return "Please, enter the separator as a string"
    for (let i = 0; i < arra.length ; i++) {
        if(i != arra.length - 1) result += arra[i] + separator
        else result += arra[i]
    }
    return result
    }
    
    joinArray([1,2,4,6,7,78,8,9,95,22],"-")
    // '1-2-4-6-7-78-8-9-95-22'

    joinArray(["red",'green','blue','black','white'],"-")
    // 'red-green-blue-black-white'

    function arrToStr(arr, char) {
    return arr.join(char)
    }
    arrToStr(["Red", "Green", "White", "Black"], '+')
    // 'Red+Green+White+Black'

     arrToStr(["Red", "Green", "White", "Black"], ' ++ ')
     // 'Red ++ Green ++ White ++ Black'  
        
    function result(number,separator = ''){
      
      let number = [];
      
      
    }

    ```
     - No it does not mutate the original array
    
    ```

3. `flat`
   - Parameter: An array deeply nested. it accepts one 
     parameter i.e number upto which layer you want to make it flat if so the nested element is too long
    then you can use "infinity" where it will make every
    nested element flat.

   - Return : An array with the sub-array elements concatenated into one.
  
   ```js
    
     let arr = [1,2,3,[4,5]];
     arr.flat();
     //[1, 2, 3, 4, 5]
    
     let arr = [1,3, , , , 44,[33,32,33, ,[2,3,44,21,[1, ,22,22,]]]];
     arr.flat(Infinity)
    // [1, 3, 44, 33, 32, 33, 2, 3, 44, 21, 1, 22, 22]
          
    ```    
    - No it does not mutate the original array
 

   ```
4. `push`

  - Parameter : An Element to add to the end of the array
     even you can add more than one elements

  - Return : An array with element added to the end of an
    array

    ```js
    let colors = ["red","blue","green","black","white"];
    colors.push('aqua');

    // ["red","blue","green","black","white","aqua"];
    
     let colors = ["red","blue","green","black","white"];
    colors.push('aqua','magenta','gray');

   // ["red","blue","green","black","white","aqua","magenta","gray"];
  
     let myArray = [];
 
    function addToArray(element) {
    myArray.push(element);
    }

     addToArray("item1");
     addToArray("item2");
     addToArray("item3");

     console.log(myArray); 
     // will output ["item1", "item2","item3"]    
   
     ```    
    - it does mutates the original array 
    
    ``` 
5. `indexOf`
  - Parameter : It compares and search elements to locate  in the array  

  - Return :  The first index of the element in the arrray
   -1(if element is not found in an array)

  ```js
  <!-- 1 -->
  let number = [1,2,3,4,5,56,6,7,8,9,9,];
  number.indexOf(1) // 0
  number.indexOf(9) // 9
  number.indexOf(91) // -1
  
  <!-- 2 -->

  let colors = ["red","blue","green","black"];
  
  function newEntry(colors,color){
    if(colors.indexOf(color) === -1){
      colors.push(color);
      console.log(`New Entry is ${colors}`)
    }else{
      console.log(`${color} already exists!`)
    }
  }
   // newEntry(colors,"red") red already exists!
   // newEntry(colors,"pink") New Entry is red,blue,green, black,pink

   <!-- 3 -->
  
   let myArray = ["item1","item2","item3","item4","item5",];

   function findIndex(element,arr){
    for(let i =0; i < arr.length; i++){
      if(arr[i] === element){
        return i;
      }
    }
    return -1;
   }
   let index = findIndex("item3",myArray);
   console.log(index); // 2

 - No it does not mutate the original array
 
  ``` 
6. `lastIndexOf`
   
  - Parameter : It compares and search elements to locate  in the array  

  - Return :  The last index of the element in the arrray
   -1(if element is not found in an array)

  ```js
  <!-- 1 -->
  let number = [1,2,3,4,5,56,6,7,8,9,9,];
  number.lastIndexOf(9) // 10
  
  <!-- 2 -->
   let myArray = ["item1", "item2", "item3", "item3"];
   let index = myArray.lastIndexOf("item3");
  console.log(index); // will output 3

  <!-- 3 -->

  let text = "Hello this is me akira";
  cosnsole.log(text.lastIndexOf('akira')); // 17
  
 - No it does not mutate the original array
 
  ```
  
7. `includes`

   - Parameter : It includes whether an element
    exist in an array  or by checking if a string contains
    a specific substring

  - Return : True or False whether element exists or
   not.

  ```js

  <!-- 1 -->
  let myArray = ["item1", "item2", "item3", "item4"];
  
  console.log(myArray.includes("item1")) // true
  console.log(myArray.includes("itemx")) // false

  <!-- 2 -->

  let senetence = "anytime everywhere all at once";
  
   console.log(senetence.includes("anytime")) // true
   
   console.log(senetence.includes("a")) // true
      
   console.log(senetence.includes("aa")) // false

  <!-- 3 -->
  let numbers = [1, 2, 3, 4, 5];
   
   console.log(numbers.includes(3, 3)); // Output: false
   
   console.log(numbers.includes(4, 3)); // Output: true

  
 - No it does not mutate the original array

  ```

8. `reverse`
    - Parameter : It accepts an array and reverse its      index such that the first element
     of the array becomes last and vice-versa.

    - Return : It returns the reference to the original
     array ,now reversed 

   ```js
   
   <!-- 1 -->

   let myArray = ["item1","item2","item3","item4","item5",];

   console.log(myArray.reverse()); 
   // ['item5', 'item4', 'item3', 'item2', 'item1']
   
    <!-- 2 -->
    
    let numbers = [1, 2, 3, 4, 5];
    console.log(numbers); // Output: [1, 2, 3, 4, 5]
    numbers.reverse();
    console.log(numbers); // Output: [5, 4, 3, 2, 1]

    <!-- 3 -->
    let names = ["Alice", "Bob", "Charlie", "David"];
    names.reverse().forEach(name => console.log(name));
    // Output: "David" "Charlie" "Bob" "Alice"

   ```  
  -  it does mutates the original array

9. `every`
   - Parameter: A callback function to execute for each
     element in the array to check if all elements in an array pass a test implemented by a provided function.

   - Return: A boolean value indicating whether all the 
    elements passed th test or not

    ```js

   <!-- 1 -->
   let numbers = [1, 2, 3, 4, 5];

   let allPositive = numbers.every(function(number) {
   return number > 0;
   });
  console.log(allPositive); // Output: true

   <!-- 2 -->
   
   let allEven = numbers.every(num => num % 2 === 0);
   console.log(allEven); // Output: false

  <!-- 3 -->
   let names = ["Alice", "Bob", "Charlie", "David"];

   let allLongNames = names.every(name => name.length > 3);

   console.log(allLongNames); // Output: true

    ```  
  -  it doesnot mutates the original array

10. `shift`
  
  - Parameter : It accepts an array and remove the first   element from the array
  
  - Return : Removes the first element from an array
   and returns it , undefined if the array is empty

   ```js

   <!-- 1 -->

  let numbers = [1, 2, 3, 4, 5];
  
  console.log(numbers.shift();) // 1
  // output : [2,3,4,5]

  <!-- 2 -->
  
  let numbers = [1, 2, 3, 4, 5];
  let firstBigNumber = numbers.filter(num => num > 2). shift ();
  console.log(firstBigNumber); // Output: 3
  console.log(numbers); // Output: [1, 2, 3, 4, 5]

  <!-- 3 -->

   let colors = ["red", "green", "blue", "yellow", "purple"];
   let firstTwoColors = colors.shift(2);
   console.log(firstTwoColors); // Output: ["red", "green"]
   console.log(colors); // Output: ["blue", "yellow",    "purple"]
  
   ```
   -  it does mutates the original array

11. `splice`

   - Parameter : It accepts an array and changes the content of an array by removing or replacing existing
   elements in place.

   - Return : An array containing the deleted elements
   or an empty array if no element is deleted.

   array.splice(start, deleteCount, item1, item2, ...);

   ```js
   <!-- 1 -->
   
   let fruits = ["apple", "banana", "orange"];
   
   fruits.splice(1, 0, "mango");

   console.log(fruits); // Output: ["apple", "mango",    "banana", "orange"]

  <!-- 2 -->

   let numbers = [1, 2, 3, 4, 5];
   numbers.splice(2, 1, 10);
   console.log(numbers); // Output: [1, 2, 10, 4, 5]
   
   <!-- 3  -->
   function addElement(arr, index, element) {
  arr.splice(index, 0, element);
  return arr;
  }
  let fruits = ["apple", "banana", "orange"];
  console.log(addElement(fruits, 1, "mango")); 
  // Output: ["apple", "mango", "banana", "orange"]

   ```
  -  it does mutates the original array


12. `find`
  - Parameter: It requires a function to execute in js
   to find the first truthy value if condition satisy
   if not 'undefined' is returned.

  - Return: The first Element which satisy above condition

  ```js

  <!-- 1 -->
  let numbers = [1, 2, 3, 4, 5, 6];
  let firstEvenNumber = numbers.find(function(number) {
  return number % 2 === 0;
   });
  console.log(firstEvenNumber); // Output: 2

  <!-- 2 -->

  let firstBigNumber = numbers.find(num => num > 3);
  console.log(firstBigNumber); // Output: 4
  
   <!-- 3 -->

    let users = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"},
    {id: 3, name: "Charlie"}
     ];
     let user = users.find(user => user.name === "Bob");
     console.log(user); // Output: {id: 2, name: "Bob"}
      
  ```
  -  it doesnot mutates the original array

13. `unshift`
  - Parameter : It requires an array and add one or more 
   elements to the beginning of an array.

  - Return : An array with added elements to the    beginning  of an array.

  ```js
  <!-- 1 -->
   
   let arr = [789,456,111];
   console.log(arr.unshift(111,112,113));
   // [111, 112, 113, 789, 456, 111]

   <!-- 2 -->

   let colors = ["green", "blue"];
   colors.unshift("red", "yellow");
   console.log(colors); 
   // ["red", "yellow", "green", "blue"]

   <!-- 3 -->
   let numbers = [4,5];
   numbers.unshift(1, 2, 3);
   numbers.forEach(num => console.log(num));
   // Output: 1 2 3 4 5

  ```
  
  -  it does mutates the original array

14. `findIndex`
  
  - Parameter: It requires a function to execute in js
   to find the first truthy value if condition satisy
   if not 'undefined' is returned.

  - Return: The first Element which satisy above condition
  
   ```js
   <!-- 1 -->
   let numbers = [1, 2, 3, 4, 5, 6];
   let firstEvenNumberIndex = numbers.findIndex(function   (number) {
     return number % 2 === 0;
   });
   console.log(firstEvenNumberIndex); // Output: 1
   
   <!-- 2 -->
   let users = [
    {id: 1, name: "Alice"},
    {id: 2, name: "Bob"},
    {id: 3, name: "Charlie"}
   ];
   let userIndex = users.findIndex(user => user.name ===    "Bob");
   console.log(userIndex); // Output: 1

  <!-- 3 -->
    let mixedArray = [1, "two", 3, "four", 5];
    let firstNonNumberIndex = mixedArray.findIndex(element =>     typeof element !== 'number');
    console.log(firstNonNumberIndex); // Output: 1


   ```
  
  -  it doesnot mutates the original array
     
15. `filter`

   - Parameter: It requires a function to execute in js
   to find the first truthy value if condition satisy
   if not 'undefined' is returned.
   it creates a shallow copy of a portion. shallow copy means an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.

  - Return: The first Element which satisy above condition

  ```js
  <!-- 1 -->
   
   let numbers = [1, 2, 3, 4, 5, 6];
   let evenNumbers = numbers.filter(function(number) {
     return number % 2 === 0;
   });
   console.log(evenNumbers); // Output: [2, 4, 6]
  
  <!-- 2 -->
   let words = ["apple", "banana", "orange", "lemon", "lime"];
  let longWords = words.filter(word => word.length > 5);
  console.log(longWords); // Output: ["banana", "orange"]

  <!-- 3 -->
  const students = [
  { name: "John", grade: "A" },
  { name: "Mike", grade: "C" },
  { name: "Sarah", grade: "B" },
  { name: "Bob", grade: "A" }
   ];
   const studentsWithGradeA = students.filter(student =>    student.grade === "A");
   console.log(studentsWithGradeA); 
   // [{ name: "John",    grade: "A" }, { name: "Bob", grade: "A" }]

   ```
  -  it doesnot mutates the original array


16. `flat`

   - Parameter: An array deeply nested. it accepts one 
     parameter i.e number upto which layer you want to make it flat if so the nested element is too long
    then you can use "infinity" where it will make every
    nested element flat.

   - Return : An array with the sub-array elements concatenated into one.
  
   ```js
    
     let arr = [1,2,3,[4,5]];
     arr.flat();
     //[1, 2, 3, 4, 5]
    
     let arr = [1,3, , , , 44,[33,32,33, ,[2,3,44,21,[1, ,22,22,]]]];
     arr.flat(Infinity)
    // [1, 3, 44, 33, 32, 33, 2, 3, 44, 21, 1, 22, 22]
          
    ```    
    - No it does not mutate the original array
 

   ```
17. `forEach`
     - Parameter : This method accepts one parameter i.e
      call back function for each element in an array.
      it iterate over the elements of an array.

    - Return : Its return value is undefined.

    ```js
     <!-- 1 -->

     let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

      let allNumbers = "";

      numbers.forEach(forEachNumber);

     function forEachNumber(num){
      allNumbers += num + " ";
     }
    
    console.log(allNumbers);
    // 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 
    
    <!-- 2 -->

    let numbers = [1, 2, 3, 4, 5];

     numbers.forEach(function(element, index, array) {
    console.log(element);
    });
    // 1
    // 2
    // 3
    // 4
    // 5 

    <!-- 3 -->
      let numbers = [1, 2, 3, 4, 5];
      let sum = 0;
      numbers.forEach(function(element) {
     sum += element;
      });
    console.log(sum); // 15
  
    ```      
    - No it does not mutate the original array
 
18. `map`
    - Parameter: This method accepts one parameter i.e
      call back function for each element in an array.
      it iterate over the elements of an array and store
      those value in an array.

    - Return :This method returns a new array with  modified elements ,whereas forEach doesn't.  

    ```js
    
     <!-- 1 -->
     
     let numbers = [1, 2, 3, 4, 5];
     let doubleNumbers = numbers.map(function(element) {
     return element * 2;
     });
     console.log(doubleNumbers); // [2, 4, 6, 8, 10]
    
    <!-- 2 -->
     
     let people = [
    { name: 'Walter', age: 50 },
    { name: 'Saul', age: 55 },
    { name: 'Jessie', age: 30 }
    ];
    let names = people.map(function(person) {
    return person.name;
   });
   console.log(names); // ['Walter','Saul','Jessie']

    <!-- 3 -->
    let students = [
      {name:"akshay", lastname: "kumar"},
      {name:"akhil", lastname: "kumar"},
      {name:"akash", lastname: "kumar"},
      {name:"akshit", lastname: "kumar"},
    ];

    students.map(getFullName);

    function getFullName(item){
      return [item.name,item.lastname].join(' ');
    }

    //  ['akshay kumar', 'akhil kumar', 'akash kumar', 'akshit kumar']

    ```
   - No it does not mutate the original array
  
19. `pop`
   - Parameter: Accepts an array and removes the last element from the array

   - Return: The removed element from the array;
    undefined if the array is empty

    ```js
    
    <!-- 1 -->
    
    myArray = [1,2,4,5,6,7,8,89];

    console.log(myArray.pop()); // 89
    
    // [1, 2, 4, 5, 6, 7, 8]
    
    <!-- 2 -->
    
    colors = ['red','blue','green','yellow',]

    console.log(colors.pop()); // 'yellow'

    // ['red','blue','green',]

    <!-- 3 -->
   
    numbers = [1,2,4,5,6,7,8,4,4,2,2,3,3];

    console.log(numbers.pop()); // 3
    // [1,2,4,5,6,7,8,4,4,2,2,3]
    ```
   - It does mutate the original array
   
20. `reduce`
    - Parameter : It accepts two parameter a callback fxn
    and an initial value.

  The callback function takes four parameters:

  accumulator (required): the accumulator accumulates the  callback's return values; it is the accumulated value   previously returned in the last invocation of the   callback, or initialValue, if supplied.

  currentValue (required): the current element being   processed in the array.

  currentIndex (optional): the index of the current element   being processed in the array.

  array (optional): the array reduce was called upon.

    - Return :  It returns the value that runs from the "reducer" callback function to completion over the entire array.

    ```js

    <!-- 1 -->

    let colors = ["Violet","Indigo","Blue","Green","Yellow","Orange","Red"];

    let allColors = colors.reduce((acc,color) =>{
     return acc + color;
    },"");

    console.log(allColors);
    // 'VioletIndigoBlueGreenYellowOrangeRed'

    <!-- 2 -->

      var arr = [[0, 1], [2, 3], [4, 5]];
      var flat = arr.reduce(function(a, b) {
        return a.concat(b);
      }, []);
      console.log(flat); // Output: [0, 1, 2, 3, 4, 5]

    <!-- 3 -->

    var names = ['Alice', 'Alice', 'Bob', 'Tiff', 'Bruce', 'Alice','Bob', 'Bob', 'Bob', 'Alice',];
    var nameCount = names.reduce(function(allNames, name) { 
      if (name in allNames) {
        allNames[name]++;
      }
      else {
        allNames[name] = 1;
      }
      return allNames;
    }, {});
    console.log(nameCount); 
   // output: {Alice: 4, Bob: 4, Tiff: 1, Bruce: 1}
    ```
    - It doesnot mutate the original array

21. `slice`

  - Parameter : It starts with two parameter start value  and End Value. It creates a shallow copy to the reference
  of an object. It is used to extrct a section of an array

  - Return : A new array containing the extracted element.

  ```js
  
  <!-- 1 -->
  
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  numbers.slice(0,5)
  // [1,2,3,4,5]

  <!-- 2 -->
  
  var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

  var newColors = colors.slice(1, 4);
  console.log(newColors); 
  
  // Output: ['orange', 'yellow',  'green']

  <!-- 3 -->

  var words = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

  var firstThree = words.slice(0, 3);
  console.log(firstThree); 
  // Output: ['the', 'quick', 'brown']

  ```
  - It doesnot mutate the original array
 
22. `some`
  - Parameter : It accepts a callback function and that callback back function need to return true atleast once
  for an element otherwise false.

  -Return : Either True if any of the element contains the value, if not false
 
  ```js
  <!-- 1 -->

  let name = ['akshay','ankit','avin','antriksh','ajay'];
 
  let ret = name.some(function(name){
    return name === 'akshay';
  }); 

  console.log(ret); // true

  <!-- 2 -->
  
  let myArray = [1, 2, 3, 4];

  let hasEven = myArray.some(function(element) {
    return element % 2 === 0;
  });

  console.log(hasEven); 
  // true, because 2 is an even number   in the array
  
  <!-- 3 -->
  
  let myArray3 = [
    {name: "John", age: 25}, {name: "Mary", age: 30}
    ];

  let hasAgeGreaterThan25 = myArray3.some(function(element) {
  return element.age > 25;
  });  

  console.log(hasAgeGreaterThan25); // true

  ```
  
  - It doesnot mutate the original array
 
