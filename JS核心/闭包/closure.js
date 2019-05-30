function dog() { }
dog.prototype.bark = function (msg) {
  // var that = this
  console.log(msg);
  setTimeout(function(){
    this.bark(msg);
  }, 1000);
}

var d = new dog();

d.bark("wang");