var num = 10,
  obj = { num: 20 }
obj.fn = (function (num) {
    num = this.num + 10;
    this.num = num + 10;
    return function (){
        this.num += ++num;
    }
})(num); 
// obj.fn.num = 10; 
// obj.fn.num = this.num + 10 = window.num + 10 = 20;
// this.num = window.num = obj.fn.num + 10 = 30;
// => window.num = 30; obj.fn.num = 20
// => return 000fffaaa

var fn = obj.fn;
// fn = 000fffaaa;

fn();
// num + 1 = obj.fn.num + 1 = 21
// => obj.fn.num = 21
// this.num = window.num = window.num + obj.fn.num = 51
// => window.num = 51

obj.fn();
// num + 1 = obj.fn.num + 1 = 22;
// => obj.fn.num = 22;
// this.num = obj.num = obj.num + 22 = 42;
// => obj.num = 42

console.log(num, obj.num)
// 51 42