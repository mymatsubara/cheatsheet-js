## introduction

Use an array to store multiple items in one place:

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

```javascript
const array = ["element0", "element1", "element2"];

console.log("Iterating over array elements (`of`):");
for (let element of array) {
	console.log("element =", element);
}

console.log();
console.log("Iterating over array indexes (`in`):");
for (let index in array) {
	console.log("index =", index);
	console.log(`array[${index}] =`, array[index]);
}
```

## .push(): add item to the end of the array

```javascript
const array = ["element0", "element1"];

console.log(array);
array.push(1);
console.log(array);
```

## .unshift(): add item to the start of the array

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

```javascript
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const start = 3; // inclusive start range index
const end = 6; // exclusive end range index

const slice1 = array.slice(start);
const slice2 = array.slice(start, end);
const slice3 = array.slice(0, end);

console.log(array);
console.log(slice1);
console.log(slice2);
console.log(slice3);
```

## .splice(): remove or replace existing elements and/or adding new ones

- Split array in two: `array.splice(start)`:

```javascript
const start = 3;
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const rightPart = array.splice(start);

console.log(rightPart);
console.log(array);
```

- Remove element from index `start`: `array.splice(start, 1)`:

```javascript
const start = 3;
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const removed = array.splice(start, 1);

console.log(removed);
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

For more informations check the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

## .map(): transform one array to another

```javascript
const array = [1, 2, 3, 4, 5];

// Create a new array if each value of `array` doubled
const mapped = array.map((n) => n * 2);

console.log(mapped);
console.log(array);
```

For more informations check the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

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

For more informations check the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

## .forEach(): iterate over elements of an array

```javascript
const array = ["a", "b", "c"];

// An alternative to `for` loops
array.forEach((element, index) => {
	console.log("element:", element);
	console.log("index:", index);
});
```
