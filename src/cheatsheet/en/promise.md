## why we need them?

Before talking about `Promise`, we first need to understand why we need them. You may have already seem that the javascript runtime provide ways to execute code asyncronously - code which will execute in a later time. One way to do this is using the `setTimeout` function which receives a **callback** - a function which will be called later. For example:

```javascript
const time = 500;
const callback = () => {
	console.log("execute after delay");
};

setTimeout(callback, time);
```

The problem starts to show when we want to execute many asyncronous actions in sequence. For instance, if we want to print a messages in sequence separated by specified intervals, we could use multiple nested `setTimeout` calls:

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

This code is definately **not easy to read**, and it gets even worse when we add more actions. This uncomfortable **nesting of callbacks** is commonly called as [callback hell](http://callbackhell.com/). One way to solve this problem is using `Promise`s.

## introduction

A `Promise` allow you to wrap a asyncronous action which can be subscribed using the methods `.then()`, `.catch()` and `.finally()`.

You usually don't need to create `Promise` manually, but it is good to know how to do it. It'll help you understand **async/await** or if you need to promisify a function.

To create a `Promise`, you need to pass an **executor function** - the function which wraps the asyncronous action. The executor function should have the following 2 arguments:

- `resolve(result)`: function which you have to call when the asyncronous action completes successfully.
- `reject(error)`: function which you have to call when the asyncronous action fails.

Bellow is an example of an `Promise` which resolves after `500` milliseconds:

```javascript
const success = true; // set to `false` to trigger reject

const executorFunction = (resolve, reject) => {
	setTimeout(() => {
		console.log("inside timeout");

		if (success) {
			// Notify all subscribers that the promisse fullfilled successfully
			resolve("success");
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

For more informations about promises check out the [javascript.info article](https://javascript.info/promise-basics)

## chaining

The handler passed to `.then()` can return a `value` which can also be a promise. This allow you to chain multiple `Promise`s which will run in sequence. This pattern can be used to avoid the dreaded [callback hell](http://callbackhell.com/).

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

If we don't use `Promise` chains, the solution could be like this:

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

This solution is a little bit harder to read compared to `Promise` chaining. Still, the `Promise` chaining solution is still a little cumbersome. As an alternative, you can use `async/await` which will be explained in sequence.

## async/await

TODO

## Promise.all()

Use `Promise.all(promises)` to wait for multiple promises concurrently. Resolves to an array with all the promises results in the order they were provided.

```javascript
const promises = [
	new Promise((resolve, _) => setTimeout(() => resolve(3), 100)),
	new Promise((resolve, _) => setTimeout(() => resolve(2), 200)),
	new Promise((resolve, _) => setTimeout(() => resolve(1), 300))
];

// You
Promise.all(promises).then((result) => console.log(result));
```

If one of the promises is rejected, then `Promise.all(promises)` is also rejected.

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

Use `Promise.allSettled(promises)` to wait for multiple promises even if a rejection occurs. Resolves to an array objects of the following types:

- `{status: "fullfilled", value: result}`
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

## Thenable

TODO

## Error handling

TODO
