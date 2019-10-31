function Car(name) {
  var price = 100;
  function sale() {
    console.log(`${name}被固定卖出${price}元`);
  }
  return sale
}



var bigYellow = Car('大黄蜂');
var price = 1;
console.log(price);
bigYellow();
