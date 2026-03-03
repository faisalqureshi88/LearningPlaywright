// var, let, and const are keywords used to declare variables in JavaScript.

var x = 10; // 'var' is function-scoped and can be redeclared and updated.
console.log(x); // Output: 10

let y = 20; // 'let' is block-scoped and can be updated but not redeclared.
console.log(y); // Output: 20

const z = 30; // 'const' is block-scoped and cannot be updated or redeclared.
console.log(z); // Output: 30

// Example of updating variables
x = 15; // Allowed with 'var'
y = 25; // Allowed with 'let'
// z = 35; // Not allowed with 'const', will throw an error

console.log(x); // Output: 15
console.log(y); // Output: 25
// console.log(z); // Output: 30 (unchanged)    



//************************************************************************************************** */

//Defination of functions in JavaScript

function greet() { // 'greet' is an identifier for a function that prints a greeting message.
    console.log("Hello, World!");
}  

// Calling the function 'greet' to execute its code.
greet(); // Output: Hello, World!

//************************************************************************************************** */

//var

var a = 10;
console.log(a); // Output: 10

function printHello() {
    console.log("Hello, World!");
    var a = 20; // This 'a' is different from the 'a' declared outside the function. It is function-scoped.
    console.log(a); // Output: 20
    if(true) {
        var a = 30; // This 'a' is the same as the 'a' declared inside the function. It is function-scoped.
        console.log(a); // Output: 30
    }
    console.log('f ->', a); // Output: 30 (the value of 'a' inside the function is updated to 30)

}

printHello();

//************************************************************************************************** */

//let   -Block Scoped

let b = 10;         //GLobal Scope
console.log(b); // Output: 10

function printDelhi() {
    console.log("Hello, Universe!");
    let b = 20; // This 'b' is different from the 'b' declared outside the function. It is function-scoped.
    console.log(b); // Output: 20
    if(true) {
        let b = 30; // This 'b' is the same as the 'b' declared inside the function. It is function-scoped.
        console.log(b); // Output: 30
    }
    console.log('f ->', b); // Output: 20 (the value of 'b' inside the function is unchanged, it is still 20)

}

printDelhi();

//************************************************************************************************** */

//const  - Block Scoped

const c = 10; // 'const' is block-scoped and cannot be updated or redeclared.
console.log('c: ',c); // Output: 10

function printMumbai() {        
    console.log("Hello, Mumbai!");
    const c = 20; // This 'c' is different from the 'c' declared outside the function. It is function-scoped.
    console.log('c inside function: ', c);   // Output: 20
    if(true) {
        const c = 30; // This 'c' is the same as the 'c' declared inside the function. It is function-scoped.
        console.log('c inside if block: ', c); // Output: 30
    }
    console.log('c after if block: ', c); // Output: 20 (the value of 'c' inside the function is unchanged, it is still 20)                       
}

printMumbai();