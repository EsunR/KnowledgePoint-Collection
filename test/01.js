var get = function (key) {
  console.log(this[key]);
}

let obj = {
  name: "花花",
  age: 18
}

get.apply(obj, ['age']);