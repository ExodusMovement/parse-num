parse-num
==========

JavaScript component to parse, clean, remove formatting (unformat) numbers in strings.


Install
-------

    npm install --save parse-num


Usage
-----

### parseNum

**Signature:** `parseNum(value, [decimalSep])`

**Parameters:**

- `value`: Any value to parse a number from. If it's `null` or `undefined`, it will return `NaN`. If it's
a `number`, it will just return the `number`. Otherwise, it will coerce the input `value` to a `string` using
`toString()`.
- `decimalSep`: *optional* `string` parameter to specify a decimal separator. Defaults to `"."`.

**Returns:**

The parsed `number`.

**Example:**

```js
const parseNum = require('parse-num')
// import parseNum from 'parse-num' // if using ES6

parseNum('$ 123,456.78')                // => 123456.78
parseNum('$ 123,456')                   // => 123456
parseNum('&*()$ 123,456')               // => 123456
parseNum(';$@#$%^&123,456.78')          // => 123456.78
parseNum('$ -123,456')                  // => -123456
parseNum('$ -123,456.78')               // => -123456.78
parseNum('&*()$ -123,456')              // => -123456
parseNum(';$@#$%^&-123,456.78')         // => -123456.78
parseNum('$ 123,456', ')')              // => 123.456
parseNum('$ 123456|78', '|')            // => 123456.78
parseNum('&*()$ 123>456', '>')          // => 123.456
parseNum(';$@#$%^&123,456\'78', '\'')   // => 123456.78
```

### Don't want `NaN`?

Don't ever want to deal with NaN? Do this:

```js
var num = parseNum(null)
if (isNaN(num)) num = 0

// could also coerce to integer <=== BE careful, 'INTEGER', not 'FLOAT'
var num = ~~parseNum(null)
console.log(num) // => 0
```


Credits
-------

The basis of this code came from [accounting.js](https://github.com/openexchangerates/accounting.js).


License
-------

MIT
