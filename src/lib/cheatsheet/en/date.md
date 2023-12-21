## introduction

A `Date` is a javascript object which enables working with datetime.

```javascript
const now = new Date();

console.log(now);
```

For more information check the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date).

## from string

```javascript
const date1 = new Date('1995-12-17T03:24:00');
const date2 = new Date('2023-01-15');

console.log(date1);
console.log(date2);
```

For more information check the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format).

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

- `date.getFullYear()`:

```javascript
const date = new Date();
console.log(date);
console.log(date.getFullYear());
```

- `date.getMonth()` (returns 0-indexed month. eg. January: 0):

```javascript
const date = new Date();
console.log(date);
console.log(date.getMonth());
```

- `date.getDate()`:

```javascript
const date = new Date();
console.log(date);
console.log(date.getDate());
```

- `date.getDay()` (returns 0-indexed week day. eg. Sunday: 0):

```javascript
const date = new Date();
console.log(date);
console.log(date.getDay());
```

- `date.getHours()`:

```javascript
const date = new Date();
console.log(date);
console.log(date.getHours());
```

- `date.getMinutes()`:

```javascript
const date = new Date();
console.log(date);
console.log(date.getMinutes());
```

- `date.getSeconds()`:

```javascript
const date = new Date();
console.log(date);
console.log(date.getSeconds());
```

- `date.getMilliseconds()`:

```javascript
const date = new Date();
console.log(date);
console.log(date.getMilliseconds());
```

- `date.getTime()` (returns [unix timestamp](https://en.wikipedia.org/wiki/Unix_time)):

```javascript
const date = new Date();
console.log(date);
console.log(date.getTime()); // unix timestamp
```

For more information check the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#instance_methods).

## from epoch timestamp

`Epoch timestamp` is the number of milliseconds elapsed after the midnight at the beginning of January 1st, 1970, UTC.

```javascript
const date = new Date(628021800000);

console.log(date);
```

## to formatted string

- `date.toString()`:

```javascript
const date = new Date();
console.log(date.toString());
```

- `date.toDateString()`:

```javascript
const date = new Date();
console.log(date.toDateString());
```

- `date.toTimeString()`:

```javascript
const date = new Date();
console.log(date.toTimeString());
```

- `date.toISOString()`:

```javascript
const date = new Date();
console.log(date.toISOString());
```

- `date.toJSON()`:

```javascript
const date = new Date();
console.log(date.toJSON());
```

- `date.toUTCString()`:

```javascript
const date = new Date();
console.log(date.toUTCString());
```

- `date.toLocaleString()`:

```javascript
const date = new Date();
console.log(date.toLocaleString());
```

- `date.toLocaleDateString()`:

```javascript
const date = new Date();
console.log(date.toLocaleDateString());
```

- `date.toLocaleTimeString()`:

```javascript
const date = new Date();
console.log(date.toLocaleTimeString());
```

For more information check the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date.prototype.todatestring).

## .toLocaleDateString(): more control over formatted string

```javascript
// Set locale to `undefined` to use the browser's default language
const locale = 'en-US';

const options = {
	weekday: 'long',
	year: '2-digit',
	month: 'short',
	hour: '2-digit',
	minute: '2-digit',
	timeZone: 'America/Cambridge_Bay'
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
	localeMatcher?: 'best fit' | 'lookup' | undefined;
	weekday?: 'long' | 'short' | 'narrow' | undefined;
	era?: 'long' | 'short' | 'narrow' | undefined;
	year?: 'numeric' | '2-digit' | undefined;
	month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow' | undefined;
	day?: 'numeric' | '2-digit' | undefined;
	hour?: 'numeric' | '2-digit' | undefined;
	minute?: 'numeric' | '2-digit' | undefined;
	second?: 'numeric' | '2-digit' | undefined;
	timeZoneName?:
		| 'short'
		| 'long'
		| 'shortOffset'
		| 'longOffset'
		| 'shortGeneric'
		| 'longGeneric'
		| undefined;
	formatMatcher?: 'best fit' | 'basic' | undefined;
	hour12?: boolean | undefined;
	timeZone?: string | undefined; // Timezone identifier list (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
}
```

For more information check the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString).

## to specific timezone

Use `date.toLocaleString()` to format a `Date` to a specific timezone. [[Timezones list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)]

```javascript
const now = new Date();
const formatted = now.toLocaleString(undefined, {
	timezone: 'America/Cambridge_Bay'
});

console.log(formatted);
```

For more information about `date.toLocaleString()` check out the [mdn docs](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString).
