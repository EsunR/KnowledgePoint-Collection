var num1 = 55;
var num2 = 66;
function f1(num, num1) {  
  num = 100;
  num1 = 100;
  num2 = 100;
  console.log(num);  // 100
  console.log(num1); // 100
  console.log(num2); // 100
}
f1(num1, num2);
console.log(num1);   // 55
console.log(num2);   // 100
console.log(num);    // num is not defined


