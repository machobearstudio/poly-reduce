'use-strict'

var curry = require('curry')

function reduce(func, accum, object) {
  if (!object) {
    return accum
  }

  if (object instanceof Array) {
    return object.reduce(func, accum)
  }

  var result, i
  var keys = Object.keys(object)
  var keysLength = keys.length

  if (keysLength <= 0) {
    return accum
  }

  if (accum === undefined || accum === null) {
    result = object[keys[0]]
    i = 1
  } else {
    result = accum
    i = 0
  }

  for (; i < keysLength; i++) {
    var key = keys[i]
    result = func(result, object[key], key, object)
  }

  return result
}

module.exports = curry(reduce)
