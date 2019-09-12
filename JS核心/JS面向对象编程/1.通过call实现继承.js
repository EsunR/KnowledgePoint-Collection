function Animal() {
  this.isLive = true
  this.eat = function () {
    console.log("吃饭饭");
  }
}

Animal.prototype.sleep = function () {
  console.log("睡觉觉");
}

function Dog() {
  Animal.call(this)
  this.type = "Dog"
}

Dog.prototype.brak = function () {
  console.log("叫叫叫");
}

var dog = new Dog()



// dog.sleep() 报错
dog.brak()
dog.eat()

/*
只能继承父类的实例属性和方法，不能继承原型属性/方法
无法实现复用，每个子类都有父类实例函数的副本，影响性能
*/