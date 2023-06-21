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

// Replace values in a string delimited by backticks using ${value}
console.log(`Hello, my name is ${name}`);
```

## escape characters

If you want to display some special characters in a `String`, you might need to escape them. To escape a character, prepend it with `\`.

Bellow are some cases where you might need to escape a character:

```javascript
// To add a new line `\n` character
const newLine = "line1\nline2\n";
console.log(newLine);

// To display `\`
const path = "\\home\\usr\\.vimrc";
console.log(path);

// To indicate that `'` is not a string delimiter
const singleQuote = 'You\'ve said: "I had it!"';
console.log(singleQuote);

// To indicate that `"` is not a string delimiter
const doubleQuote = "\"It's mine test's\"";
console.log(doubleQuote);

// To indicate that "`" is not a string delimiter
const backticks = `variable \`message\` is not defined`;
console.log(backticks);
```

If you want to ignore `\` as an escaping character, you can use `String.raw`:

```javascript
// should be used string delimited by backticks
const newLine = String.raw`line1\nline2\n`;
console.log(newLine);

const path = String.raw`\home\usr\.vimrc`;
console.log(path);
```

## .length

```javascript
const s = "12345";
const length = s.length;

console.log("s.length =", length);
```

## .split()

```javascript
const s = "a,b,c,123";
const separator = ",";

const split = s.split(separator);

console.log(`s.split(separator) =`, split);
```

## .substring()

```javascript
const s = "12345";
const start = 1;
const end = 3;

const s1 = s.substring(start);
const s2 = s.substring(start, end);

console.log("s.substring(start):", s1);
console.log("s.substring(start, end):", s2);
```

## .charAt()

```javascript
const s = "abcdefg";
const position = 3;

const char = s.charAt(position);

console.log("s.charAt(position):", char);
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
