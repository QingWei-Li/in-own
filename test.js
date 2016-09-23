import test from 'ava'
import inOwn from './'

test(t => {
  var obj = {key: 'value', age: 18}
  var inObj = inOwn(obj)

  t.true(inObj('key'))
  t.true(inObj('age'))
  t.false(inObj('gender'))
})
