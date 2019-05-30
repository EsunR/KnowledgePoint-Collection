function PubSub() {
  this.handlers = {};
}
PubSub.prototype = {
  // 订阅事件
  on: function (eventType, handler) {
    var self = this;
    if (!(eventType in self.handlers)) {
      self.handlers[eventType] = [];
    }
    self.handlers[eventType].push(handler);
    return this;
  },
  // 触发事件(发布事件)
  emit: function (eventType) {
    var self = this;
    var handlerArgs = Array.prototype.slice.call(arguments, 1);
    for (var i = 0; i < self.handlers[eventType].length; i++) {
      self.handlers[eventType][i].apply(self, handlerArgs);
    }
    return self;
  }
};// 调用方式如下：

var pubsub = new PubSub();

pubsub.on('A', function (data) {
  console.log(1 + data);  // 执行第一个回调业务函数
});

pubsub.on('A', function (data) {
  console.log(2 + data); // 执行第二个业务回调函数
});

// 触发事件A

pubsub.emit('A', "我是参数");