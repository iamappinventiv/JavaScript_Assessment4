# JavaScript_Assessment4
---------------------------------------
# Question 1
## How does the JS engine work?
Answer - Here Is how JS Engine Works

![Alt text](assets/image2.png)

* Environment
Behind the scenes, JS always runs in a certain environment, most common ones are:

- Browser (by far the most common)
- Node.js (which is a runtime environment which allows you to run JS outside of the browser, usually in servers)

### Engine

![Alt text](assets/image8.png)

- When you write code in JS, you write it in human-readable syntax, with alphabets and numbers. As  mentioned, a machine can not understand this type of code.

- This is why each environment has an engine.

- In general, the engine’s job is to take that code and transform it into machine code which can eventually be run by the computer processor.

- Each environment has its own engine, the most common ones are Chrome V8  (which Node also uses ), Firefox SpiderMonkey, JavaScriptCore by Safari and Chakra by IE.

### Parser

![Alt text](assets/image4.png)

- The parser knows JS syntax and rules, and its job is to go through the code line by line and check if the syntax of the code is correct.
- If the parser comes across an error, it stops running and sends out an error. If the code is valid, the parser generates something that’s called an Abstract Syntax Tree (or AST for short).

### Abstract Syntax Tree (AST)

![Alt text](assets/image7.webp)

