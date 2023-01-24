// Declaring a variable: 
//To use a variable, you've first got to create it — more accurately, we call this declaring the variable. 
//To do this, we type the keyword let, var or const followed by the name you want to call your variable:

var myVariable;

//Initializing a variable
//Once you've declared a variable, you can initialize it with a value. 
//You do this by typing the variable name, followed by an equals sign (=), followed by the value you want to give it. 
//For example:

var myVariable = "red";

//Print Variables in the Console
console.log(myVariable);

// Updating a variable
//Once a variable has been initialized with a value, you can change (or update) that value by giving it a different value. 

myVariable = 16;

myVariable = true;

myVariable = false;

//Variable types:

//Number

var myNumber = 20;

//String
//In JavaScript, there are 3 types of quotes:
//Double quotes: "Hello".
//Single quotes: 'Hello'.
//Backticks: `Hello`.

var myString = 'I will learn JavaScript!'

//Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.
//Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

alert( `the result is ${1 + 2}` ); // the result is 3


//Booleans

var myBoolean = false

//Arrays

var myArray = ['Sara', 'Maria'];

//Objects

let myObject = { animal: 'dog', name : 'Odie', breed : 'German Shepherd' };


