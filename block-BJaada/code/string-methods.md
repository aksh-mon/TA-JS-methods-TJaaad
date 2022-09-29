Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.charAt(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
  
  -Parameter : accepts (stringDataType) 
  starting and ending with " "

  -Return : New String representing the
   previous string with uppercase
  
  -Example:
   ```js
  
  1. 
    let name = "Akshay";

    name.toUpperCase(); // "AKSHAY"

  2. 
    function upperCase(name){
    return name.toUpperCase();
   }

   let opUc = {
    toUpperCase: upperCase,
   };

   opUC.toUpperCase("anil") // ANIL

  3. 
   const a = String.prototype.toUpperCase.call({
   toString() {
    return null;
   }
   });

   console.log(a);  //   NULL

   ```
 
3. `toLowerCase`
  
  -Parameter : accepts (stringDataType) 
  starting and ending with " "

  -Return : New String representing the
   previous string with lowercase
  
  -Example:
  ```js

  1. 
   let name = "Akshay";

   name.toLowUcerCase(); // "akshay"


  2. 
    function lowerCase(name){
    return name.toLowerCase();
   }

   let opLc = {
    toLowerCase: lowerCase,
   };

   opLc.toLowerCase("AJAY"); // ajay
   
  3.
    alert(AKSHAY.toLowerCase());
  
  ```   

4. `trim`

  -Parameter : accepts (stringDataType) 
   removes whitespace characters (space, 
   tab, no-break space, etc.) from both 
   ends 

  -Return : New String with removed
  whitespaces
  ```js
  1. 
  let message = " HELLO JS   ";

  message.trim(); // 'HELLO JS'

  2.  
   let name = " Naveen     ";
   console.log(name.trim()); //
  
  3.
    function trimStr(name){
    return name.trim();
   }

   let opTrim = {
    trim: trimStr,
   };

   opTrim.trim("  AJAY   "); // 'AJAY'
   

  ```

5. `trimEnd`

  -Parameter : accepts (stringDataType) 
   removes whitespace characters (space, 
   tab, no-break space, etc.) from right 
   end.

  -Return : New String with removed
  whitespaces from right end.
 
   ```js
   1.
  " akshay  ".trimEnd(); // " akshay"
   
  2.
   let name = " fresh     ";

   alert(name.trimEnd());  // " fresh"

  3.
    function trimStrEnd(name){
    return name.trimEnd();
   }

   let opTrimEnd = {
    trimEnd: trimStrEnd,
   };

   opTrimEnd.trimEnd("  AJAY   ");  // '  AJAY'
   
   ```

6. `trimStart`
   -Parameter : accepts (stringDataType) 
   removes whitespace characters (space, 
   tab, no-break space, etc.) from Left 
   end.

  -Return : New String with removed
  whitespaces from Left end.
 
   ```js
   1.
  " akshay   ".trimStart(); // "akshay   "
   
  2.
   let name = " fresh   ";

   cosnsole.log(name.trimStart());  // "fresh   "

  3.
    function trimStrStart(name){
    return name.trimStart();
   }

   let opTrimStart = {
    trimEnd: trimStrStart,
   };

   opTrimStart.trimStart("  AJAY   ");  // 'AJAY   '

7. `concat`
   -Parameter : accepts one or more strings to
    concatenate to form new str.
   -Return : returns a new string with both 
    string concatenate to form new str.

    ```js
   1. 
    firstName = " Gourav ";
    lastName = " sharma ";

    fullName = firstName.concat(" ",lastName) 
    // " Gourav  sharma "
  2.
   function concatStr(name,domain){
    return name.concat("@",domain,".com")
   }
   concatStr("monTy","fresh") 

  // 'monTy@fresh.com'

  3.
    function strConcat(first,second){
    return first.concat(" /*first " ,second, " /*second ");
   }

   let opStrConcat = {
    concat: strConcat,
   };

   opStrConcat.concat("AJAy","Devgun");  
   
   // 'AJAy' /*first Devgun /*second'

     
    ```
8. `endsWith`
  - Parameter : requires str to be checked or 
    evaluated does the str ends with particular 
    str or not?
  
  - Return : it will return true if the given 
    characters are found in the end or not
    returning false.

  ```js
  1.  
    let str1 = 'Red Riding Hood 🏮';

    str1.endsWith('🏮'); // true
    str1.endsWith('Hood'); // false

  2.
   function endsStr(str){
    return str.endsWith("99");
   } 
  
  endsStr("81100") // false
  endsStr("54mmmcuoec99") // true

  3.
   console.log("akshay".endsWith('Y')); // false
   
   console.log("akshay".endsWith('y')); // true

  ``` 

9.  `includes`
  - Parameter : It requires string to be searched for
    within string generally whether the following
    characters are present in the string or not.

  - Return : it will return true or false whether the
   following characters are avialable or not.

   ```js
  1.
    let commonSentance = "a lazy fox";

    commonSentance.includes('Lazy') // false

    commonSentance.includes('lazy') // true

  2.
      function opInc(name,chartInc){

       return name.includes(chartInc); 
      }
  
    opInc("a lazy fox", "Lazy") // false
    
    opInc("a lazy fox", "lazy") // true

   ```
   
10. `indexOf`
  - Parameter : A string whose character index we have
   to find out. The first index is at 0 position.

  - Return : It will return the index of follwing
   str to be searched for.

   ```js
  1. 
  let word = "It\'s okay";

  word.indexOf("okay"); // 5
  
  2.
  let alphabets  = "abcdefghijklmnopqrstuvwxyz";

  alphabets.indexOf("a"); // 0
  alphabets.indexOf("z"); // 25
  
   ```

11. `lastIndexOf`
    - Parameter : A string whose character index we have
   to find out. 

  - Return : It will return the last index of follwing
    str if a str has multiple words it will return
    the last index of that word

   ```js
   let thought = "A lazy frog jumps over lazy dog";

   thought.indexOf("lazy"); // 3

   thought.lastIndexOf("lazy"); // 23

   ```

12. `padEnd`
   - Parameter : it requires two parameter first is target
    length which is total of the character string to the
    padded string as much we want  and second is padString it could be anything

   - Return : it will return a new string with padded
    string.

    ```js
    1.
     let firstName = "Akshay";
     
     firstName.padEnd(9,"# "6 + 3"") // "Akshay###"

    2.

       function demoPad(num){
        return num.padEnd(7,'#');
       }
       
       function addPadEnd(arr){
       let final = []
       for(let num of arr){
         final.push(demoPad(num));
       }
        return final;
       }
      
      console.log(addPadEnd("s"));
      // ['s######']
      console.log(addPadEnd("sS"));
      // ['s######','S######']
    
    3.
     console.log('akshay'.padEnd(10, "%")); 
     // 'akshay%%%%'

    ```

13. `padStart`
    - Parameter : it works same as padEnd but here
    the padding is applied from start of the string.
    it requires two parameters first is targetLength
    and second is padString

    - Return : it will return a new string with padded
     string from the starting.

    ```js
    1.
      let str = "akshay";

      str.padStart("9","*");
      //'***akshay'
    
    2.
       function demoPad(num){
        return num.padStart(7,'#');
       }
       
       function addPadStart(arr){
       let final = []
       for(let num of arr){
         final.push(demoPad(num));
       }
        return final;
       }
      
      console.log(addPadStart("s"));
      // ['######s']
      console.log(addPadStart("sS"));
      // ['######s','######S']
    
    3.
     console.log('akshay'.padStart(10, "%")); 
     // '%%%%akshay'
   
    ```  
14. `repeat`
     - Parameter : an integer between o  and + infinity,
     indicating the no of times you want to repaet the string.
     
     - Return : A new string containing the no of copies
     of the given string.

    ```js

    1.
      let word = " akshay ";

       word.repeat(3); // ' akshay akshay akshay '
    2.

      function demoRepeat(name,n){
        return name.repeat(n)
      }

      demoRepeat(" akshay ",3)
      //' akshay akshay akshay '
    
    3.
      "aska".repeat(3);
      //'askaaskaaska'   
    
    ``` 

15. `replace`
     - Parameter : it can be a string or an object 
       if it's string it will be replaced by a substring matched by pattern.
       If it's a function, it will invoked for every match and it's return value is used as replacement text.
     
     - Return : A new string, with some or all      
       matched patterns replaced by the specified
       replacement.

       ```js
      1.
        let sentence = "A lazy fox"

        sentence.replace('lazy','clever'); 
        // 'A clever fox'
      
        
      2.
          function replace(name,gender){
            if(gender === 'M'){
              return gender.replace('M',`He is ${name}`)
            } else if(gender === 'F'){
              return gender.replace('F', `She is ${name}`)
            }
          }
          
          replace("akshay","M") // 'He is akshay'
          replace("sheetal","F") // 'She is sheetal'

      3.
        let tagline = "lorem dolor sit amet lorem dolor sit amet lorem dolor sit amet lorem dolor sit amet lorem dolor sit amet lorem dolor sit amet" ;

         tagline.replaceAll("dolor","💲"); 
         // 'lorem 💲  sit amet lorem 💲 sit amet lorem 💲 sit amet lorem 💲 sit amet lorem 💲 sit amet lorem 💲 sit amet'

            
       ```       
16. `slice`
    - Parameter : slice generally extracts a section of the
      string and returns  a new string
      it requires two parameter first is index start from
      where the first charcter is to be included and 
      second is index end from where you want to exclude
      the charcters in  the given string.

    - Return : A new string conatining the extracted    
      section of the string.

      ```js
      1.
        let sentance = "A lazy frog jumps over fox";

        sentance.length; // 26
        sentance.slice(0,18); // 'A lazy frog jumps '

      2.
        let statement = " Keep smiling, because life is a beautiful thing and there's so much to smile about. Life is a long lesson in humility. In three words I can sum up everything I've learned about life: it goes on. Love the life you live. Life is either a daring adventure or nothing at all. "
        
        function (statement,x){
           if (x > statement.length){
            return statement.slice(-1,x)
           } else if(x < statement.length){
            return statement.slice(x,-1)
           }         
        }


      
      ```   
17. `split`
18. `substring`
