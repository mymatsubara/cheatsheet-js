## introduction

An `Object` can be used to store **key-values pairs**.

```javascript
const child = {
	name: "Jujubinha",
	surname: "Monstra",
	age: 20
};

const father = {
	name: "Jujuba",
	surname: "Monstra",
	age: 66,
	// You can nest `Object`s and/or `Array`s
	child: child
};

console.log(father);
```

## access an object's property

```javascript
const equipment = {
	name: "suppa ring",
	status: {
		attack: 10,
		defense: 5
	}
};

const key = "status";

// Accessing object's property
console.log(equipment.name);
console.log(equipment.nonExisting);
console.log(equipment.status.attack);
console.log(equipment[key]);
```

## insert/modify an object's properties

```javascript
const equipment = {
	name: "suppa ring",
	status: {
		attack: 10,
		defense: 5
	}
};

equipment.name = "bad ring";
equipment.owner = "Gigachad"; // insert new key-value pair

console.log(equipment);
```

## remove an objects's property

```javascript
const person = {
	name: "Gigachad",
	age: 420
};

console.log(person);
delete person.age; // removes "age"
console.log(person);
```

## method: a function property

A `function` saved inside an `object` is often called a `method`.

```javascript
const calculator = {
	add: (a, b) => a + b,
	sub: (a, b) => a - b
};

console.log(calculator);
console.log(calculator.add(1, 2));
console.log(calculator.sub(1, 2));
```

## this: reference other properties inside an method

If you want to access another property of the same `object`, you can use the `this` binding.

```javascript
const person = {
	age: 20,
	getThis: function () {
		return this;
	},
	isUnder18: function () {
		return this.age < 18;
	}
};

console.log("this:", person.getThis());
console.log("Is under 18?", person.isUnder18());
```

It is worth noting that [arrow functions](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Functions/Arrow_functions) do not provide their own `this` binding.

```javascript
const person = {
	age: 20,
	isUnder18: () => this.age < 18,
	getThis: () => this
};

console.log("this:", person.getThis());

// Should error because `this` is `undefined`
console.log("Is under 18?", person.isUnder18());
```

There a lot more details related to `this` keyword. For more information check out the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/this).

## Object.keys(): list an object's keys

```javascript
const person = {
	name: "Jujubinha",
	surname: "Monstra",
	age: 20
};

console.log(Object.keys(person));
```

## Object.values(): list an object's values

```javascript
const person = {
	name: "Jujubinha",
	surname: "Monstra",
	age: 20
};

console.log(Object.values(person));
```

## Object.entries(): list an object's key-values pairs

```javascript
const person = {
	name: "Jujubinha",
	surname: "Monstra",
	age: 20
};

console.log(Object.entries(person));
```

## prototype object

Every javascript object has a `prototype object` associated to it. `Prototype objects` can also have a `prototype object` associated to it, enabling what is usually called as [prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Prototypes are important because every time an object's **property** is accessed, the javascript runtime also checks if such **property** is present in one of its `prototype objects` in the prototype chain.

- You can get the prototype of an object using `Object.getPrototypeOf(person)`:

```javascript
const person = {
	name: "Gigachad"
};

// Get the prototype object of `person`
const prototype = Object.getPrototypeOf(person);

// A plain object has its prototype set as `Object.prototype``
console.log(Object.getPrototypeOf(person) === Object.prototype);

// The function `.toString()` is saved inside `Object.prototype`,
// allowing us to call `person.toString()` without defining it ourselves
console.log(person.toString());
```

- You can change an object's prototype using `Object.setPrototypeOf()`:

```javascript
const person = {
	name: "Gigachad"
};

// Declare a new object
const newPrototype = {
	sayHello: function () {
		console.log(`Hello, my name is ${this.name}`);
	}
};

// Set `newPrototype` as `person`'s prototype
Object.setPrototypeOf(person, newPrototype);

// `person` now can call `sayHello()`
person.sayHello();

// The following prototype chain is set:
// `person`->`newPrototype`->`Object.prototype`
console.log(
	"person->newPrototype:",
	Object.getPrototypeOf(person) === newPrototype
);
console.log(
	"newPrototype->Object.prototype:",
	Object.getPrototypeOf(newPrototype) === Object.prototype
);

// Because of the prototype chain `person` still has access to `toString`
console.log(person.toString());
```

## `new` keyword

The `new` keyword is used in pair with a `constructor` function to create a new instance of an object.

```javascript
function Person(name, age) {
	this.name = name;
	this.age = age;
	this.isUnder18 = function () {
		return this.age < 18;
	};
}

Person.prototype.isOver18 = function () {
	return this.age >= 18;
};

// In this example, the `new` keyword does the following:
// 	1. Instantiate an empty object - let's call it `newInstance` for convenience
// 	2. Assigns `Person.prototype` to `newInstance's` prototype
// 	3. Execute the function `Person` with `this` bound to `newInstance`
//	4. `new Person("Gigachad", 420)` returns `newInstance`
const person = new Person("Gigachad", 420);

console.log("person =", person);
console.log("Person.prototype =", Person.prototype);
console.log(Object.getPrototypeOf(person) === Person.prototype);

console.log("Is under 18?", person.isUnder18());
console.log("Is over 18?", person.isOver18());
```

For more information check out the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/new).
