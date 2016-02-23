'use strict'

// modified from accounting.js
function parseNum (value, decimalSep) {
  if (value == null) return NaN
  decimalSep = decimalSep || '.'

  // Return the value as-is if it's already a number:
  if (typeof value === 'number') return value

  // build regex to strip out everything except digits, decimal point and minus sign:
  var regex = new RegExp('[^0-9-' + decimalSep + ']', ['g'])
  var unformatted = value.toString() // explicitly convert to string
  unformatted = unformatted
    // .replace(/\((.*)\)/, '-$1') // replace bracketed values with negatives
		.replace(regex, '')         // strip out any cruft
    .replace(decimalSep, '.')   // make sure decimal point is standard

  unformatted = parseFloat(unformatted)

  return unformatted
}

module.exports = parseNum
