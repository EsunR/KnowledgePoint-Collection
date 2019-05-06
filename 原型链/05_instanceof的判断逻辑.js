/*
finstanceofFoo的判断逻辑是：

1. f的__proto_一层一层往上，能否对应到Foo.prototype
2. 再试着判断 f instanceof Object
*/

function Foo(name) {
  this.name = name
}
function Foo2() { }

var f = new Foo('蔡徐坤');

// 让Foo2的prototype指向Foo的prototype，这时候，Foo2与Foo的prototype可以看作为一个对象，也就是说修改Foo的prototype相当于修改Foo1的prototype，反之亦然
Foo2.prototype = Foo.prototype;
Foo.prototype.age = 'unknown';
Foo2.prototype.hobbies = '唱、跳、篮球、Rap';

// 由下可以看出Foo2与Foo的prototype指向同一个对象
console.log(Foo.prototype); // Foo { age: 'unknown', hobbies: '唱、跳、篮球、Rap' }
console.log(Foo2.prototype); //Foo { age: 'unknown', hobbies: '唱、跳、篮球、Rap' }

// 由于实例 f 的 __proto__ 指向 Foo 的 prototype ，而Foo的 prototype 与 Foo2 的 prototype 是一个，所以 f 既属于 Foo 又属于 Foo2
console.log(f instanceof Foo); // true
console.log(f instanceof Foo2); // true


