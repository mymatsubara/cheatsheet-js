## introduction

A function is a **reference to a block of code** that can be called many time in your program:

```javascript
// Declare a function called `greeting`
function greeting() {
	console.log("hello from function");
}

// Use `()` in front of the name of the function to call it
greeting();
greeting();
greeting();
```

For more informations about functions check the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Functions).

## function with inputs

- You can create functions which **receives one input**:

```javascript
function hello(name) {
	console.log(`Hello, ${name}!`);
}

const name1 = "World";
const name2 = "Gigachad";

hello(name1);
hello(name2);
```

- You can also create functions which **receives more than one input**:

```javascript
// receives three inputs
function threeInputs(a, b, c) {
	console.log(`function: a = ${a}, b = ${b}, c = ${c}`);
}

// receives an arbitrary number of inputs
function nInputs(...args) {
	console.log(`function: args =`, args);
}

threeInputs(1, 2, 3);
threeInputs(1);
nInputs(4, 2);
nInputs(4, 2, 1, 5, 6);
```

## function with return value

```javascript
function sum(a, b) {
	console.log(`Summing ${a} + ${b}...`);
	return a + b;

	console.log("not executed: function has already exited/returned");
}

const result1 = sum(1, 2);
const result2 = sum(5, 3);

console.log("result1 =", result1);
console.log("result2 =", result2);
```

To **return more than one data** from a function, use an `Array` or an `Object`:

```javascript
function multipleValues() {
	return ["a", "b"];
}

const result = multipleValues();
console.log(result);
```

## arrow functions

Another way to declare functions is using using the `arrow function expression (=>)`:

```javascript
const greeting = () => {
	console.log("hello from greeting");
};

const sum1 = (a, b) => {
	return a + b;
};

// if return value
const sum2 = (a, b) => a + b;

greeting();
console.log(sum1(1, 2));
console.log(sum2(1, 2));
```

Arrow function have some other minor differences. For more informations check the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Functions#arrow_functions).

## function references

When you **declare a function**, it is the same a **declaring a variable**.

You can even log the function without calling it!

```javascript
function greeting() {
	console.log("hello from function");
}

// Log the function reference without calling it
console.log(greeting);

// Make a copy of the function reference
const greetingRef = greeting;

// Calling the function by their reference
greeting();
greetingRef();
```

- **Arrow functions** have the same behavior:

```javascript
const greeting = () => {
	console.log("hello from function");
};

// Log the function reference without calling it
console.log(greeting);

// Make a copy of the function reference
const greetingRef = greeting;

// Calling the function by their reference
greeting();
greetingRef();
```

- **Function references** can be passed as **arguments to other functions**. This is a **common pattern** in javascript, so this is really important!

```javascript
function exec(f) {
	console.log("Executing function reference", f);
	f();
}

function greeting() {
	console.log("hello from greeting\n");
}

exec(greeting);
exec(() => {
	console.log("hello from anonymous function\n");
});
```

- A more **useful example** usage of function references is the function `filter`:

```javascript
function filter(array, predicate) {
	const filtered = [];

	for (const element of array) {
		const passPredicate = predicate(element);
		if (passPredicate) {
			filtered.push(element);
		}
	}

	return filtered;
}

const arr = [1, 2, 3, 4, 5, 6];
const evenNumbers = filter(arr, (n) => n % 2 === 0);
const greaterThan4 = filter(arr, (n) => n > 4);

console.log(evenNumbers);
console.log(greaterThan4);
```

The `filter` function have similiar behavior as the method [`Array.prototype.filter()`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

## higher order function

In javascript **functions can be passed as argument** and **returned from functions**.

A `higher order function` is a special kind of function that **takes as input one or more functions and returns another function**.

```javascript
// Higher order function
function squared(f) {
	return (n) => {
		return f(n) * f(n);
	};
}

function double(n) {
	return 2 * n;
}

const doubleThenSquare = squared(double);
const tripleThenSquare = squared((n) => 3 * n);

const a = 2;
console.log(doubleThenSquare(a)); // (2 * a) * (2 * a)
console.log(tripleThenSquare(a)); // (3 * a) * (3 * a)
```

## recursion

A function can **call itself**. When this happens we usually call it a `recursive function`:

```javascript
function factorial(n) {
	console.log(`begin: factorial(${n}) = ?`);
	let result;

	if (n > 1) {
		result = n * factorial(n - 1);
	} else {
		result = 1;
	}

	console.log(`end: factorial(${n}) =`, result);
	return result;
}

const result = factorial(3);
console.log(result);
```

## .call(): call a function with another `this`

If you want to change the `this` bindind when calling a function, use the `call` method.

```javascript
const obj1 = {
	name: "obj1",
	printThis: function () {
		console.log(this);
	}
};

const obj2 = {
	name: "obj2"
};

// Call the method normally
obj1.printThis();

// Call the method with `this` replaced by `obj2`
obj1.printThis.call(obj2);
```

You can also pass function arguments to `call`.

```javascript
const obj1 = {
	name: "obj1",
	printThis: function (arg1, arg2) {
		console.log(this);
		console.log("arg1:", arg1);
		console.log("arg2:", arg2);
	}
};

const obj2 = {
	name: "obj2"
};

// Call the method normally
obj1.printThis(69, "yeet");

// Call the method with `this` replaced by `obj2`
obj1.printThis.call(obj2, 420, "gigachad");
```

## .apply(): call a function with another `this`

The only difference between `apply` and `call` is that the former take function arguments as an array.

```javascript
const obj1 = {
	name: "obj1",
	printThis: function (arg1, arg2) {
		console.log(this);
		console.log("arg1:", arg1);
		console.log("arg2:", arg2);
	}
};

const obj2 = {
	name: "obj2"
};

// Arguments are passed as an array
obj1.printThis.apply(obj2, [333, "apply"]);

// Arguments are passed individually
obj1.printThis.call(obj2, 420, "call");
```

## .bind(): create a new function with a bound `this`

When a new function is created with `bind` the value of `this` will not change with the context.

```javascript
function returnThis() {
	return this;
}

const obj2 = {
	name: "obj2"
};

const obj1 = {
	name: "obj1"
};

const returnThisBound = returnThis.bind(obj2);
obj1.returnThis = returnThis;
obj1.returnThisBound = returnThisBound;

// Global `this``
console.log("returnThis() =", returnThis());

// `obj1` `this`
console.log("obj1.returnThis() =", obj1.returnThis());

// `this` is bound to `obj2`
console.log("returnThisBound() =", returnThisBound());

// `this` is bound to `obj2`
console.log("obj1.returnThisBound() =", obj1.returnThisBound());
```

It is worth noting that `bind` does not change `this` for `arrow functions`.

```javascript
const returnThis = () => this;
const returnThisBound = returnThis.bind({ name: "bound" });

console.log("returnThis() =", returnThis());
console.log("returnThisBound() =", returnThisBound());
```

For more informations about `bind` check the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
