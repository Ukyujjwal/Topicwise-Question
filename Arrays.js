// Creating a variable
/*const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
const random = [2, 'bread', 85, ['']];
console.log(shopping.indexOf('bread'));*/

// Storing function
/*const newData = [
    {'task1': 'exercise'},
    [1, 2 ,3],
    function hello() { console.log('hello')}];*/

// finding length
/*console.log(shopping.length);*/

// accessing and modifying array items
/*console.log(shopping[4]);
shopping[4] = 'maggie';
console.log(shopping);
console.log(random[3][0]);*/


// indexOf array
/*var cats = ['parrot', 'pigeon', 'owl'];
 console.log(cats.indexOf('owl'));*/

//  Adding items
 /*var cars = ['Scorpio', 'Bmw', 'Jcb'];
   var DAD = cars.unshift('Harrier');
    console.log(cars);
    cars.push = 'Harrier';
   console.log(DAD);*/


/*const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
 const newCities = cities.slice(1,4);
 console.log(newCities);
 cities.splice(1,2,'Delhi');
 console.log(cities);

 const cities = ["Manchester", "Liverpool", "Edinburgh", "Delhi"];
 const index = cities.indexOf("Edinburgh");
 if (index !== -1){
   cities.splice(index, 1);
 }
 console.log(cities);*/

//  Accessing every items
 /*const birds = ["Parrot", "Falcon", "Owl"];
 for( const bird of birds){
   console.log(bird);
 }*/

// Use of Map
 /*function double(number) {
  return number * 2;
}
const number = [87, 54, 44, 554];
const doubled = number.map(double);
console.log(doubled);*/

// use of filter()
/*function isLong(cities){
  return cities.length > 6;
}
const cities = ['Gurugram', 'faridabad','Noida','hamirpur'];
const longer = cities.filter(isLong);
console.log(longer);*/

// use of split
/*const data = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlise';
 const cities = data.split(',');
 console.log(cities);
 console.log(cities.length);
 console.log(cities[0]);*/

// toString method
/*const cars = ['scorpio', 'Harrier', 'Nano'];
console.log(cars.toString());*/

//  Array method
/*let dailyActivites = ['sleep', 'work', 'exercise'];
let newRoutine = ['eat'];
let ages = [4, 8, 16, 25, 36, 49];

 dailyActivites.sort();
 console.log(dailyActivites)

 const position = dailyActivites.indexOf('work');
 console.log(position);

 const newDailyActivites = dailyActivites.slice(1);
 console.log(newDailyActivites);

 const routine = dailyActivites.concat(newRoutine);
 console.log(routine);

 const adults = ages.filter(checkAdult);
 function checkAdult(age){
   return age >= 18;
 }
 console.log(adults);

const ages_sqrt = ages.map(Math.sqrt);
console.log(ages_sqrt);*/

// Iterarting over multidimensional
/*let studentsData = [['jack',24],['sara',23]];
  studentsData.forEach((student) =>{
    student.forEach((data) =>{
      console.log(data);
    });
  });
  let studentsData = [['jack',24],['sara',23]];
   for(let i of studentsData){
     for(let j of i){
       console.log(j); 

     }
   }

let studentsData = [['Jack', 24], ['Sara', 23],];

// looping outer array elements
for(let i = 0; i < studentsData.length; i++){

    // get the length of the inner array elements
    let innerArrayLength = studentsData[i].length;

    // looping inner array elements
    for(let j = 0; j < innerArrayLength; j++) {
        console.log(studentsData[i][j]);
    }
}
*/


// what is the output of this
 /*[1, 2, 3, 4].reduce((x, y) => console.log(x, y));*/


// Write a simple JavaScript program to join all elements of the following array into a string, 
// once simply and once with the '+' sign in between the elements.
/*let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join());
console.log(myColor.join('+'));*/

// Create a new array whose elements is in uppercase of words present in the original array.
 /*let strings = ["avengers", "captain america", "ironman", "black"];

let upperCased = strings.map(strings => strings.toUpperCase());
console.log(upperCased);*/

// Use the .map() method on the heros array to return a new array.

// The new array should rename the 'name' key to 'hero'.
// The 'name' key should not appear in the new array.
// The new array should have a new key added called (id).
// The key 'id' should be based on the index.
