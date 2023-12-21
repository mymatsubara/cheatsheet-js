## try...catch

Usually when something unexpected happens in your code, an error is thrown and your program crashes. If you want to handle the error, you can use the `try...catch` construct.

```javascript
// If an error occurs inside the `try` block,
// the code execution jumps to the `catch` block
try {
	console.log('1: before error');
	undefined_variable;
	console.log('x: after error (not executed)');
} catch (err) {
	console.log('2: inside catch');

	// `err` contains information about the error (usually the `name` and `message`,
	// sometimes the `stack` depending on the runtime)
	console.log('3:', err.name);
	console.log('4:', err.message);
	console.log('5:', err.stack);
}
```

For more information check the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch).

## throw

Use the `throw` statement emit your own custom errors. Even though you can `throw` any value (primitives or objects), it is advised to `throw` an object which inherits from `Error`.

```javascript
function divide(a, b) {
	if (b === 0) {
		throw new Error('Cannot divide by 0');
	}

	return a / b;
}

try {
	console.log('before error');

	divide(10, 0);

	console.log('after error');
} catch (err) {
	console.log(err.message);
}
```

For more information check the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw).

## finally

Use the `finally` construct along with `try...catch` to run a block of code whether a error is thrown or not. The `finally` block also executes if a `return` statement is put inside a `try` block. Bellow are some example:

- Without errors:

```javascript
try {
	console.log('try block executed');
} catch (err) {
	console.log('catch block executed');
} finally {
	console.log('🚩 FINALLY BLOCK EXECUTED');
}
```

- Error inside `try` block:

```javascript
try {
	console.log('try block executed');
	bad_code;
} catch (err) {
	console.log('catch block executed');
} finally {
	console.log('🚩 FINALLY BLOCK EXECUTED');
}
```

- Error inside `catch` block:

```javascript
try {
	console.log('try block executed');
	bad_code;
} catch (err) {
	console.log('catch block executed');
	throw err;
} finally {
	console.log('🚩 FINALLY BLOCK EXECUTED');
}
```

- `return` inside `try` block:

```javascript
function finallyWithReturn() {
	try {
		console.log('try block executed');
		return 1;
	} finally {
		console.log('🚩 FINALLY BLOCK EXECUTED');
	}
}

const result = finallyWithReturn();
console.log('result = ', result);
```

For more information check the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch#the_finally_block).

## custom errors

Create a custom error class by extending from `Error`.

```javascript
class CustomError extends Error {
	constructor(message) {
		super(message);
		this.name = 'CustomError';
	}
}

try {
	throw new CustomError('custom message');
} catch (err) {
	if (err instanceof CustomError) {
		console.log('err is a CustomError');
	}

	console.log(err.name);
	console.log(err.message);
}
```

For more information check the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#custom_error_types).
