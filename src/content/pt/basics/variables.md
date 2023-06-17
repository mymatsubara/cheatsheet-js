---
title: Variáveis
---

```javascript
const variavelConst = "v1";
let variavelLet = "v2";
var variavelVar = "v3";

// É possível imprimir vários valores no `console.log`
// usando vírgulas `,`
console.log(variavelConst, variavelLet, variavelVar, "v4");

// Variáveis prefixadas por `const` não podem ser associadas a outro valor
// Descomente a linha abaixo para ver o que acontece
// variavelConst = "novo v1";
variavelLet = "novo v2";
variavelVar = "novo v3";

console.log(variavelConst, variavelLet, variavelVar, "v4");

// Nomes válidos de variáveis
const _valido = "valido";
const $v4LiDo = "valido";

// Nomes inválidos de variáveis (descomente para testar)
// const inva lido = "invalido"; // Não pode conter espaços em branco
// const 1nvalido = "invalido"; // Não pode começar com números
// const inv%lido = "invalido"; // Não pode conter caracter especial além de `_` e `$`
```

Os prefixo disponíveis são os seguintes `prefixos`:

-   `var`: você poderá associar outro valor a essa variável no escopo atual (evite usar esse prefixo)
-   `let`: você poderá associar outro valor a essa variável no escopo atual
-   `const`: você não poderá associar outro valor a essa variável no escopo atual

Os `var` e o `let` são muito parecidos, mas por [questões](https://www.freecodecamp.org/portuguese/news/var-let-e-const-qual-e-a-diferenca/)
que não valem a pena ser discutidas agora evite usar o `var`.

Para mais informações sobre nomes de variáveis válidos veja [aqui](https://stackoverflow.com/questions/1661197/what-characters-are-valid-for-javascript-variable-names).
