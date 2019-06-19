function Animial(sort) {
  this.sort = sort;
}

Animial.prototype.walk = function () {
  console.log('walking... ...');
}

function Dog() {
  this.sort = 'Dog';
}

Dog.prototype.brak = function () {
  console.log('wang!wang!wang!');
}

Dog.__proto__ = Animial;

var dog = new Dog();

dog.brak();

console.log(dog.brak);

