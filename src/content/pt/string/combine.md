---
title: Combinar strings
---

Você pode juntar uma ou mais strings usando `+` ou `${}` (apenas em strings delimitadas por crase - `` ` ``).

```javascript
const s1 = "Hello";
const s2 = "World";
const s3 = s1 + " " + s2;
const s4 = `${s1} ${s2}`;

console.log(s3);
console.log(s4);
```
