function adder() {
  let sum = 0
  return function (i) {
    sum += i;
    return sum
  }
}

let a = adder()

for (let i = 0; i < 10; i++) {
  console.log(a(i))
}