## introduction

A `Number` represents a floating-point number.

```javascript
const n1 = 10;
const n2 = 1.5;

console.log(n1);
console.log(n2);
```

For more information check the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number).

## arithmetic operations

```javascript
console.log(1 + 1);
console.log(0.1 + 0.2);
console.log(4 * 5);
console.log(10 / 3);
console.log(3 % 2); // modulo: reminder of integer division
```

## increment and decrement assignment

- **Increment a number**:

```javascript
let i = 0;
const n = 2;
console.log(i);

// increment `i` by `n`
i = i + n;
console.log(i);

// increment `i` by `n`
i += n; // equivalent to `i = i + n`
console.log(i);

i++; // increment `i` by 1
console.log(i);
```

- **Decrement a number**:

```javascript
let i = 0;
const n = 2;
console.log(i);

// decrement `i` by `n`
i = i - n;
console.log(i);

// decrement `i` by `n`
i -= n; // equivalent to `i = i - n`
console.log(i);

i--; // decrement `i` by 1
console.log(i);
```

## from string

Use the `Number()` function to convert a `string`

```javascript
const fromString1 = Number('12345');
const fromString2 = Number('1.5');
const fromString3 = Number('text');

console.log("Number('12345'):", fromString1);
console.log("Number('1.5'): ", fromString2);
console.log("Number('text'): ", fromString3); // NaN: Not-A-Number
```

## from boolean/undefined/null

Use the `Number()` function to convert a `boolean`/`undefined`/`null`:

```javascript
const fromTrue = Number(true);
const fromFalse = Number(false);
const fromUndefined = Number(undefined);
const fromNull = Number(null);

console.log('Number(true): ', fromTrue);
console.log('Number(false): ', fromFalse);
console.log('Number(undefined): ', fromUndefined);
console.log('Number(null): ', fromNull);
```

## parseInt()

Use `parseInt()` to convert a `string` into an integer `number`.

```javascript
console.log(parseInt('123'));
console.log(parseInt('1.5')); // keep only the integer part
console.log(parseInt('text'));
```

## parseFloat()

Use `parseFloat()` to convert a `string` into a floating point `number`.

```javascript
console.log(parseFloat('123'));
console.log(parseFloat('1.5'));
console.log(parseFloat('test'));
```

For more information check the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt).

## hexadecimal, binary and decimal exponential notations

You can also declare numbers using the following notations:

- **Hexadecimal notation**:

```javascript
const number = 0xff; // prefix `0x`
console.log(number);
```

- **Binary notation**:

```javascript
const number = 0b11111111; // prefix `0b`
console.log(number);
```

- **Decimal exponential notation**:

```javascript
const number = 0.255e3; // prefix `e<N>`
console.log(number);
```

## .toString(): hexadecimal and binary representation strings

- **Hexadecimal representation** (base-16):

```javascript
const number = 255;
console.log(number.toString(16));
```

- **Binary representation** (base-2):

```javascript
const number = 255;
console.log(number.toString(2));
```

## bitwise operations

```javascript
const a = 0b1001; // decimal: 9
const b = 0b1111; // decimal: 15
const shift = 2;

// Bitwise operations
const and = a & b;
const or = a | b;
const xor = a ^ b; // xor: Exclusive or
const not = ~a; // flip all 32-bits, including sign bit
const leftShift = a << shift;
const signedRightShift = a >> shift; // if applied on negative numbers, keep sign
const zeroFillRightShift = a >>> shift; // if applied on negative numbers, do not keep sign

// Printing
const aBin = a.toString(2);
const bBin = b.toString(2);
console.log(`${aBin} & ${bBin} = ${and.toString(2)} (and)`);
console.log(`${aBin} | ${bBin} = ${or.toString(2)} (or)`);
console.log(`${aBin} ^ ${bBin} = ${xor.toString(2)} (xor)`);
console.log(`~${aBin} = ${not.toString(2)} (not)`);
console.log(`${aBin} << ${shift} = ${leftShift.toString(2)} (left shift)`);
console.log(`${aBin} >> ${shift} = ${signedRightShift.toString(2)}`);
console.log(`${aBin} >>> ${shift} = ${zeroFillRightShift.toString(2)}`);
```

For more information check [the w3schools tutorial](https://www.w3schools.com/js/js_bitwise.asp).

## NaN: Not-A-Number

`NaN` is a special value used to represent **Not-A-Number**.

```javascript
const n1 = NaN;
const n2 = Number('test');
const check = isNaN(n2);

console.log(n1);
console.log(n2);
console.log(check);
```

For more information check [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).

## .toLocaleString(): format a number separators (eg. decimal and thousand separators)

Use `number.toLocaleString(locale)` to format a number according to a locale. [[Locale list](https://www.techonthenet.com/js/language_tags.php)]

```javascript
const number = 123456.789;
const locale = 'de-DE';

// German: `,` as decimal separator and `.` as thousand separator
console.log(number.toLocaleString(locale));
```

For more information check the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString).

## .toLocaleString(): format currency

Use `number.toLocaleString()` to format a number as a currency. [[Currency list](https://www.techonthenet.com/js/currency_codes.php)]

```javascript
const value = 420.69;

const formatted = value.toLocaleString(undefined, {
	currency: 'BRL',
	maximumFractionDigits: 2,
	style: 'currency'
});

console.log(formatted);
```

For more information check the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString).
