# Practical-2

1️⃣ Hoisting with var console.log("---- Using var ----"); console.log(a); // Output: undefined var a = 10; console.log(a); // Output: 10 var a is hoisted to the top of its scope. Only the declaration is hoisted, not the initialization. So the first console.log(a) prints undefined. After a = 10 is executed, the second console.log(a) prints 10. Key point: var variables are hoisted and initialized with undefined.

2️⃣ Hoisting with let console.log("---- Using let ----"); try { console.log(b); // ReferenceError let b = 20; console.log(b); } catch (err) { console.log("Error with let:", err.message); } let b is hoisted, but it is in the Temporal Dead Zone (TDZ) until the line let b = 20;. Accessing b before initialization throws a ReferenceError. After b = 20, it can be used normally. Key point: let and const are hoisted but cannot be accessed before declaration.

3️⃣ Hoisting with const console.log("---- Using const ----"); try { console.log(c); // ReferenceError const c = 30; console.log(c); } catch (err) { console.log("Error with const:", err.message); } const c behaves like let. It is hoisted but in the TDZ until initialization. Accessing c before declaration throws a ReferenceError. Key point: const must be declared and initialized before use.

#TASK-2-FUNCTION DECLARATIONS VS EXPRESSIONS

1️⃣ Calling before definitions console.log("Calling add before definition:", add(2, 3)); // Works add is a function declaration. Function declarations are hoisted completely (both name and body). So you can call add before it is written. Output: 5 // console.log("Calling multiply before definition:", multiply(2, 3)); // Fails multiply is a function expression stored in a const. Function expressions are NOT fully hoisted; only the variable name is hoisted, not the function body. Trying to call it before definition throws ReferenceError.

2️⃣ Function Declaration function add(a, b) { return a + b; } Defines a normal function. Can be called anywhere in its scope because it’s hoisted.

3️⃣ Function Expression const multiply = function(a, b) { return a * b; }; Defines a function expression and stores it in a const variable. Cannot be called before this line, because the variable is in the Temporal Dead Zone (TDZ).

4️⃣ Calling after definitions console.log("Calling add after definition:", add(4, 5)); // Works → 9 console.log("Calling multiply after definition:", multiply(4, 5)); // Works → 20 Both functions can now be called without error. Output: 9 and 20

#TASK-3-ARROW FUNCTIONS VS NORMAL FUNCTION const obj = { Creates an object obj to hold properties and methods. name: "MyObject", Adds a property name with value "MyObject". normalFunc: function () { Defines a normal function as a method. this inside will refer to the object that calls it. console.log("Normal Function this:", this); Logs this. Called as obj.normalFunc(), so this = obj. }, Closes the normal function. arrowFunc: () => { Defines an arrow function as a method. Arrow functions do not have their own this. this is inherited from the lexical scope (outside the object) console.log("Arrow Function this:", this); Logs this. In strict mode: undefined. In non-strict/global browser scope: Window. } Closes the arrow function. }; Closes the object obj. obj.normalFunc(); Calls the normal function. this = obj. obj.arrowFunc(); Calls the arrow function. this = inherited from outer scope (not obj).

#TASK-4-HIGHER ORDER FUNCTIONS

1️⃣Higher-order function function calculate(operation, a, b) { return operation(a, b); } calculate is a higher-order function because it accepts another function (operation) as an argument. a and b are the numbers on which the operation will be applied. Returns the result of operation(a, b).

2️⃣ Define operations function add(x, y) { return x + y; } function subtract(x, y) { return x - y; } function multiply(x, y) { return x * y; } function divide(x, y) { return x / y; } Each function performs a basic arithmetic operation. Each function returns a value.

3️⃣ Using calculate with named functions console.log(calculate(add, 10, 5)); // 15 console.log(calculate(subtract, 10, 5)); // 5 console.log(calculate(multiply, 4, 5)); // 20 console.log(calculate(divide, 20, 4)); // 5 Pass the function name and numbers to calculate. calculate calls the passed function internally. Works for any operation you define.

4️⃣ Using calculate with an arrow function console.log(calculate((x, y) => x % y, 10, 3)); // 1 Directly pass an arrow function instead of a named function. Computes (10 % 3) → 1. Convenient for one-time or custom operations.
