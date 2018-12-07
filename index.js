'use-strict'

var curry = require('curry')

function reduce(func, accum, object) {
  if (!object) {
    return accum
  }

  if (object instanceof Array) {
    return object.reduce(func, accum)
  }

  var result
  var keys = Object.keys(object)
  var keysLength = keys.length

  if (keysLength <= 0) {
    return accum
  }

  result = accum || object[keys[0]]

  for (var i = 1; i < keysLength; i++) {
    var key = keys[i]
    result = func(result, object[key], key, object)
  }

  return result
}

module.exports = curry(reduce)
