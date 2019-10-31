// 定义 DataHub 类作为发布者
function DataHub() {}

DataHub.prototype.notify = function(url, callback) {
  callback(url);
}



// 定义 DownloadManager 类作为事件通道
function DownloadManager() {
  // 发布的事件列表
  this.events = {};
  // 结构为：{订阅事件1: [订阅者1_1, 订阅者1_2], 订阅事件2: [订阅者2_1, 订阅者2_2]}，订阅者的结构为 {taskId: Number, handler: Function}
  this.uId = -1;
}

// 发布
DownloadManager.prototype.publish = function(eventType, url) {
  if (!this.events[eventType]) {
    // 判断是否有订阅者订阅该事件,
    return false;
  }
  // 
  var subscribers = this.events[eventType],
    count = subscribers ? subscribers.length : 0;
  // 循环遍历订阅事件队列中的订阅者
  while (count--) {
    var subscriber = subscribers[count];
    subscriber.handler(eventType, subscriber.taskId, url);
  }
}

// 订阅
DownloadManager.prototype.subscribe = function(eventType, handler) {
  if (!this.events[eventType]) {
    // 如果订阅的事件不存在，就在 events 对象中创建一个，让其值为一个空数组，用来存放订阅该事件的订阅者
    this.events[eventType] = [];
  }
  var taskId = (++this.uId).toString();
  // 将该订阅者放入对应的事件的订阅者队列中
  this.events[eventType].push({
    taskId: taskId,
    handler: handler
  });

  return taskId;
}



// 先订阅再发布


// 创建一个数据中心
var dataHub = new DataHub();

// 创建一个下载事件管理器
var downloadManager = new DownloadManager();

// 创建一个下载器
var dataLoader = function(eventType, taskId, url) {
  console.log('Task ' + taskId + ' load data from ' + url);
}

// 用户来请求数据了，从 downloadManager 订阅事件
var downloadTask1 = downloadManager.subscribe('dataReady', dataLoader);
var downloadTask2 = downloadManager.subscribe('dataReady2', dataLoader);

// 数据打包完成了
dataHub.notify('http://somedomain.someaddress', function(url){
  // 向 downloadManager 发布一个事件
  downloadManager.publish('dataReady', url);
});

dataHub.notify('http://somedomain2.someaddress', function(url){
  // 向 downloadManager 发布一个事件
  downloadManager.publish('dataReady2', url);
});

// console.log(downloadManager.events);