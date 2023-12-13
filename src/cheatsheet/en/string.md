## introduction

A `String` represents a sequence of characters.

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

For more information check the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

## +

Use the `+` operator to concatenate strings.

```javascript
const s1 = "Hello";
const s2 = "World";

console.log(s1 + " " + s2);
```

## template string

Inside a backtick (`` ` ``) delimited string you can use the `${expression}` syntax to interpolate over the string.

```javascript
const name = "<INPUT>";

console.log(`Hello, my name is ${name}`);
console.log(`Some math: ${1 + 1}`);
```

## escape characters

If you want to display some special characters in a `String`, you might need to escape them. To escape a character, prepend it with a backslash (`\`).

Bellow are some cases where you might need to escape a character:

- To add a new line `\n` character:

```javascript
const newLine = "line1\nline2\nline3";
console.log(newLine);
```

- To display a backslash (`\`):

```javascript
const path = "\\home\\usr\\.vimrc";
console.log(path);
```

- To indicate that `'`, `"` or `` ` `` are not being used as a string delimiter:

```javascript
const singleQuote = 'You\'ve said: "I had it!"';
const doubleQuote = "\"It's mine test's\"";
const backticks = `variable \`message\` is not defined`;

console.log(singleQuote);
console.log(doubleQuote);
console.log(backticks);
```

If you want to ignore `\` as an escaping character, you can use `String.raw`:

```javascript
// Should be used with a string delimited by backticks
const newLine = String.raw`line1\nline2\n`;
console.log(newLine);

const path = String.raw`\home\usr\.vimrc`;
console.log(path);
```

## .length

`string.length` contains the number of characters of a string.

```javascript
const s = "12345";
const length = s.length;

console.log("s.length =", length);
```

## .split()

`string.split(separator)` returns an array of the substrings delimited by `separator`.

```javascript
const s = "a,b,c,123";
const separator = ",";

const split = s.split(separator);

console.log(`s.split(separator) =`, split);
```

## .substring()

`string.substring(start, end)` returns a part of the string starting at `start` index and ending over `end` index.

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

`string.charAt(index)` returns the character at `index`.

```javascript
const s = "abcdefg";
const index = 3;

const char = s.charAt(index);

console.log("s.charAt(index):", char);
```

## .toLowerCase()

`string.toLowerCase()` returns a copy of `string` with all characters in lowercase.

```javascript
const s = "Hello World!";
console.log(s.toLowerCase());
```

## .toUpperCase()

`string.toUpperCase()` returns a copy of `string` with all characters in uppercase.

```javascript
const s = "Hello World!";
console.log(s.toUpperCase());
```
