## try...catch

Usually when something unexpected happens in your code, an error is thrown and your program crashes. If you want to handle the error, you can use the `try...catch` construct.

```javascript
// If an error occurs inside the `try` block,
// the code execution jumps to the `catch` block
try {
	console.log("before error");

	undefined_variable;

	console.log("after error"); // not executed
} catch (err) {
	console.log("inside catch");

	// `err` contains informations about error (usually a `name` and `message`,
	// sometimes a `stack` depending on the runtime)
	console.log(err.name);
	console.log(err.message);
	console.log(err.stack);
}
```

## throw

If you want to generate your own errors, use the `throw` statement followed by an error object. If you want, the error thrown can then be catched using a `try...catch`.

```javascript
function divide(a, b) {
	if (b === 0) {
		throw new Error("Cannot divide by 0");
	}

	return a / b;
}

try {
	console.log("before error");

	divide(10, 0);

	console.log("after error");
} catch (err) {
	console.log(err.message);
}
```

## finally

Use the `finally` construct along with `try...catch` construct to run a block of code whether a error is throw or not. `finally` block also executes if a `return` statement is put inside a `try` block.

```javascript
// WITHOUT ERROR
try {
	console.log("try block executed");
} catch (err) {
	console.log("catch block executed");
	throw err;
} finally {
	console.log("🚩 FINALLY BLOCK EXECUTED");
}
```

```javascript
// WITH ERROR
try {
	console.log("try block executed");
	bad_code;
} catch (err) {
	console.log("catch block executed");
	throw err;
} finally {
	console.log("🚩 FINALLY BLOCK EXECUTED");
}
```

```javascript
// WITH RETURN
function finallyWithReturn() {
	try {
		console.log("try block executed");
		return 1;
	} finally {
		console.log("🚩 FINALLY BLOCK EXECUTED");
	}
}

const result = finallyWithReturn();
console.log("result = ", result);
```

## custom errors

Create a custom error class by extending `Error`.

```javascript
class CustomError extends Error {
	constructor(message) {
		super(message);
		this.name = "CustomError";
	}
}

try {
	throw new CustomError("custom message");
} catch (err) {
	if (err instanceof CustomError) {
		console.log("err is a CustomError");
	}

	console.log(err.name);
	console.log(err.message);
}
```
