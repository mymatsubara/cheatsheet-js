## introduction

`Boolean` is a primitive value which can be either `true` or `false`.

```javascript
const on = true;
const off = false;

console.log(on);
console.log(off);
```

They are widely used to execute code conditionally using `if`, `while` or `for` statements.

For more informations check the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean).

## comparison operators (==, ===, !=, !==, >, >=, <, <=)

```javascript
const equal = 1 == 1;
const strictEqual = 1 === 1;
const notEqual = 2 != 1;
const strictNotEqual = 2 !== 1;
const greaterThan = 10 > 10;
const greaterEqualThan = 10 >= 10;
const lessThan = 15 < 14;
const lessEqualThan = 15 <= 16;

console.log("equal =", equal);
console.log("scriptEqual =", equal);
console.log("noEqual =", notEqual);
console.log("strictNotEqual =", strictNotEqual);
console.log("greateThan =", greaterThan);
console.log("greaterEqualThan =", greaterEqualThan);
console.log("lessThan =", lessThan);
console.log("lessEqualThan =", lessEqualThan);
```

For more informations check the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Expressions_and_operators#comparison_operators).

## logical operators (&&, ||, !)

- `&&`: and
- `||`: or
- `!`: not (flip boolean)

```javascript
const and = 1 > 2 && 2 > 3;
const or = 1 < 0 || 2 === 2;
const not = !(4 > 5);

console.log(and);
console.log(or);
console.log(not);
```

## if, else if and else

- Use a `Boolean` to conditionally execute a block of code with the `if` statement:

```javascript
// Change the conditions bellow and check the output
if (5 !== 5) {
	console.log("if.1: executed");
}

if (3 > 1) {
	console.log("if.2: executed");
}
```

- To execute another block of code when a `if` condition is not met, use the `else` statement:

```javascript
// Change the value bellow to `true` and check the output
if (true) {
	console.log("if: executed");
} else {
	console.log("else: executed");
}
```

- If you want to add more blocks of code to the equation, you can also use `else if` statements:

```javascript
// Only the first block of code whose condition is `true` executes
// Change the boolean values bellow as you like and check the output
if (true) {
	console.log("if: executed");
} else if (true) {
	console.log("else if 1: executed");
} else if (true) {
	console.log("else if 2: executed");
} else {
	console.log("else: executed");
}
```

```javascript
// You can also use `else if` without `else`
if (false) {
	console.log("if: executed");
} else if (true) {
	console.log("else if: executed");
}
```

## while loops

`while` statements can execute a block of code while a **condition** is `true`:

```javascript
let i = 5;
while (i > 0) {
	console.log("i = ", i);
	i = i - 1; // Decrement i
}
```

## do while loops

```javascript
let i = 0;

// Check the condition only after the
// block has been executed once
do {
	console.log("i = ", i);
	i = i - 1; // Decrement i
} while (i > 0);
```
