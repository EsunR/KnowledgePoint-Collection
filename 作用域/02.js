function Foo() {
  getName = function () {
    console.log(1);
  }
  return this;
}
Foo.getName = function () {
  console.log(2);
}
Foo.prototype.getName = function () {
  console.log(3);
}
var getName = function () {
  console.log(4);
}
function getName() {
  console.log(5);
}

Foo.getName();  // 2

getName();  // 5(x) 4

Foo().getName();  // 执行Foo()方法 => 将window下的getName进行赋值操作 => 执行window下的getName()方法

getName();  // 1 （此时window下的getName方法已被上一行代码改变）

new Foo.getName(); // 实例化一个Foo对象 => 调用这个实例化对象上的getName() => 查找实例的constructor构造函数上有没有getName方法，没有的话去__proto__上查找 => 在Foo上找到getName方法 => 2

new new Foo().getName(); // 实例化一个Foo对象 => 执行Foo返回一个window对象 => 实例化一个window对象 => 查找window对象上的getName方法

