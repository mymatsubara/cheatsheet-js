## introduction

`Number` represents a floating-point number.

```javascript
const n1 = 10;
const n2 = 1.5;

console.log(n1);
console.log(n2);
```

For more informations check the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)

## arithmetic operations

```javascript
console.log(1 + 1);
console.log(0.1 + 0.2);
console.log(4 * 5);
console.log(10 / 3);
console.log(3 % 2); // modulo: reminider of integer division
```

## from other types

```javascript
const fromString1 = Number("12345");
const fromString2 = Number("1.5");
const fromString3 = Number("text");
const fromTrue = Number(true);
const fromFalse = Number(false);
const fromUndefined = Number(undefined);
const fromNull = Number(null);

console.log("Number('12345') =", fromString1);
console.log("Number('1.5') =", fromString2);
console.log("Number('text') =", fromString3); // NaN: Not-A-Number
console.log("Number(true) =", fromTrue);
console.log("Number(false) =", fromFalse);
console.log("Number(undefined) =", fromUndefined);
console.log("Number(null) =", fromNull);
```

## parseInt()

```javascript
console.log(parseInt("123"));
console.log(parseInt("1.5")); // keep only the integer part
console.log(parseInt("text"));
```

## parseFloat()

```javascript
console.log(parseFloat("123"));
console.log(parseFloat("1.5"));
console.log(parseFloat("test"));
```

## hexadecimal, binary and decimal exponetial notations

```javascript
const hexadecimal = 0xff; // prefix `0x`
const binary = 0b11111111; // prefix `0b`
const decimalExponential = 0.255e3; // prefix `e<N>`

console.log(hexadecimal);
console.log(binary);
console.log(decimalExponential);
```

## .toString(): decimal, hexadecimal and binary repesentation strings

```javascript
const n = 255;
const decimal = n.toString();
const binary = n.toString(2);
const hexadecimal = n.toString(16);

console.log(decimal); // decimal representation
console.log(binary); // binary representation (base-2)
console.log(hexadecimal); // hexadecimal representation (base-16)
```

## bitwise operations

```javascript
const a = 0b1001; // 9
const b = 0b1111; // 15
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

For more informations check [the w3schools tutorial](https://www.w3schools.com/js/js_bitwise.asp).

## NaN: Not-A-Number

```javascript
const n1 = NaN;
const n2 = Number("test");
const check1 = isNaN(n2);

console.log(n1);
console.log(n2);
console.log(check1);
```
