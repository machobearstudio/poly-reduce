const assert = require('assert')
const reduce = require('../index.js')

describe('Poly Reduce', function() {
  describe('#1 Handle Arrays', function() {
    it('should handle empty arrays with no default value', function() {
      assert.equal(reduce(x => x, undefined, []), undefined)
    })
    it('should handle empty arrays with default value', function() {
      assert.equal(reduce(x => x, 'works!', []), 'works!')
    })
    it('should handle array with no default value', function() {
      assert.equal(reduce((x, y) => x ? x + y : y, undefined, [1, 2, 3, 4, 5]), 15)
    })
    it('should handle array with default value', function() {
      assert.equal(reduce((x, y) => x + y, 0, [1, 2, 3, 4, 5]), 15)
    })
  })
  describe('#2 Handle Objects', function() {
    it('should handle empty arrays with no default value', function() {
      assert.equal(reduce(x => x, undefined, {}), undefined)
    })
    it('should handle empty arrays with default value', function() {
      assert.equal(reduce(x => x, 'works!', {}), 'works!')
    })
    it('should handle array with no default value', function() {
      assert.equal(reduce((x, y) => x ? x + y : y, undefined, { a: 1, b: 2, c: 3, d: 4, e: 5 }), 15)
    })
    it('should handle array with default value', function() {
      assert.equal(reduce((x, y) => x + y, 0, { a: 1, b: 2, c: 3, d: 4, e: 5 }), 15)
    })
  })
})