class Mother {
  constructor() {

  }

  born() {
    earth.xiaoming = new People();
  }
}

class People {
  constructor() {
    this.age = 18;
  }

  printAge() {
    console.log(this.age);
  }
}


var earth = {};
var mother = new Mother();
mother.born();

earth.xiaoming.age = 20

console.log(earth.xiaoming.age);
earth.xiaoming.printAge();