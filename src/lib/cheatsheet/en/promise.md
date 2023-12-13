## why we need them?

Before talking about `Promise`, we first need to understand why we need them. You may have already seem that the javascript runtime provide ways to execute code asynchronously - code which will execute in a later time. One way to do this is using the `setTimeout` function which receives a **callback** - a function which will be called later. For example:

```javascript
const time = 500;
const callback = () => {
	console.log("execute after delay");
};

setTimeout(callback, time);
```

The problem starts to show when we want to execute many asynchronous actions in sequence. For instance, if we want to print a messages in sequence separated by specified intervals, we could use multiple nested `setTimeout` calls:

```javascript
setTimeout(() => {
	console.log("first message");

	setTimeout(() => {
		console.log("second message");

		setTimeout(() => {
			console.log("third message");
		}, 600);
	}, 1000);
}, 500);
```

The code above is definitely **not easy to read**, and it gets even worse when we add more actions. This uncomfortable **nesting of callbacks** is commonly called as [callback hell](http://callbackhell.com/). One way to solve this problem is using `Promise`s.

## introduction

A `Promise` allows you to wrap an asynchronous action which can then be subscribed to using the methods `.then()`, `.catch()` and `.finally()`.

You usually don't create `Promise`s manually, but it is good to know how to do it. It'll help you understand **async/await** and it'll come in handy if you need to _"promisify"_ a function yourself.

To create a `Promise`, you need to pass an **executor function** - the function which wraps the asynchronous action. The executor function will receive the following 2 arguments:

- `resolve(result)`: a function which you have to call when the asynchronous action **completes successfully**.
- `reject(error)`: a function which you have to call when the asynchronous action **fails**.

Bellow is an example of an `Promise` which resolves after `500` milliseconds:

```javascript
const success = true; // set to `false` to trigger reject

const executorFunction = (resolve, reject) => {
	setTimeout(() => {
		console.log("inside timeout");

		if (success) {
			// Notify all subscribers that the promises fulfilled
			resolve("return value");
		} else {
			// Notify all subscribers that the promise failed
			reject(new Error("error message"));
		}
	}, 500);
};

// Create a Promise manually
const promise = new Promise(executorFunction);

// Subscribe to the promise
promise
	.then((result) => {
		console.log("inside .then");
		console.log("result =", result);
	})
	.catch((err) => {
		console.log("inside .catch");
		console.log("err =", err);
	})
	.finally(() => {
		console.log("inside .finally");
	});

// Obs: we can chain methods over a `Promise`,
// because `.then`, `.catch` and `.finally` also returns a `Promise`
```

For more information about promises check out the [javascript.info article](https://javascript.info/promise-basics)

## chaining

The handler passed to `.then()` can return a `value` which can also be a `Promise`. This allow you to chain multiple `Promise`s which will run in sequence. This pattern can be used to avoid the dreaded [callback hell](http://callbackhell.com/).

```javascript
// Return a Promise which resolve after `time` milliseconds
function wait(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

wait(500)
	.then(() => {
		console.log("first message");
		return wait(700);
	})
	.then(() => {
		console.log("second message");
		return wait(800);
	})
	.then(() => {
		console.log("third message");
		return wait(1000);
	})
	.then(() => console.log("fourth message"));
```

If we use **callbacks** instead, the solution would be like this:

```javascript
setTimeout(() => {
	console.log("first message");
	setTimeout(() => {
		console.log("second message");
		setTimeout(() => {
			console.log("third message");
			setTimeout(() => {
				console.log("fourth message");
			}, 1000);
		}, 800);
	}, 700);
}, 500);
```

The code above is a little bit **harder to read** compared to using `Promise` chaining. Still, the `Promise` chaining solution is still cumbersome. As an alternative, you can use `async/await` which will be explained in sequence.

## async/await

`async` and `await` are keywords that makes working with `Promise`s more ergonomic.

When a function is preceded by the `async` keyword, it'll wrap its return value in a `Promise` if it's not already `Promise`.

```javascript
async function number() {
	return 1;
}

const promise = number();
promise.then((result) => console.log(result));
```

`async` by itself is not very useful, and that's why we have the `await` keyword - which can only be used inside an function marked as `async` (some modern browsers also allow top-level `await` though).

Use the `await` keyword before a `Promise` to _"await"_ until the promise is resolved:

```javascript
// Returns a Promise which resolves after `time` milliseconds
function wait(time) {
	return new Promise((resolve, reject) =>
		setTimeout(() => resolve(time), time)
	);
}

// Since this function is marked as `async`, we can `await` promises
async function execute() {
	console.log("starting async function...");

	const promise = wait(500); // save the promise returned in a variable
	const time1 = await promise; // await until the promise is resolved
	console.log(`message after ${time1} ms`);

	const time2 = await wait(600); // await the promise directly
	console.log(`message after ${time2} ms`);

	const time3 = await wait(700); // await the promise directly
	console.log(`message after ${time3} ms`);

	console.log("ending async function...");
	return "async function";
}

// Async functions return a `Promise`
execute().then((result) => console.log("result =", result));
```

If we'd write the same code without `async`/`await`, we'd get something like this:

```javascript
// Returns a Promise which resolves after `time` milliseconds
function wait(time) {
	return new Promise((resolve, reject) =>
		setTimeout(() => resolve(time), time)
	);
}

function execute() {
	console.log("starting async function...");

	const promise = wait(500); // save the promise returned in a variable
	return promise.then((time1) => {
		console.log(`message after ${time1} ms`);

		return wait(600).then((time2) => {
			console.log(`message after ${time2} ms`);

			return wait(700).then((time3) => {
				console.log(`message after ${time3} ms`);

				console.log("ending async function...");
				return "async function";
			});
		});
	});
}

// Async functions return a `Promise`
execute().then((result) => console.log("result =", result));
```

A little bit harder to understand compared to the `async/await` solution, right? That's the power of `async/await`!

## Promise.all()

- Use `Promise.all(promises)` to await for multiple promises concurrently. It resolves to an array with all the promises results in the order they were provided.

```javascript
const promises = [
	new Promise((resolve, _) => setTimeout(() => resolve(3), 100)),
	new Promise((resolve, _) => setTimeout(() => resolve(2), 200)),
	new Promise((resolve, _) => setTimeout(() => resolve(1), 300))
];

// You
Promise.all(promises).then((result) => console.log(result));
```

- If one of the promises is rejected, then `Promise.all(promises)` is also rejected.

```javascript
const promises = [
	new Promise((resolve, _) => setTimeout(() => resolve(3), 100)),
	new Promise(
		(_, reject) => setTimeout(() => reject(new Error("promise rejected"))),
		200
	),
	new Promise((resolve, _) => setTimeout(() => resolve(3), 300))
];

Promise.all(promises)
	.then((result) => console.log(result))
	.catch((err) => console.log("Error:", err));
```

## Promise.allSettled()

Use `Promise.allSettled(promises)` to await for multiple promises **even if a rejection occurs**. Resolves to an array objects of the following types:

- `{status: "fulfilled", value: result}`
- `{status: "rejected", reason: error}`

```javascript
const promises = [
	new Promise((resolve, _) => setTimeout(() => resolve(3), 100)),
	new Promise(
		(_, reject) => setTimeout(() => reject(new Error("promise rejected"))),
		200
	),
	new Promise((resolve, _) => setTimeout(() => resolve(3), 300))
];

Promise.allSettled(promises)
	.then((result) => console.log(result))
	.catch((err) => console.log("Error:", err));
```

## thenable

TODO

## error handling

If an exception occurs when `await`ing for a `Promise`, you can handle the error just like a common error using a `try...catch` block.

```javascript
function promiseReject() {
	return new Promise((_, reject) => reject(new Error("promise reject")));
}

async function execute() {
	try {
		// If the promise is not awaited, the exception cannot be caught
		promiseReject();

		console.log("before await");
		await promiseReject();
		console.log("after await");
	} catch (err) {
		console.log("error caught. message:", err.message);
	}
}

execute();
```

`.catch()` can also be used to handle `Promise` exceptions.

- You can use `.catch()` for rejected `Promise`s:

```javascript
// Rejected promise
const promise = new Promise((resolve, reject) => {
	reject(new Error("promise rejected"));
});

promise
	.then((result) => {
		console.log("then not executed");
	})
	.catch((error) => {
		console.log("error message:", error.message);
	});
```

- You can use `.catch()` for `Promise`s that throws:

```javascript
// Promise that throws
const promise = new Promise((resolve, reject) => {
	throw new Error("error thrown");
});

promise
	.then((result) => {
		console.log("then not executed");
	})
	.catch((error) => {
		console.log("error message:", error.message);
	});
```

- You can use `.catch()` to handle errors from preceding `.then()` handlers:

```javascript
// Change this to see the results
const error = true;

// Successful promise
const promise = new Promise((resolve, reject) => {
	resolve("ok");
});

promise
	.then((result) => {
		console.log("first .then() result =", result);

		if (error) {
			throw new Error("unexpected error");
		} else {
			return 10;
		}
	})
	.catch((error) => {
		console.log("error message:", error.message);
	})
	.then((result) => {
		console.log("second .then() result =", result);
	});
```
