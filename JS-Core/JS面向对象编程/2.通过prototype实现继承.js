function Animal() {
  this.isLive = true
  this.color = ['red', 'pink', 'blue']
  this.eat = function () {
    console.log("吃饭饭");
  }
}

Animal.prototype.sleep = function () {
  console.log("睡觉觉");
}

function Dog() {
  this.type = "Dog"
}

Dog.prototype = new Animal()

Dog.prototype.brak = function () {
  console.log("叫叫叫");
}

var dog = new Dog()

dog.sleep()
dog.brak()
dog.eat()
dog.__proto__.isLive = false
dog.color[0] = 'green'
console.log(dog.isLive);
console.log(dog.color);

var newDog = new Dog()
console.log(newDog.isLive);
console.log(newDog.color);