## execute javascript from the browser console

1. Press `f12` or `Ctrl+Shift+I` (Windows) or `Cmd+Shift+I` (Mac) to open your browser's `Developer tools`.
2. Go to the `Console` tab.
3. Write some javascript and press `Enter` to execute it.

![Executing javascript on console](/cheatsheet/basics/dev-tools.gif)

## execute javascript from an inline <script> tag

You can add your **javascript script** directly to your **html files** using the `<script>` tag.

1. Open an text editor and paste the following content:

```html
<html>
	<head>
		<script>
			// !!! Add you javascript code inside the `script` tag !!!
			console.log('hello from html file');
		</script>
	</head>
	<body>
		<h1>Your script was executed!</h1>
		<p>
			Press <b><code>f12</code></b> and go to the <b><code>Console</code></b> to see the output.
		</p>
	</body>
</html>
```

2. Save the file with a `.html` extension (eg. `index.html`)
3. Open the file in your browser.

### Step by step

![Creating and opening a html file with inline script](/cheatsheet/basics/inline-script.gif)

## execute an external javascript script from html

You can reference an **external script** in your html using using `<script src="script-url">`.

1. Create a script file called `script.js` with the following content:

```javascript
console.log('hello from external script');
```

2. Create a html file called `index.html` in the **same folder** as `script.js` with the following content:

```html
<html>
	<head>
		<script src="./script.js"></script>
	</head>
	<body>
		<h1>Your script was executed!</h1>
		<p>
			Press <b><code>f12</code></b> and go to the <b><code>Console</code></b> to see the output.
		</p>
	</body>
</html>
```

3. Open `index.html` in your browser.

### Step by step

![Creating and opening a javascript and referencing it from html](/cheatsheet/basics/external-script.gif)

## execute javascript outside the browser using Node.js

You can execute **javascript** code outside the browser using `Node.js`.

1. Download `Node.js` [here](https://nodejs.org/) and install it.
2. Create a file called `index.js` with the following content:

```javascript
console.log('hello from Node.js');
```

3. Open a terminal where the file is located
4. Execute the script with the following command: `node <filename>` (eg. `node index.js`)

### Step by step

![Executing a script using Node.js](/cheatsheet/basics/node-js.gif)

## console.log()

Use `console.log()` to print messages to the screen.

```javascript
// Edit the messages bellow and see the output change
console.log('👋');
console.log('message1', 'message2', 'message3');
```

## comments

Use `//` to create a **single line comment**.

Use `/**/` to create a **multi-line comment**.

```javascript
// Single line comments
/* 
    Multi-line comments:
    - a
    - b
*/
```

## variables

```javascript
// You can name values by defining variables
const variable1 = '1️⃣';
let variable2 = '2️⃣';
var variable3 = '3️⃣'; // `var` is not recommended

console.log(variable1, variable2, variable3);

// You can assign new values to `let` and `var` variables
variable2 = '❗';
variable3 = '❕';

console.log(variable1, variable2, variable3);

// `const` variables cannot be reassigned (uncomment line bellow)
// variable1 = "error";
// console.log(variable1);
```

## alert

```javascript
alert('alert fired');
```

## undefined and null

```javascript
// Special value which represents not assigned data
const u = undefined;
// Special value which represents empty or blank value
const n = null;

console.log(u, n);
```

## good references

Most of the content on this cheatsheet is based on the following websites:

- [javascript.info](https://javascript.info/): articles about javascript concepts from basics to advanced
- [MDN docs](https://developer.mozilla.org/): detailed documentation for most javascript concepts
