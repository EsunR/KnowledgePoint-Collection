String.prototype.parseQuery = function () {
  var queryStr = this.split("?")[1];
  var queryArr = queryStr.split("&");
  var queryObj = {};

  
  for (var i in queryArr) {
    var queryItem = queryArr[i].split('=');
    queryObj[queryItem[0]] = queryItem[1];
  }
  return queryObj;
}

var url = "www.baidu.com/search?id=1&content=hahahahah&time=2019524"
console.log(url.parseQuery());
console.log("origin: " + url);