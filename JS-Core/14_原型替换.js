function Animal(name, color) {
  this.name = name;
  this.color = color;
}

Animal.prototype.sayHello = function () {
  console.log(this.name + '：我的颜色是' + this.color);
}

var tiger = new Animal('老虎', '黄色');

var fox = {
  name: '狐狸',
  color: '红色'
}

tiger.sayHello.bind(fox)();
tiger.sayHello.call(fox);
tiger.sayHello.apply(fox);

tiger.sayHello();

