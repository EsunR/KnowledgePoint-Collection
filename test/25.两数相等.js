function equal(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(equal(0.1 + 0.2, 0.3));