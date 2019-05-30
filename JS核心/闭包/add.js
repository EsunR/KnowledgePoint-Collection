function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return `(${this.x},${this.y})`
}

var p = new Point(1, 2);
console.log(p.toString());