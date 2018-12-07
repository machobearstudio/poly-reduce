'use-strict'

var curry = require('curry');

function reduce(func, accum, object) {
  if (!object) {
    return accum
  }

  if (object instanceof Array) {
    return object.reduce(func, accum)
  }

  var result
  var keys = Object.keys(object)

  if (keys.length <= 0) {
    return accum
  }

  result = accum || object[keys.shift()]

  keys.forEach(function(key, index) {
    if (object.hasOwnProperty(key)) {
      result = func(result, object[key], key, object)
    }
  })

  return result
}

module.exports = curry(reduce)
