## introduction

`Date` is a javascript object which enables working with datetimes.

```javascript
const now = new Date();

console.log(now);
```

For more information check the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date).

## from string

```javascript
const date1 = new Date("1995-12-17T03:24:00");
const date2 = new Date("2023-01-15");

console.log(date1);
console.log(date2);
```

For more informations check the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format).

## from year, month, day, hours, minutes and seconds

```javascript
const year = 2023;
const month = 0; // 0-indexed (eg. January: 0)
const day = 10;
const hours = 4;
const minutes = 20;
const seconds = 15;

const startMonth = new Date(year, month);
const startDay = new Date(year, month, day);
const startHour = new Date(year, month, day, hours);
const startMinute = new Date(year, month, day, hours, minutes);
const startSecond = new Date(year, month, day, hours, minutes, seconds);

console.log(startMonth);
console.log(startDay);
console.log(startHour);
console.log(startMinute);
console.log(startSecond);
```

## get year, month, day, weekday, hours, minutes, seconds, milliseconds and timestamp

```javascript
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const weekday = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();
const timestamp = date.getTime(); // unix time stamp

console.log("date:", date);
console.log("date.getFullYear():", year);
console.log("date.getMonth():", month, "(0-indexed - eg. January: 0)");
console.log("date.getDate():", day);
console.log("date.getDay():", weekday, "(0-indexed - eg. Sunday: 0)");
console.log("date.getHours():", hours);
console.log("date.getMinutes():", minutes);
console.log("date.getSeconds():", seconds);
console.log("date.getMilliseconds():", milliseconds);
console.log("date.getTime():", timestamp);
```

## from epoch timestamp

`Epoch timestamp` is the number of miliseconds elapsed after the midnight at the beginning of January 1, 1970, UTC.

```javascript
const date = new Date(628021800000);

console.log(date);
```

## to formatted string

```javascript
const date = new Date();

const toString = date.toString();
const toDateString = date.toDateString();
const toTimeString = date.toTimeString();
const toISOString = date.toISOString();
const toJSON = date.toJSON();
const toUTCString = date.toUTCString();
const toLocaleString = date.toLocaleString();
const toLocaleDateString = date.toLocaleDateString();
const toLocaleTimeString = date.toLocaleTimeString();

console.log(toString, "- date.toString()");
console.log(toDateString, "- date.toDateString()");
console.log(toTimeString, "- date.toTimeString()");
console.log(toISOString, "- date.toISOString()");
console.log(toJSON, "- date.toJSON()");
console.log(toUTCString, "- date.toUTCString()");
console.log(toLocaleString, "- date.toLocaleString()");
console.log(toLocaleDateString, "- date.toLocaleDateString()");
console.log(toLocaleTimeString, "- date.toLocaleTimeString()");
```

## .toLocaleDateString(): more control over formatted string

```javascript
// Set locale to `undefined` to use browser default language
const locale = "en-US";
// All available options are listed bellow this code block
const options = {
	weekday: "long",
	year: "2-digit",
	month: "short",
	hour: "2-digit",
	minute: "2-digit",
	timeZone: "America/Cambridge_Bay"
};

const date = new Date();
const formatted = date.toLocaleDateString(locale, options);

console.log(formatted);
```

You have more control over the formatted string using `date.toLocaleDateString(locales, options)`, where:

- `locale`: a string with a [BCP 47 language tag](https://www.techonthenet.com/js/language_tags.php)
- `options`: is an object of with the following fields 👇

```typescript
interface DateTimeFormatOptions {
	localeMatcher?: "best fit" | "lookup" | undefined;
	weekday?: "long" | "short" | "narrow" | undefined;
	era?: "long" | "short" | "narrow" | undefined;
	year?: "numeric" | "2-digit" | undefined;
	month?: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined;
	day?: "numeric" | "2-digit" | undefined;
	hour?: "numeric" | "2-digit" | undefined;
	minute?: "numeric" | "2-digit" | undefined;
	second?: "numeric" | "2-digit" | undefined;
	timeZoneName?:
		| "short"
		| "long"
		| "shortOffset"
		| "longOffset"
		| "shortGeneric"
		| "longGeneric"
		| undefined;
	formatMatcher?: "best fit" | "basic" | undefined;
	hour12?: boolean | undefined;
	timeZone?: string | undefined; // Timezone identifier list (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
}
```

For more informations check the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString).
