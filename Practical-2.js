#HOSTING IN VARIABLE
// Hoisting with var
console.log("
---- Using var ----
");
console.log(a); // Output: undefined (hoisted but not initialized yet)
var a = 10;
console.log(a); // Output: 10
// Hoisting with let
console.log("
---- Using let ----
");
try {
console.log(b); // ReferenceError (Temporal Dead Zone)
let b = 20;
console.log(b);
} catch (err) {
console.log("Error with let:"
, err.message);
}
// Hoisting with const
console.log("
---- Using const ----
");
try {
console.log(c); // ReferenceError (Temporal Dead Zone)
const c = 30;
console.log(c);
} catch (err) {
console.log("Error with const:"
, err.message);
}
#FUNCTION DECLARATIONS VS EXPRESSIONS
// Calling before definitions
console.log("Calling add before definition:"
, add(2, 3)); // Works
// console.log("Calling multiply before definition:"
, multiply(2, 3)); // Fails (ReferenceError)
// Function Declaration
function add(a, b) {
return a + b;
}
// Function Expression
const multiply = function(a, b) {
return a * b;
};
// Calling after definitions
console.log("Calling add after definition:"
, add(4, 5)); // Works
console.log("Calling multiply after definition:"
, multiply(4, 5)); // Works
#ARROW FUNCTIONS VS NORMAL FUNCTION
const obj = {
name: "MyObject"
,
normalFunc: function () {
console.log("Normal Function this:"
, this);
},
arrowFunc: () => {
console.log("Arrow Function this:"
, this);
}
};
// Calling both
obj.normalFunc();
obj.arrowFunc();
#HIGHER ORDER FUNCTIONS
// Higher-order function
function calculate(operation, a, b) {
 return operation(a, b); // apply the function
}
// Different operations
function add(x, y) {
 return x + y;
}
function subtract(x, y) {
 return x - y;
}
function multiply(x, y) {
 return x * y;
}
function divide(x, y) {
 return x / y;
}
// Using the calculate function
console.log(calculate(add, 10, 5)); // 15
console.log(calculate(subtract, 10, 5)); // 5
console.log(calculate(multiply, 4, 5)); // 20
console.log(calculate(divide, 20, 4)); // 5
// Or directly passing arrow functions
console.log(calculate((x, y) => x % y, 10, 3)); // 1