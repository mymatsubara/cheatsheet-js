## introduction

A `Boolean` is a primitive value which can be either `true` or `false`.

```javascript
const on = true;
const off = false;

console.log(on);
console.log(off);
```

They are widely used to execute code conditionally using `if`, `while` or `for` statements.

For more information check the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean).

## comparison operators (==, ===, !=, !==, >, >=, <, <=)

- Equality comparison (`==` or `===`)

```javascript
console.log(1 == 1); // equality
console.log(1 === 1); // strict equality

console.log(1 == '1'); // equality
console.log(1 === '1'); // strict equality
```

- Inequality comparison (`!=` or `!==`)

```javascript
console.log(1 != 1); // inequality
console.log(1 !== 1); // strict inequality

console.log(1 != '1'); // inequality
console.log(1 !== '1'); // strict inequality
```

- Greater than (`>`) and greater than or equal (`>=`)

```javascript
console.log(10 > 10); // greater than
console.log(10 >= 10); // greater than of equal
```

- Less than (`<`) and less than or equal (`<=`)

```javascript
console.log(10 > 10); // less than
console.log(10 >= 10); // less than or equal
```

For more information check the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Expressions_and_operators#comparison_operators).

## logical operators (&&, ||, !)

- `&&`: and

```javascript
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(1 > 2 && 2 > 3);
```

- `||`: or

```javascript
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(1 < 0 || 2 === 2);
```

- `!`: not (flip boolean)

```javascript
console.log(!true); // false
console.log(!false); // true

console.log(!(4 > 5));
```

## if, else if and else

- Use a `Boolean` to conditionally execute a block of code with the `if` statement:

```javascript
// Change the conditions bellow and check the output
if (5 !== 5) {
	console.log('if.1: executed');
}

if (3 > 1) {
	console.log('if.2: executed');
}
```

- To execute another block of code when a `if` condition is not met, use the `else` statement:

```javascript
// Change the value bellow to `true` and check the output
if (true) {
	console.log('if: executed');
} else {
	console.log('else: executed');
}
```

- If you want to add more blocks of code to the mix, you can also use `else if` statements:

```javascript
// Only the first block of code whose condition is `true` executes
// Change the boolean values bellow and check the output
if (true) {
	console.log('if: executed');
} else if (true) {
	console.log('else if 1: executed');
} else if (true) {
	console.log('else if 2: executed');
} else {
	console.log('else: executed');
}
```

```javascript
// You can also use `else if` without `else`
if (false) {
	console.log('if: executed');
} else if (true) {
	console.log('else if: executed');
}
```

For more information check the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/if...else).

## while loops

`while` statements can execute a block of code while a **condition** is `true`:

```javascript
let i = 5;
while (i > 0) {
	console.log('i = ', i);
	i = i - 1; // Decrement i
}
```

## do while loops

```javascript
let i = 0;

// Check the condition only after the
// block has been executed once
do {
	console.log('i = ', i);
	i = i - 1; // Decrement i
} while (i > 0);
```

For more information checkout the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/while).
