/*
Exercise 1
The following function returns true if the parameter age is greater than 18.

Otherwise, it asks for a confirmation and returns its result.

JAVASCRIPT
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}
Rewrite it, to perform the same, but without if...else, and using arrow function.
*/
/*
const checkAge = age => age > 18 ?  true : 'Do you have your parents permission to access this page?'
console.log(checkAge(15))
*/

/*
Exercise 2
Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

JAVASCRIPT
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
P.S. In this task the function should support only natural values of n: integers up from 1.


function power(x,n){
    let pow = 0;
    for(let i = 0; i < n; i++){
        pow = pow * x
    }
    console.log(pow(3,3));
}*/


/*
const power = (x,n) => n === 0 ? 1 : x === 0 ? 0 : x * power(x, n - 1)

console.log(power(3, 9));
*/

/*
Exercise 3
Replace Function Expressions with arrow functions in the code:

JAVASCRIPT
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no()
}

ask(
  "Do you agree?",
  function() { alert("You agreed.") },
  function() { alert("You canceled the execution.") }
)
*/

/*
const ask = (question , yes ,no)=>{
    (question) ? yes() : no();
}

ask(
"Do you agree?",
function() { console.log("You agreed.") },
function() { console.log("You canceled the execution.") }
)
*/


/*
Exercise 4
Create an object calculator with three methods:

-read() prompts for two values and saves them as object properties.
-sum() returns the sum of saved values.
-mul() multiplies saved values and returns the result.
*/

/*
let calculator = {
  read(){
    this.a =+ prompt('Write number a', 0);
    this.b =+ prompt('Write number b', 0)
  },

  sum(){
    return this.a + this.read.b;
  },

  mul(){
    return this.a * this.b;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/


/*
Exercise 5
Write a function min(a,b) which returns the least of two numbers a and b. Use arrow function along with the question mark operator ?
*/

// const min = (a,b) => a < b ? a : b;
// console.log(min(3,6))
