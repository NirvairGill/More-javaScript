/*
// 1:
console.log(greeting);

var greeting = 'Hello world!';  // Since variables declared with var are hoisted, so it will log undefined.

// 2:
console.log(greeting);

let greeting = 'Hello world!'; // It will throw an error since let and const do not support hoisting.

// 3:
if (true) {
  let myValue = 20;
}

console.log(myValue); // Error. Since let is block scoped and we have not defined my value anywhere outside the block.


function myFunction() {
  let a = 1;

  if (true) {
    console.log(a);
  }
}

myFunction();        // => 1. The condition is truthy. So, it will log the value of a which is 1 to the console.

// 5:

function myFunction() {
  
  let a = 1;
  if (true) {
    console.log(a);
    let a = 2;
    console.log(a);
  }
}

myFunction();       // Reference Error: a is not defined. We are defining a inside the block after the console.log statement.


let a = 5;
let b = false;

if (a > 4) {
  let b = true;
}

console.log(b);             //  => false. The b defined inside the if block is different from variable b defined outside the block, although they've a same name.
// The b inside the scope of if block, so it is not going to affect the value of other b which is outside the block scope.


let a = 1;

function myFunction() {
  console.log(a);
}

myFunction();       //  => 1: Variables defined outside the block are accessible from inside the block.

let a = 1;

function myFunction(a) {
  console.log(a);
}

let b = 2;

myFunction(b);   // => 2. We are invoking function with argument b. So, the output will display the value of the aregument b. Variable a is just a parameter in th given function.

const a = 1;

function myFunction() {
  a = 2;
}

myFunction(a);        // Error: we can not reassign variables declared with const.
 */
const a = {
  firstName: 'John',
  lastName: 'Doe'
};

function myFunction() {
  a.firstName = 'Jane';
}

myFunction();

console.log(a);       // => a = {firstName: jane, lastName: doe}. We can mutate the value of object even if it declard with const.