import _test from 'ava'
import fixtures from './fixtures'
import parseNum from '../'

const test = _test.cb

test('parse strings to numbers', function (t) {
  fixtures.valid.forEach((f) => {
    if (f.length === 2) {
      const desc = `${f[0]} => ${f[1]}`
      t.is(parseNum(f[0]), f[1], desc)
    } else if (f.length === 3) {
      const desc = `${f[0]} => ${f[2]}`
      t.is(parseNum(f[0], f[1]), f[2], desc)
    }
  })

  t.end()
})

test('NaN results', function (t) {
  t.true(Number.isNaN(parseNum()), 'undefined => NaN')
  t.true(Number.isNaN(parseNum(null)), 'null => NaN')
  t.true(Number.isNaN(parseNum({})), '{} => NaN')
  t.true(Number.isNaN(parseNum([])), '[] => NaN')
  t.true(Number.isNaN(parseNum(true)), 'true => NaN')
  t.true(Number.isNaN(parseNum(false)), 'false => NaN')
  t.end()
})

test('toString() conversions', function (t) {
  t.is(parseNum([3, 4]), 34)
  t.is(parseNum({ toString: () => '22' }), 22)
  t.is(parseNum(new Date(1452027142877)), 52016145222)
  t.end()
})
