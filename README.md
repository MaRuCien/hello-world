# JavaScript for beginners

## What is JavaScript?

JavaScript is a scripting or programming language that allows you to implement complex features on web pages, displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc.

What is even more exciting however is the functionality built on top of the client-side JavaScript language. So-called Application Programming Interfaces (APIs) provide you with extra superpowers to use in your JavaScript code. APIs are ready-made sets of code building blocks that allow a developer to implement programs that would otherwise be hard or impossible to implement. 

## How to run javascript?

Because of its wide range of applications, you can run JavaScript in several ways:

- Using console tab of web browsers
- Using Node.js
- By creating web pages


## Hello, World! :)


A "Hello, World!" is a simple program that prints Hello, World! on the console. Since it's a very simple program, this program is often used to introduce a new programming language to beginners.

Printing to the console is mainly used as a monitoring tool, ideally to leave a trace of the content of variables during execution of a program.

## Basic operators

### Arithmetic Operators

Now in programming, we often use both numbers and variables (that store numbers)! We perform the math operations the same way with variables as we do with numbers.

1. Addition +
2. Subtraction -
3. Multiplication *
4.	Division /
5. Exponentiation **
6. Modulo or Remainder (returns the remainder of the division) %
7. Increment (add 1) ++
8.	Decrement (subtract 1) --

### NaN

In most other cases, when it’s hard to make sense of the arithmetic expression, the result will be NaN or “not-a-number”.


## All About Variables 

### What is a variable?

A variable is a container for a value, like a number we might use in a sum, or a string that we might use as part of a sentence.
We can also use the console.log() function to print variables in the console. It is a great way to know their content!

A variable name should accurately identify your variable. When you create good variable names, your JavaScript code becomes easier to understand and easier to work with. Properly naming variables is really important! Here are rules JavaScript has for naming variables:

- Variable names cannot contain spaces.
- Variable names must begin with a letter, an underscore (_) or a dollar sign ($).
- Variable names can only contain letters, numbers, underscores, or dollar signs.
- Variable names are case-sensitive.

Certain words may not be used as variable names, because they have other meanings within JavaScript. 

You’ll be faced with many decisions when choosing how to name your variables: 
Do you want to begin your variable names with an uppercase letter or a lowercase letter, or do you want to use camelCase? Do you want to use multiple words within your variable names? Do you want to use an underscore (_) between the words in your variable name? (Remember: Variables can’t contain spaces.)

Fortunately, you don’t have to make all these choices by yourself. Many professional programmers agree that there are best practices to keep in mind when naming your variables:

- Don’t use names that are too short. Simple one-letter names or names that don’t make sense are not a good option when naming variables.
- Use more than one word to name your variable. This will ensure your variable name is precise.
- When using more than one word in your variable names, always put the adjective to the left. For example, this is correct: var greenGrass.
- Pick a style for names with more than one word, and stick to it. The two most common ways to join words to create a name are camelCase and using an underscore (_). JavaScript is flexible — either method works.

### let, var, and const.

There are three keywords in JavaScript that can be used to declare variables: let, var, and const. Each keyword has different rules and implications for how the variables they create can be used.

let: The let keyword declares a block-scoped local variable, optionally initializing it to a value.
Block-scoped means that the variable is only available within the block it was declared in, which is usually denoted by curly braces {}.

var: The var keyword declares a function-scoped or global variable, optionally initializing it to a value.
Function-scoped means that the variable is only available within the function it was declared in. Global variables are available throughout your entire code.

const: The const keyword declares a block-scoped, immutable constant variable, i.e. a variable that can’t be reassigned.
Constants are also called “immutable variables”, but that’s a bit of a misnomer since they are actually variables – just ones that can’t be reassigned.

The main differences between var, let and const are:

var is function-scoped while let and const are block-scoped.
var variables can be reassigned while let and const variables can not.
var variables are declared using the var keyword while let and const variables are declared using the let and const keywords respectively.
const variables are immutable while let and var variables are not.

## Data types

There are a few different types of data we can store in variables. 

### Primitive Data Types:

1. Numbers
2. Strings: pieces of text. A string in JavaScript must be surrounded by quotes.
3. Booleans: true/false values. True means “yes, correct”, and False means “no, incorrect”.
4. Arrays: a single object that contains multiple values enclosed in square brackets and separated by commas.
5. Null: It is the intentional absence of the value. It is one of the primitive values of JavaScript.
6. Undefined: It means the value does not exist in the compiler.

### Complex Data Types

Objects: in programming, an object is a structure of code that models a real-life object. You can have a simple object that represents a box and contains information about its width, length, and height, or you could have an object that represents a person, and contains data about their name, height, weight, what language they speak, how to say hello to them, and more.


## Comments

As time goes on, programs become more and more complex. It becomes necessary to add comments which describe what the code does and why.
Comments can be put into any place of a script. They don’t affect its execution because the engine simply ignores them.

Like this: 

1. One-line comments start with two forward slash characters //
2. Multiline comments start with a forward slash and an asterisk /* and end with an asterisk and a forward slash */


