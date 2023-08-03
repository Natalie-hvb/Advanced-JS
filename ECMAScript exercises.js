/* Exercise 1
We have a simple object:

let user = {
  name: "John",
  years: 30
}
Write the destructuring assignment that reads:

name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false if absent) */

// let {name, years:age, isAdmin=false} = user;
// console.log(user)


/* Exercise 2
Give the right name:

1. Create the variable with the name of our planet. How would you name such a variable?
2. Create the variable to store the name of the current visitor. How would you name that variable? */

//let planet = 'earth';
//let currentVisitor = 'Guest';


/*Exercise 3
Look at the code. What will be result of the call at the last line and why? 

let phrase = "Hello" 

if (true) {
  let user = "John";
    function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}

sayHi() */

//will give us an alert "Hello John'



/*Exercise 4
Write the code, one line for each action:

-Create an empty object user.
-Add the property name with the value John.
-Add the property surname with the value Smith.
-Change the value of the name to Pete.
-Remove the property name from the object. */

//let user = {};
//user.name = "John";
//user.surname = "Smith";
//user.name = "Pete";
//delete user.name;

/* Exercise 5
Is it possible to change an object declared with const, how do you think and why? 
const user = {
  name: "John"
} */

// does it work?
//user.name = "Pete" 
//yes it will work, because the property of the object can be changed, and the name of the object cannot be changed


/* Exercise 6
We have an object storing salaries of our team:
let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
}
Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0. */

/* let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
}
  
let sum = 0
for (let i in salaries){
sum += salaries[i]
}

console.log(sum); */



/* Exercise 7
Rewrite this if using the ternary operator '?':

JAVASCRIPT
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} */

/* 
a = 3,
b = 0;
let result =  a + b < 4 ? 'Below' : 'Over';
console.log(result) */


/*
Exercise 8
Rewrite if..else using multiple ternary operators '?'.

JAVASCRIPT
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} */

/*
const login = '';
const message = login == 'Employee' ? 'Hello' : login == 'Director' ? 'Greetings' : login == '' ? 'No login' : '';
console.log(message);
*/
