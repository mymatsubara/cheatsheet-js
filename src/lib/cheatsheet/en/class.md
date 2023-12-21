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

const person = new Person('Gigachad');

person.sayHello();
console.log(person);
```

The code above has the **same result** as the code bellow (with some [minor differences](https://javascript.info/class#not-just-a-syntactic-sugar) though).

```javascript
function Person(name) {
	this.name = name;
}

Person.prototype.sayHello = function () {
	console.log(`Hello, my name is ${this.name}`);
};

const person = new Person('Gigachad');

person.sayHello();
console.log(person);
```

For more information check the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

## getter and setter

Use a **getter** to control the value returned by a `property`. Define a getter using the `set property()` syntax.

Use a **setter** to control how the value of a `property` is set. Define a setter using the `set property(value)` syntax.

```javascript
class Contact {
	constructor(email) {
		this.email = email; // setter is called
	}

	// Setter for `email`
	set email(value) {
		console.log('email set');
		this._email = value;
	}

	// Getter for `email`
	get email() {
		console.log('email get');
		return this._email;
	}
}

const contact = new Contact('test@gmail.com');

console.log(contact.email);
```

For more information check the mdn docs:

- [getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
- [setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)

## class field

```javascript
class Person {
	// Class field - every instance of `Person` will have its own `age` property
	age = 400 + 20;

	constructor(name) {
		console.log('inside constructor - age:', this.age);
		this.name = name;
	}
}

const person = new Person('Gigachad');

console.log();
console.log('outside constructor');
console.log(person);
```

For more information check the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields).

## bind `this` to the instance object

One way to bind `this` to a class instance object is using an **arrow function**:

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

const printer = new ThisPrinter('hello');

// `this` is bind to global this (which should be undefined)
setTimeout(printer.print, 1000);

// Call the method with `this` bound to the instance object
setTimeout(() => printer.print(), 2000);

// Have the same effect
setTimeout(printer.printArrowFunc, 3000);
```

## inheritance

Use the keyword `extends` to inherit another class.
Inheritance allows you to create a new class with new or overridden functionality over a base class.

```javascript
// Base class
class Item {
	constructor(value) {
		this.value = value;
	}

	sell() {
		console.log(`Sold for $${this.value}`);
	}

	use() {
		console.log('Item used');
	}
}

// Sword inherits Item
class Sword extends Item {
	// Override Item's constructor
	constructor(value, damage) {
		super(value); // call Item's constructor (obligatory when overriding a constructor)
		this.damage = damage;
	}

	// Add a new method
	attack() {
		console.log(`Attack with sword (${this.damage} damage)`);
	}

	// Override Item's `use` method
	use() {
		console.log('Inspecting sword...');
		super.use(); // call Item's `use` method
	}
}

const sword = new Sword(10, 666);

sword.sell();
sword.attack();
sword.use();
```

For more information check the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/extends).

## static methods/properties

A **static method** is just like a normal function with `this` set to the class constructor. To create a static method insert the `static` keyword before the method. Also static methods cannot be called from a object instantiated from the class.

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

- You can also create **static properties**:

```javascript
class Calculator {
	static pi = 3.14;
}

console.log(Calculator.pi);
```

For more information check the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static).

## private methods/properties

Sometimes we want to prevent some methods or properties to be accessed from outside. Prepend a method or property with `#` to make it private and hide from the consumer of the class.

```javascript
class Counter {
	#count = 0; // private property

	increment() {
		this.#count++;
		console.log(this.#count);
	}

	// Private method
	#reset() {
		this.#count = 0;
	}
}

const counter = new Counter();

counter.increment();
counter.increment();

// Since you can't access private methods/properties
// outside the class, these won't work 👇:
// counter.#reset();
// console.log(counter.#count);
// counter.#count = 0;
```

For more information check the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_properties).

## instanceof

Use the `instanceof` operator to check if an object is belongs to a specific class. Inheritance is also considered.

```javascript
class Parent {}
class Child extends Parent {}

const child = new Child();

console.log(child instanceof Parent); // true
console.log(child instanceof Child); // true
console.log(child instanceof Array); // false
```

For more information check the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof).
