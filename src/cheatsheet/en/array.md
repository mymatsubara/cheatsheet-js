## introduction

An `Array` is an object which can store multiple elements in sequence.

```javascript
const array = ["string", 2, false];

console.log(array);
console.log(array.length);
```

## access an array element

```javascript
const array = ["string", 2, false];

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]); // out of bonds
```

## for loop: iterate over an array

Use `for...of` to iterate over elements of an array:

```javascript
const array = ["element0", "element1", "element2"];

for (let element of array) {
	console.log("element =", element);
}
```

Use `for...in` to iterate over the indexes of an array:

```javascript
const array = ["element0", "element1", "element2"];

for (let index in array) {
	console.log("index =", index);
	console.log(`array[${index}] =`, array[index]);
}
```

## .push(): add an item to the end of an array

```javascript
const array = ["element0", "element1"];

console.log(array);
array.push(1);
console.log(array);
```

## .unshift(): add item to the start of an array

```javascript
const array = ["element0", "element1"];

console.log(array);
array.unshift(1);
console.log(array);
```

## .pop(): remove last item

```javascript
const array = ["element0", "element1"];

console.log(array);
const removed = array.pop();
console.log(array);

console.log("removed =", removed);
```

## .shift(): remove first item

```javascript
const array = ["element0", "element1"];

console.log(array);
const removed = array.shift();
console.log(array);

console.log("removed =", removed);
```

## .slice(): get a slice of an array

`array.slice(start, end)` returns a part of an array.

```javascript
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Change these values and see what happens
const start = 3;
const end = 6;

console.log(array);
console.log(array.slice(start));
console.log(array.slice(start, end));
console.log(array.slice(0, end));
```

## .splice(): remove or replace existing elements and/or insert new ones

- Split array in two: `array.splice(index)`:

```javascript
const index = 3;
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const rightPart = array.splice(index);

console.log(rightPart);
console.log(array);
```

- Remove an element from `index`: `array.splice(index, 1)`:

```javascript
const index = 3;
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const removed = array.splice(index, 1);

console.log(removed);
console.log(array);
```

- Insert an `element` at `index`:

```javascript
const element = 420;
const index = 4;
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array.splice(index, 0, element);

console.log(array);
```

- Remove `n` elements starting from index `start`: `array.splice(start, n)`:

```javascript
const start = 3;
const n = 4;
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const removed = array.splice(start, n);

console.log(removed);
console.log(array);
```

- Replace `n` elements starting from index `start` with `item1`, `item2`, ...: `array.splice(start, n, item1, item2, ...)`:

```javascript
const start = 3;
const n = 4;
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const removed = array.splice(start, n, "replace1", true, "replace3");

console.log(removed);
console.log(array);
```

## .filter(): create a filtered array

- Filter an array using a `predicate` function which returns a `boolean`.

```javascript
const array = ["123", "12345", "12", "1", "123", "12"];

// Return `true` from an element whose length is greater than 2
const predicate = (element) => element.length > 2;
const filtered = array.filter(predicate);

console.log(filtered);
console.log(array);
```

- The `predicate` function can also receive the index of the array element as its second argument:

```javascript
const array = ["even1", "odd1", "even2", "odd2", "even3", "odd3"];

// Filter elements whose index is even
const filtered = array.filter((element, index) => index % 2 === 0);

console.log(filtered);
console.log(array);
```

For more information check out the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

## .map(): transform one array to another

```javascript
const array = [1, 2, 3, 4, 5];

// Create a new array with each element doubled
const mapped = array.map((n) => n * 2);

console.log(mapped);
console.log(array);
```

For more information check out the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

## .reduce(): iterate over array and accumulate over a value

```javascript
const array = [10, 10, 10, 10, 10];

const predicate = (accumulator, currentValue) => {
	return accumulator + currentValue;
};
const initialValue = 0;

// Calculate the sum of all elements of the array
const sum = array.reduce(predicate, initialValue);

console.log(sum);
```

For more information check out the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

## .forEach(): iterate over elements of an array

```javascript
const array = ["a", "b", "c"];

// An alternative to `for` loops
array.forEach((element, index) => {
	console.log("element:", element);
	console.log("index:", index);
});
```

## .join(): join an array into a string

```javascript
const array = ["apple", "pineapple", "grape"];
const separator = "@";

console.log(array.join(separator));
```

## create an array filled with zeros

```javascript
const length = 5;
const array = Array(length).fill(0);

console.log(array);
```

## create an array filled with number from 0 to n-1

```javascript
const n = 5;
const array = Array(n)
	.fill(0)
	.map((_, i) => i);

console.log(array);
```
