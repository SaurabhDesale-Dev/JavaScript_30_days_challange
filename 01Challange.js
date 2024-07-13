// Variables and Data Types

// Activity 1: Variable Declaration

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var myAge = 18;
console.log(myAge);

//Task 2: Declare a variable using let, assign it a string, and log the value to the console.

let myName = "Saurabh";
console.log(myName);

// Activity 2: Constant Declaration

//Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console

const isGoogleAuthorized = true;
console.log(isGoogleAuthorized);

//Activity 3: Data Types

//Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

const number = 50;
console.log(typeof number);

const string = "Hello World";
console.log(typeof string);

const boolean = false;
console.log(typeof boolean);

const userObj = {
  name: "Saurabh",
  age: "18",
  email: "saurabhdesale@gmail.com",
};
console.log(typeof userObj);

const myArray = [1, 2, 3, 4, 5];
console.log(typeof myArray);

//Activity 4: Reassigning Variables

//Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console

let count = 1;
console.log(count);
count = 100;
console.log(count);

//Activity 5: Understanding const

//Task 6: Try reassigning a variable declared with const and observe the error

const myCountry = "India";
console.log(myCountry);
myCountry = "Australia";
console.log(myCountry); // Output: Assignment to constant variable
