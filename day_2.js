/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/
Answer:

The Data types in the JavaScript has :
1.	Number
2.	String
3.	Boolean
4.	Undefined
5.	Null
6.	Object
7.	Symbol
 
The above data types in JavaScript are divided into two different categories
 A. primitive 
 B. non-primitive

 A.
 The Primitive Data types in JavaScript include Number, String, Boolean, Undefined, Null and Symbol.

 B.
 The Non-Primitive data type has only one member i.e. the Object

>>Numbers:

A number data type can be an integer, a floating point value, an exponential value, a ‘NaN’ or a ‘Infinity’.

var a=250;  // integer value
var b=25.5;  // a number containing a decimal 
var c = 10e4 //  an exponential value which evaluates to 10*10000;
 

There are special numeric values e.g. NaN and Infinity.

If a number is divided by 0, the resulting value is infinity.


const number1 = 3/0;
console.log(number1); // Infinity

const number2 = -3/0;
console.log(number2); // -Infinity

// strings can't be divided by numbers
const number3 = "abc"/3; 
console.log(number3);  // NaN
 

A ‘NaN’ results when we try to perform an operation on a number with a non-numeric value

>>String:

The string data type in JavaScript can be any group of characters enclosed by a single or double-quotes or by backticks.

Single quotes: 'Hello'
Double quotes: "Hello"
Backticks: `Hello`
For example,

//strings example
const name = 'ram';
const name1 = "hari";
const result = `The names are ${name} and ${name1}`;
Single quotes and double quotes are practically the same and you can use either of them.

Backticks are generally used when you need to include variables or expressions into a string. 

>>Boolean:

The boolean data type has only two values, true and false.Booleans are logical data types which can be used for comparison of two variables or to check a condition.

If(a<b){
    alert(a is a smaller number than b);
    }
if the above condition ‘a<b’ is true.


>>undefined:

The undefined data type represents value that is not assigned. If a variable is declared but the value is not assigned, then the value of that variable will be undefined

let name;
console.log(name);

>>Null:

In JavaScript, null is a special value that represents empty or unknown value. For example,

const number = null;
The code above suggests that the number variable is empty.

>>Symbol

This data type was introduced in a newer version of JavaScript (from ES2015).

The symbol data type defines a property of an object which is private to the object.

>>BigInt:

In JavaScript, Number type can only represent numbers less than (253 - 1) and more than -(253 - 1). However, if you need to use a larger number than that, you can use the BigInt data type.

A BigInt number is created by appending n to the end of an integer. For example,

// BigInt value
const value1 = 900719925124740998n;

// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

const value2 = 900719925124740998n;

// Error! BitInt and number cannot be added
const result2 = value2 + 1; 
console.log(result2); 


/* EXERCISE 2
 Try to describe what an object is, in your own words.
*/
/*ANSWER:

object:
Let’s create an object literal. An object in JavaScript contains key-value pairs in its address. When we refer to obj1, we are actually referring to the address in memory which contains the value {a: 5, b: 6}, instead of the value {a: 5, b: 6} directly.

let person = {
    name: "Jack"
};

// using string as key
person.id = 12;
console.log(person.id); // 12

// Another program overwrites value
person.id = 'Another value';
console.log(person.id); // Another value
In the above program, the second user.id overwrites the previous value.
*/

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/
let p=12
    q=20
let s=p+q
console.log(s);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/
let x;
x = 12; 

console.log(x);

/* EXERCISE 5
 Create a variable called name and assign to it your name as a string.
*/

let name= "Harsha"
 console.log(name);//Harsha

/* EXERCISE 6
 Execute a subtraction between the number 4 and the variable x you declared before (which is storing the value 12).
*/
let w=4;
let v=x-w;
console.log(v); //8

let w1=4;
let v1=w1-x;
console.log(v); //-8
/* EXERCISE 7
Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
 YOU DON'T NEED AN IF/ELSE BLOCK. It is enough to use console.log()
*/
let name1= "john";
let name2= "John";
let z= name1 == name2;

console.log(z);//false


name2= "John".toLowerCase();

let z1= name1 == name2;
console.log(z1);//true


/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
