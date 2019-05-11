// 除了在判断一个对象的某个key是否存在或者判断某个函数方法的参数是否存在时用 `==` ，其余地方都写 `===`
var obj = {
  name: 'cxk',
  hobbies: '唱、跳、篮球、rap'
}

if (obj.age == null) {
  console.log("cxk 没有年龄属性");
}

console.log("==========================================");

function BasketBallStar(name, hobbies) {
  this.name = name;
  this.hobbies = hobbies;
}

var people = new BasketBallStar(null, '唱、跳、篮球、rap');

if (people.name == null) {
  console.log("篮球明星没有姓名");
} else {
  console.log("篮球明星叫" + people.name);
}

if (people.hobbies == null) {
  console.log("篮球明星没有爱好");
} else {
  console.log("篮球明星的爱好是" + people.hobbies);
}


console.log("==========================================");


function play(play) {
  if (play == null) {
    throw new Error("请传入参数");
  }
  console.log("玩" + play);
}
play();