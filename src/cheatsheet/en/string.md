## introduction

`String` represents a sequence of characters.

```javascript
const s1 = "Double quote";
const s2 = 'Single quote'; // Equivalent to double quote
const s3 = `Back tick:
- line1
- line2`;

console.log(s1);
console.log(s2);
console.log(s3);
```

For more informations check the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

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

## escape characters

If you want to display some special characters in a string, you might need to escape them. To escape a character, prepend it with `\`.

Bellow are some cases where you might need to escape a character:

```javascript
// To add a new line `\n` character
const newLine = "line1\nline2\n";
console.log(newLine);

// To display `\`
const path = "\\home\\usr\\.vimrc";
console.log(path);

// To indicate that `'` is not an string delimiter
const message1 = 'You\'ve said: "I had it!"';
console.log(message1);

// To indicate that `"` is not an string delimiter
const message2 = "\"It's mine test's\"";
console.log(message2);
```

If you want to ignore `\` as an escaping character, you can use `String.raw`:

```javascript
// should be used with backticks
const newLine = String.raw`line1\nline2\n`;
console.log(newLine);

const path = String.raw`\home\usr\.vimrc`;
console.log(path);
```

## .length

```javascript
const s = "12345";

console.log(s.length);
```

## .split()

```javascript
const s = "a,b,c,123";
const separator = ",";

console.log(s.split(separator));
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
