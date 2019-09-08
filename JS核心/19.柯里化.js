function add(a, b) {
  return a + b
}

// function prefixAdd() {
//   let _null = Object.create(null)
//   return add.bind(_null)
// }

// var newAdd = prefixAdd()

// console.log(newAdd(2));

function curry(foo) {
  return function () {
    let _null = Object.create(null)
    arguments = Array.prototype.slice.call(arguments)
    return foo.bind(_null, ...arguments) // => foo(100)
  }
}

var addCurry = curry(add)
var add100 = addCurry(100)
console.log(add100(3))  // 103