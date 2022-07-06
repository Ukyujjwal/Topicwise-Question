//  Creating a string
/*const string = 'The revolution will not be televised.';
 console.log(string);

// if yoy previously defined the variable string
 const badString = string;
 console.log(badString);*/

// Escape
  /*const bigmouth = 'I\'ve got no right to take my place...'
    console.log(bigmouth);*/

// Use of back tick ` and $()
 /*const name = 'Jack';
 const greeting = `Hello, ${name}`;
 console.log(greeting);*/ 

  /*const one = 'Where are you!';
  const two = 'I,am at jamalpur';
  const join = `${one}${two}`;
  console.log(join);*/

  /*const button = document.querySelector('button');
  function greet() {
  const name = prompt('What is your name?');
  alert(`Hello ${name}, nice to see you!`);
}  
    button.addEventListener('click', greet);*/


    /*const firstname = 'Jack';
    const lastname = 254;
    console.log(firstname+' '+lastname);*/

//Simply we use Number() to covert anything into number & use toString() to convert anything into string 
/*const myString = '123';
const myNum = toString(myString);
console.log(typeof myNum);*/

// including expression
/*const song = 'Love Dose';
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of
 ${score/highestScore * 100}%. `;
 console.log(output);*/

//  Multiline String
 /*const output = `Samsung is a good phone.\nI love samsung a lot!`;
 console.log(output);*/

// find lenght,char of the string
/*const String = 'Samsung';
console.log(String.length); 
console.log(String[6]);
console.log(String[String.length-3]);*/

  
// find largest num among three
/*function max_of_three(a, b, c)
  {
    max_val = 0;
    if (a > b){
      max_val = a;
    } else
    {
      max_val = b;
    }
    if (c > max_val){
      max_val = c;
    }
    return max_val;

  }// program to display the sum of natural numbers

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));


// sum of n natural number
let sum = 0, i = 1;
// looping from i = 1 to number
while(i <= number) {
    sum += i;
    i++;
}
  console.log(max_of_three(0, 2, 9));*/

   /*let num = 5;
   let sum = 0;
   for (let i = 1; i<= num; i++) {
     sum += i;
   }
   console.log(sum);*/
    /*function sum(n) {
     return n*(n+1)/2;
   }
   let n = 6586548523;
   console.log(sum(n));*/

//find subString use include() method
   /*const browserType = 'mozilla';

   if (browserType.includes('zilla')) {
     console.log('Found zilla!');
   } else {
     console.log('No zilla here!');
   }*/



  //  function bblSort(arr){
  //    for(var i = 0; i < arr.length; i++){
  //      for(var j = 0; j < (arr.length - i -1); j++){
  //        if(arr[j] > arr[j+1]){
  //          var temp = arr[j]
  //          arr[j] = arr[j+1]
  //          arr[j+1] = temp
  //        }
  //      }
  //    }
  //    console.log(arr);
  //  }

  //  var arr =[234, 43, 55, 63, 5, 6, 235, 547];
  //  bblSort(arr);


  // Optimized implementation of bubble sort Algorithm

// function bubbleSort(arr){
	
//   var i, j;
//   var len = arr.length;
    
//   var isSwapped = false;
    
//   for(i =0; i < len; i++){
    
//     isSwapped = false;
    
//     for(j = 0; j < len; j++){
//       if(arr[j] > arr[j + 1]){
//       var temp = arr[j]
//       arr[j] = arr[j+1];
//       arr[j+1] = temp;
//       isSwapped = true;
//       }
//     }
    
//     // IF no two elements were swapped by inner loop, then break
    
//     if(!isSwapped){
//     break;
//     }
//   }
    
//   // Print the array
//   console.log(arr)
//   }
  
//   var arr = [243, 45, 23, 356, 3, 5346, 35, 5];
  
//   // calling the bubbleSort Function
//   bubbleSort(arr)
function fibonacci(n){
  if(n < 3) return n
  return fibonacci(n-1) + fibonacci(n-2) + fibonacci(n-3)
 }
 
 const num = 3;
 
 for(let i = 0; i<num;  ++i){
  console.log(fibonacci(i))
 }
 