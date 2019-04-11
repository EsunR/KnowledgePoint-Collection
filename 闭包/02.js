var i = 1;
function fn(i) {
  return function (n) {
    console.log(n + (++i));
  }
}

var f = fn(2);   
f(3);     // 6 
fn(5)(6); // 12
fn(7)(8)  // 16
f(4)      // 8