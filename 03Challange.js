// Activity 1: If-Else Statement

// Task 1

const number = 0;
if (number > 0) {
  console.log(`${number} is positive`);
} else if (number < 0) {
  console.log(`${number} is negative`);
} else if (number === 0) {
  console.log(`${number} is zero`);
}

// Task 2
const age = 17;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cant vote");
}

// Activity 2: Nested if-else

// Task 3

let num1 = 10;
let num2 = 25;
let num3 = 15;

if (num1 >= num2) {
  if (num1 >= num3) {
    console.log(`${num1} is greater`);
  } else {
    console.log(`${num3} is greater`);
  }
} else {
  if (num2 >= num3) {
    console.log(`${num2} is greater`);
  } else {
    console.log(`${num3} is greater`);
  }
}

// Activity 3: Switch Case

// Task 4
const day = 4;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("You put the wrong range");
    break;
}

// Task 5
const grade = 90;

switch (true) {
  case grade >= 90:
    console.log("A");
    break;

  case grade >= 80:
    console.log("B");
    break;

  case grade >= 70:
    console.log("C");
    break;

  case grade >= 60:
    console.log("D");
    break;

  default:
    console.log("F");
}

// Activity 4: Conditional Ternary Operator

//Task 6
const numCheck = 11;

console.log(numCheck % 2 === 0 ? "Even" : "Odd");

// Activity 5: Combining Conditionals

const year = 2008;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log(`${year} is a leap year`);
} else {
  console.log(`${year} is not a leap year`);
}
