
# poly-reduce



![https://travis-ci.org/koralarts/poly-reduce.svg?branch=master](https://travis-ci.org/koralarts/poly-reduce.svg?branch=master)
Use reduce with not only Arrays but also with Objects in Javascript.

## Examples

```
var reduce = require('poly-reduce');

var arr = [
  1,
  2,
  3,
  4,
  5
]

function callback(accum, item) {
	return accum + item;
}

reduce(callback, 0, arr); // 15

var = obj {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5
}

reduce(callback, 0, obj); // 15
```

## Test
```
npm test
```