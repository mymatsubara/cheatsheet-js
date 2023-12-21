## introduction

A generator can return multiple values without storing all of them in memory. Use the `function*` syntax to create a function which returns a generator. Use the `yield` syntax to return a value from a generator function.

```javascript
function* createGenerator() {
	yield 1;
	console.log('2: after first yield');

	yield 2;
	console.log('4: after second yield');

	yield 3;
	console.log('6: after third yield');
}

const generator = createGenerator();

// Use .next to manually iterate over a generator
console.log('1:', generator.next());
console.log('3:', generator.next());
console.log('5:', generator.next());
console.log('7:', generator.next());
```

Since a generator is an iterable, you can also use `for...of` to iterate over it:

```javascript
function* createGenerator() {
	yield 1;
	yield 2;
	yield 3;
}

const generator = createGenerator();

// Use for...of to iterate over a generator
for (let i of generator) {
	console.log(i);
}
```

For more information check the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator).

## combining generators

Use the `yield*` syntax to combine (join) multiple generators together.

```javascript
// Generator function
function* range(start, end) {
	for (let i = start; i < end; i++) {
		yield i;
	}
}

// Generator function which combines 2 generators
function* combined() {
	yield* range(0, 3);
	yield* range(20, 23);
}

const generator = combined();
for (const i of generator) {
	console.log(i);
}
```

For more information check the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield*).

## passing values to a generator

You can also pass values to an iterator each time you call `.next(value)`:

```javascript
function* generate() {
	const received1 = yield 1;
	console.log('2: received1 = ', received1);

	const received2 = yield 2;
	console.log('4: received2 = ', received2);

	const received3 = yield 3;
	console.log('6: received3 = ', received3);
}

const generator = generate();

// The first call to .next() won't pass the value to the generator
console.log('1:', generator.next('pass1'));
console.log('3:', generator.next('pass2'));
console.log('5:', generator.next('pass3'));
console.log('7:', generator.next('pass4'));
```

For more information check the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/next#sending_values_to_the_generator).

## async generators

Use the `async function*` to create an async generator function.

```javascript
// Return a promise which resolves after `time` milliseconds
function wait(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

// Async generator function
async function* delayedRange(start, end, delay) {
	for (let i = start; i < end; i++) {
		await wait(delay);
		yield i;
	}
}

async function execute() {
	const delay = 500;
	const generator = delayedRange(0, 5, delay);

	// .next() returns a Promise
	console.log(await generator.next());
	console.log(await generator.next());
	console.log(await generator.next());
	console.log(await generator.next());
	console.log(await generator.next());
	console.log(await generator.next());
}

execute();
```

You can also use the `for await...of` syntax to iterator over an async generator.

```javascript
// Return a promise which resolves after `time` milliseconds
function wait(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

// Async generator function
async function* delayedRange(start, end, delay) {
	for (let i = start; i < end; i++) {
		await wait(delay);
		yield i;
	}
}

async function execute() {
	const delay = 500;
	const generator = delayedRange(0, 5, delay);

	for await (let i of generator) {
		console.log(i);
	}
}

execute();
```

For more information check the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator).
