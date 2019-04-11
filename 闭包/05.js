function sum(a, b) {
  let result = a + b;
  return Number(result.toFixed(2));
}

console.log(sum(0.1, 0.2));
console.log(sum(0.1, 0.2) === 0.3);