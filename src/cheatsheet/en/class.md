## introduction

> In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods). ([Wikipedia](<https://en.wikipedia.org/wiki/Class_(computer_programming)>))

```javascript
class Person {
	constructor(name) {
		this.name = name;
	}

	sayHello() {
		console.log(`Hello, my name is ${this.name}`);
	}
}

const person = new Person("Gigachad");

person.sayHello();
console.log(person);
```

The code above has the **same result** as the following code - with some [minor differences](https://javascript.info/class#not-just-a-syntactic-sugar).

```javascript
function Person(name) {
	this.name = name;
}

Person.prototype.sayHello = function () {
	console.log(`Hello, my name is ${this.name}`);
};

const person = new Person("Gigachad");

person.sayHello();
console.log(person);
```

## getter and setter

```javascript
class Contact {
	constructor(email) {
		this.email = email; // setter is called
	}

	set email(value) {
		console.log("email set");
		this._email = value;
	}

	get email() {
		console.log("email get");
		return this._email;
	}
}

const contact = new Contact("test@gmail.com");

console.log(contact.email);
```

## class field

```javascript
class Person {
	// Class field - every instance of `Person` will have its own `age` property
	age = 400 + 20;

	constructor(name) {
		console.log("inside constructor - age:", this.age);
		this.name = name;
	}
}

const person = new Person("Gigachad");

console.log();
console.log("outside constructor");
console.log(person);
```

## bind `this` to the instance object

```javascript
class ThisPrinter {
	constructor(value) {
		this.value = value;
	}

	print() {
		console.log(this.value);
	}

	// `this` will be set to the instance object
	printArrowFunc = () => {
		console.log(this.value);
	};
}

const printer = new ThisPrinter("hello");

// `this` is bind to global this
setTimeout(printer.print, 1000);

// Call the method with `this` bound to the instance object
setTimeout(() => printer.print(), 2000);

// Have the same effect
setTimeout(printer.printArrowFunc, 3000);
```

## inheritance

Use the keyword `extends` to inherit another class.
Inheritance allows you to create a new class with new or overriden functionality over a base class.

```javascript
class Item {
	constructor(value) {
		this.value = value;
	}

	sell() {
		console.log(`Sold for $${this.value}`);
	}

	use() {
		console.log("Item used");
	}
}

// Sword inherits Item
class Sword extends Item {
	// Override Item's constructor
	constructor(value, damage) {
		super(value); // Call Item's constructor (obligatory when overriding a constructor)
		this.damage = damage;
	}

	// Add a new method
	attack() {
		console.log(`Attack with sword (${this.damage} damage)`);
	}

	// Override Item's `use` method
	use() {
		console.log("Inspecting sword...");
		super.use(); // Call Item's `use` method
	}
}

const sword = new Sword(10, 666);

sword.sell();
sword.attack();
sword.use();
```

```javascript
class Animal {
	name = "animal";

	constructor() {
		alert(this.name);
	}
}

class Rabbit extends Animal {
	name = "rabbit";

	constructor() {
		super();
		alert(this.name);
	}
}

new Animal(); // animal
new Rabbit(); // animal
```

## static methods/properties

A **static method** is just like a normal function with `this` set to the class constructor. Prepend a method with the keyword `static` to create a static method. Also static methods cannot be called from a object instanciated from the class.

```javascript
class Calculator {
	static add(a, b) {
		return a + b;
	}
}

console.log(Calculator.add(1, 1));

// This won't work:
// const calculator = new Calculator();
// calculator.add(1, 1);
```

You can also create **static properties**:

```javascript
class Calculator {
	static pi = 3.14;
}

console.log(Calculator.pi);
```

## private methods/properties

Sometimes we want to prevent some methods or properties to be accessed from outside or inheriting classes. Prepend a method/property with `#` to make it private and hide from the consumer of the class.

```javascript
class Counter {
	#count = 0; // private property

	increment() {
		this.#count++;
		console.log(this.#count);
	}

	#reset() {
		this.#count = 0;
	}
}

const counter = new Counter();

counter.increment();
counter.increment();

// These won't work:
// counter.#reset();
// console.log(counter.#count);
// counter.#count = 0;
```

## instanceof

Use the `instanceof` operator to check if an object is belongs to a specific class. Inheritance is also considered.

```javascript
class Parent {}
class Child extends Parent {}

const child = new Child();

console.log(child instanceof Parent);
console.log(child instanceof Child);
console.log(child instanceof Array);
```
