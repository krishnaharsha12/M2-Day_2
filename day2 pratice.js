console.log((0)/0);
console.log(Infinity);
console.log(-Infinity);
let con='Hello'
/*let text= "Worest Strivers"*/
console.log("Hello " + "Strivers!" + con );
console.log("Hello Strivers!".toUpperCase()); 
console.log("Hello Strivers!".toLowerCase());
console.log(parseInt(100))
let number = 100; // let is a keyword which declares a variable, a concept explained down below
console.log(number.toString()); 
console.log(number.toString(5));
console.log(null); 
/*
let a = (55,4);
let a1=(55,4);
let a2=a1===a ;
console.log(a2);

let c = (55,6.4,5,9);
let d=(55,4.1,5,99);
let e=c===d;
console.log(e);

let b='hi' * 5; 
console.log(b);// returns NaN
/*typeof(NaN);*/

var f = Number(5); 
console.log(f);

var num1= new Number(5);
console.log(num1); // This will return 5
typeof(num1);

var str1 = "Hello alexa1";  // This is a string primitive type or string literal
var str2= 'Hello alexa2';
var str3 = `Hello alexa3`;
console.log(str1);
console.log(str2);
console.log(str3);
String(4);

typeof(true);

let a8 = 7;
let b8=10;
let c8=a8>=b8 //c8=a8<=b8  c8=a8==b8 
console.log(c8);// returns false

const dataChecked = true;
const valueCounted = false;

const object1 = {
    name: 'cruise',
    age: 28,
    city: 'korea'
 }
  occupation=Symbol('cabDriver');
  console.log(object1);
  console.log(occupation);

  let id = Symbol("id");

let person = {
    name: "Jack",
    age: 25,
    [id]: 12
};

// using for...in
for (let key in person) {
    console.log(key);
}
let persons = {
    name: "Jak"
};
person.id = 12;
console.log(person.id); 
person.id = 'Another value';

console.log(person.id);
let id1 = Symbol("id1");

const value1 = 900719925124740998n;
const result1 = value1 + 5n;
console.log(result1); 

const value2 = 900719925124740998n;

persons[id1] = "Another value";
console.log(id1);


let p=12
    q=20
let s=p+q
console.log(s);


let x;
x = 12; 

console.log(x);


let name= "Harsha1"
 console.log(name);

let w=4;
let v=x-w;
console.log(v);

let w1=4;
let v1=w1-x;
console.log(v1);

let name1= "john";
let name2= "John";

let z= name1 == name2;
console.log(z);

name2= "John".toLowerCase();

let z1= name1 == name2;
console.log(z1);