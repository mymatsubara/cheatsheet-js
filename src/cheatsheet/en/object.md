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
	// You can nest `Object` and/or `Array`
	child: child
};

console.log(father);
```

## access an object's value

```javascript
const equipment = {
	name: "suppa ring",
	status: {
		attack: 10,
		defence: 5
	}
};

const key = "status";

console.log(equipment.name);
console.log(equipment.nonExisting);
console.log(equipment.status.attack);
console.log(equipment[key]);
```

## insert/modify an object's value

```javascript
const equipment = {
	name: "suppa ring",
	status: {
		attack: 10,
		defence: 5
	}
};

equipment.name = "bad ring";
equipment.owner = "Gigachad"; // insert new key-value pair

console.log(equipment);
```

## method: a function property

A `function` saved inside an `object` is often refered as a `method`.

```javascript
const calculator = {
	add: (a, b) => a + b,
	sub: (a, b) => a - b
};

console.log(calculator);
console.log(calculator.add(1, 2));
console.log(calculator.sub(1, 2));
```

## this: reference other properties inside an object's method

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

There a lot more details related to `this` keyword. For more informations check the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/this).

## Object.keys(): list object keys

```javascript
const person = {
	name: "Jujubinha",
	surname: "Monstra",
	age: 20
};

console.log(Object.keys(person));
```

## Object.values(): list object values

```javascript
const person = {
	name: "Jujubinha",
	surname: "Monstra",
	age: 20
};

console.log(Object.values(person));
```

## Object.entries(): list object key-values pairs

```javascript
const person = {
	name: "Jujubinha",
	surname: "Monstra",
	age: 20
};

console.log(Object.entries(person));
```
