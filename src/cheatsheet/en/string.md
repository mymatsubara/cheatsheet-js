## declaration

```javascript
const s1 = "Double quote";
const s2 = "Single quote"; // Equivalent to double quote
const s3 = `Back tick:
- line1
- line2`;

console.log(s1);
console.log(s2);
console.log(s3);
```

## +

```javascript
const s1 = "Hello";
const s2 = "World";

console.log(s1 + " " + s2);
```

## template literal

```javascript
const name = "<INPUT>";

// You can replace values in a string
// surronded by backticks using ${value}
console.log(`Hello, my name is ${name}`);
```

## .length

```javascript
const s = "12345";

console.log(s.length);
```

## .substring()

```javascript
const s = "123456789";
const start = 1;
const end = 6;

console.log(s.substring(start));
console.log(s.substring(start, end));
```

## .charAt()

```javascript
const s = "abcdefg";
const position = 3;

console.log(s.charAt(position));
```

## .toLowerCase()

```javascript
const s = "Hello World!";

console.log(s.toLowerCase());
```

## .toUpperCase()

```javascript
const s = "Hello World!";

console.log(s.toUpperCase());
```