- AST is a data structure, which is not unique to JS but actually used by a lot of other languages (some of them are Java, C#, Ruby, Python).
- An AST is simply a tree representation of your code, and the main reason the engine creates an AST instead of compiling directly to a machine code is that it’s easier to convert to machine code when you have the code inside a tree data structure.

### The Interpreter

![Alt text](assets/image1.webp)

- The Interpreter’s job is to take the AST that has been created and transform it into an Intermediate Representation of the code (IR).

### The Compiler

![Alt text](assets/image3.png)

- The compiler’s job is to take the IR which the interpreter created, which is in our case Bytecode, and transform it into a machine code with certain optimizations.
* There are 3 ways to turn high-level code into machine code and run it:

* 1 - Interpretation — with this strategy you have an Interpreter which goes through the code line by line and executes it (not so efficient).
* 2 - Ahead of Time Compilation (AOT) — here you have a compiler first compiling the entire code, and only then executing it.
* 3 - Just-In-Time Compilation — Combination between the AOT strategy and the interpretation strategy, a JIT compilation strategy attempts to take the best from both worlds, performing dynamic compilation, but also allowing certain optimizations to happen, which really speeds up the compilation process. We’ll explain more about JIT compilation.


---------------------------------------

---------------------------------------  

# Question 2
## What is the output & Why?
```js
let timerId = setInterval(function() {
alert('tick'); 
}, 2000); 

setTimeout(function(){ 
clearInterval(timerId); 
alert('stop'); 
}, 5000);

//Output:
tick 
tick 
stop
```
* Explanation - The output of the code is `"tick"` and `"stop"`.

The first line creates a timer that will call the function every 2 seconds. The second line creates a timeout that will call the function after 5 seconds. The first function will be called twice, once after 2 seconds and once after 4 seconds. The second function will be called after 5 seconds.

- The `clearInterval()` method clears a timer set with the setInterval() method.

- The ID value returned by `setInterval()` is used as the parameter for the `clearInterval()` method.

---------------------------------------
---------------------------------------
# Question 3
## Write printAnimals() in such a way that it prints all animals in the object below.
```js
const animals = [ { species: 'Lion', name: 'King' }, 
{ species: 'Whale', name: 'Queen' } ]; 

function printAnimals(i) { 
this.print = function() { 
console.log('#' + i + ' ' + this.species + ': ' + this.name); 
} 
this.print(); 

}
// Code 

const animals = [ { species: 'Lion', name: 'King' }, 
{ species: 'Whale', name: 'Queen' } ]; 

function printAnimals() { 
    let i = 1;
animals.forEach(function(animal){
    this.print = function(){
        console.log('#' + i++ + ' ' + animal.species + ': ' + animal.name); 
    }
    this.print();
}.bind(this)
)

} 
printAnimals();

// Output :
#1 Lion: King
#2 Whale: Queen
```
* Explantion - For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters.
* This code creates a `printAnimals` fn that iterates over the `animals` array using `forEach` method,
 inside the loop we define a `print` fn using the `bind` method to ensure that `this` refers to corect object.
 In last we call the `printAnimals()` fn to print all the elements in array.

---------------------------------------
---------------------------------------
# Question 4
## What is the output & Why?
```js
function sumOfNumbers() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
var numbers = [1, 2, 3];
var sum = sumOfNumbers.apply(null, numbers);
console.log(sum);

// Output 6 :
6

``` 
* Why - Because `sumOfNumbers` fn takes an argu and return their sum . The code calls this fn using `apply` method , paasing an array of no. as arguments, the fn return the sum of these no. which is 6 
and then finally value logged in the console.

---------------------------------------
---------------------------------------
# Question 5
## What is the output & Why?
```js
"use strict";
var person = {
  name: "Jack",
  prop: {
    name: "Daniel",
    getName: function () {
      return this.name;
    },
  },
};
var name = person.prop.getName.bind(person);
console.log(name());

var name = person.prop.getName();
console.log(name);

// Output 
Jack
Daniel
```
- Why - Because the code create an object `person` with properties `name` and `prop`, the first 
log output `"Jack"` and second `"Daniel"`
- Object called `person` with a property `name` set to `"jack"` and another property `prop` which is an object with a propert `name` set to `"Daniel"` and a method `getName` that returns the value of `this.name`.
---------------------------------------
---------------------------------------
# Question 6 
## What is the output & Why? 
```js
function makeUser() 
  { return { name: "John", ref: this };
   } l
let user = makeUser(); 
alert( user.ref.name );

// Output 
undefined

```
* Why -  This code defines a function makeUser that returns an object with properties name and ref. The name property is set to the string "John", while the ref property is set to the value of this inside the function.

When the function is called with let user = makeUser();, it returns the object and assigns it to the variable user. since the function is called as a regular function (not as a method of an object or with the new keyword), the value of this inside the function is the global object .

At last in  result, when the code run it try to access user.ref.name, it is actually trying to access window.name, which is undefined. This causes the alert statement to throw a TypeError, because it’s trying to access the property name of an undefined value.

---------------------------------------
---------------------------------------
# Question 7
## What is the output & Why? 
```js
const func = (function (a) {
  delete a;
  return a;
})(5);
console.log(func);

// Output:
5
```
* Why - Because code defines a self-invoking function that takes an argument `a`, attempts to delete it, and returns its value. The delete operator has no effect on `a`, so the function returns the original value of` a`, which is `5`. The output is `5`.
- `Self-invoking fn ` --> `A self-invoking function is a function that runs automatically as soon as it is created. It’s useful for organizing code and keeping variables private.`

---------------------------------------
---------------------------------------
# Question 8
## Create an object `calculator` with three methods: - `read()` prompts for two values and saves them as object properties with names `a` and `b` respectively. - `sum()` returns the sum of saved values. - `mul()` multiplies saved values and returns the result.
* Ans
```js
const calculator = {
  read() {
    this.a = +prompt('Enter the first no:', );
    this.b = +prompt('Enter the second no:', );
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};
calculator.read()
alert("Sum of Both no.",calculator.sum())
alert("Multiply of Both no.", calculator.mul())

// Output : 
Enter the first no:1
Enter the second no:1
Sum of Both no. 2
Multiply of Both no. 1

```
---------------------------------------
---------------------------------------
# Question 9
## What is scope chain and lexical scoping in JS?

* Answer - `Scope chain` is a list of all the scopes that are currently in effect like when, a variable is declared, it is added to the scope chain. When a variable is accessed, the JavaScript engine searches the scope chain to find the variable.
* `Lexical scoping` is a method of determining the scope of a variable based on its declaration like we see In `lexical scoping`, the scope of a variable is determined by the block of code in which it is declared.

For Eg.
```js
const globalVar = 'global';

function outerFunc() {
  const outerVar = 'outer';

  function innerFunc() {
    const innerVar = 'inner';
    console.log(globalVar); // 'global'
    console.log(outerVar); // 'outer'
    console.log(innerVar); // 'inner'
  }

  innerFunction();
}

outerFunction();

/// Output:
global
outer
inner

```
* In this eg, `globalVar` is defined in the global scope, so it is visible and accessible from anywhere in the code. `outerVar` is defined inside `outerFunc`, so it is only visible within that function and any nested functions. `innerVar` is defined inside `innerFunc`, so it is only visible within that function.

* When `innerFunc` is called, it logs the values of all three variables. Since `innerVar` is defined within `innerFunc`, it can be accessed directly. To access `outerVar`, the JavaScript engine must go up one level in the scope chain to `outerFunc`. To access `globalVar` ,it must go up two levels to the global scope.

---------------------------------------
---------------------------------------
# Questio 10
## What is FEC & GEC? How are Execution Contexts Created?
* Answer - As we know There are two main types of Execution Contexts in JavaScript: 
1.`Global Execution Context (GEC) `
2.`Function Execution Context (FEC)`

* The `GEC` is the default Execution Context created by the JavaScript engine when it receives a script file. It is the base environment where all JavaScript code that is not inside a function is executed. For every JavaScript file, there can only be one GEC.
* The `FEC` is a different type of Execution Context created by the JavaScript engine whenever a function is called. It is created within the `GEC` to evaluate and execute the code within that function
and every function call gets its own `FEC`, there can be more than one `FEC` in the run-time of a script.

When a function is called, the JavaScript engine creates a new `FEC` for that function and pushes it onto the top of the execution stack. The code within the function is then executed within this new `FEC`. When the function returns, its `FEC `is popped off the execution stack, and control returns to the calling context.

---------------------------------------
---------------------------------------
# Question 11 
## Write a JavaScript program to create a clock.

* Program 

---------------------------------------
```js
function clock() {
    let date = new Date.options();
    
    let hr = date.getHours().toString();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let time = hr + ":" + min + ":" + sec
    console.log(time);
  }
  
  setInterval(clock, 1000);
  
  ```
---------------------------------------

# Question 12
Make the following code work

```js

[1, 2, 3, 4, 5, 6].shuffle();

// Working Code

Array.prototype.shuffle = function() {
    let arr = []
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log(arr);
  };
  [1, 2, 3, 4, 5, 6].shuffle();

// Output:
[ 6, 1, 5, 2, 3, 4 ]

```
* The `Math.floor() `is static method always rounds down and returns the largest integer less than or equal to a given number. 
* The `Math.random()` is static method which returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range.


---------------------------------------

