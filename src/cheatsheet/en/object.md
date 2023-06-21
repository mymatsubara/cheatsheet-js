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
