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

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
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

3. `flat`
4. `push`
5. `indexOf`
6. `lastIndexOf`
7. `includes`
8. `reverse`
9. `every`
10. `shift`
11. `splice`
12. `find`
13. `unshift`
14. `findIndex`
15. `filter`
16. `flat`
17. `forEach`
18. `map`
19. `pop`
20. `reduce`
21. `slice`
22. `some`
