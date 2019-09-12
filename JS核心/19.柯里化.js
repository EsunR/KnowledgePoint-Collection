function add(a, b) {
  return a + b
}

// function prefixAdd() {
//   let _null = Object.create(null)
//   return add.bind(_null)
// }

// var newAdd = prefixAdd()

// console.log(newAdd(2));

// 使用bind实现柯理化
function curry(foo) {
  return function () {
    let _null = Object.create(null)
    arguments = Array.prototype.slice.call(arguments)
    return foo.bind(_null, ...arguments) // => foo(100) 
    // NOTE: bind 返回的函数不会被执行，并且保留传入的参数作为默认参数，当再向返回的bind函数传入参数时，会自动将参数传入到后几位参数中
  }
}

var addCurry = curry(add)
var add100 = addCurry(100)
console.log(add100(3))  // 103
console.log(curry(add)(100, 20)());

// 使用apply实现柯理化
Function.prototype.curryThis = function () {
  var f = this
  var args = Array.prototype.slice.call(arguments)
  return function () {
    var a = Array.prototype.slice.call(arguments)
    a = args.concat(a)
    return f.apply(null, a)
  }
}

console.log(
  (add.curryThis(100))(20)
);