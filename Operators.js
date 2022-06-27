// let a = 5;
// let b = 4;
// console.log(a + 3);
// console.log( ++a );
// console.log(a++);
// console.log(a);

// console.log(--a);
// console.log(a--);
// console.log(a);


// logical AND
/*console.log(true && true); // true
console.log(true && false); // false*/

// logical OR
// console.log(true || false); // true

// logical NOT
// console.log(!true); // false
// program to find the factorial of a number

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}