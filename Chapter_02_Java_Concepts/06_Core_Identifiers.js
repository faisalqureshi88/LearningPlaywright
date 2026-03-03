//Identifiers are the names we give to variables, functions, and other entities in our code. 
// They are essential for writing meaningful and organized code. Here are some key points about identifiers in JavaScript:

// 1. Naming Rules:
//    - Identifiers must start with a letter, underscore (_), or dollar sign ($).
//    - Subsequent characters can be letters, digits, underscores, or dollar signs.
//    - Identifiers are case-sensitive (e.g., myVariable and myvariable are different).
//    - Identifiers cannot start with a digit (e.g., 1variable is invalid).
//    - Identifiers cannot contain spaces (e.g., my variable is invalid).

// 2. Reserved Words:
//    - JavaScript has reserved words that cannot be used as identifiers 
//      (e.g., if, else, for, while, function, etc.).

// 3. Best Practices:
//    - Use meaningful names that describe the purpose of the variable or function.
//    - Follow camelCase convention for variable and function names 
//      (e.g., myVariable, calculateSum).
//    - Avoid using single-letter names except for loop counters (e.g., i, j).


var name = "John"; // 'name' is an identifier for a variable that holds a string value.

function greet() { // 'greet' is an identifier for a function that prints a greeting message.
    console.log("Hello, " + name+ "!");
}

greet(); // Calling the function 'greet' to execute its code.


var a = 10;
a = 20;
console.log(a);

// var = keyword used to declare a variable
// variable name (a) = Identifier
// 10 = literal i.e variable value 
// = => Assignment operator
//; is optional in JavaScript, but it is a good practice to use it to indicate the end of a statement.



var name = "Alice"; // 'name' is an identifier for a variable that holds a string value.
console.log(name);

var $name = "Alice"; // '$name' is an identifier for a variable that holds a string value.
console.log($name);

var _name = "Alice"; // '_name' is an identifier for a variable that holds a string value.
console.log(_name);

var name1 = "Alice"; // 'name1' is an identifier for a variable that holds a string value.
console.log(name1);

var name_1 = "Alice"; // 'name_1' is an identifier for a variable that holds a string value.
console.log(name_1);   

var name$1 = "Alice"; // 'name$1' is an identifier for a variable that holds a string value.
console.log(name$1);    

var name$1$ = "Alice"; // 'name$1$' is an identifier for a variable that holds a string value.
console.log(name$1$);

var NAMES = 'Alice'; // 'NAMES' is an identifier for a variable that holds a string value.
console.log(NAMES   );

var names = 'Alice'; // 'names' is an identifier for a variable that holds a string value.
console.log(names);

var $ ='Faisal'; // '$' is an identifier for a variable that holds a string value.
console.log($);