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
