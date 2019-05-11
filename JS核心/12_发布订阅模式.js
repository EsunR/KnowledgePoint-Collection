// 定义 DataHub 类作为发布者

function DataHub() {}

DataHub.prototype.notify = function(url, callback) {
  callback(url);
}

// 定义 DownloadManager 类作为事件通道
function DownloadManager() {
  this.events = {};
  this.uId = -1;
}

DownloadManager.prototype.publish = function(eventType, url) {
  if (!this.events[eventType]) {
    return false;
  }
  var subscribers = this.events[eventType],
    count = subscribers ? subscribers.length : 0;
  while (count--) {
    var subscriber = subscribers[count];
    subscriber.handler(eventType, subscriber.taskId, url);
  }
}

DownloadManager.prototype.subscribe = function(eventType, handler) {
  if (!this.events[eventType]) {
    this.events[eventType] = [];
  }
  var taskId = (++this.uId).toString();
  this.events[eventType].push({
    taskId: taskId,
    handler: handler
  });

  return taskId;
}

// 创建一个数据中心

var dataHub = new DataHub();

// 创建一个下载事件管理器

var downloadManager = new DownloadManager();

// 创建一个下载器

var dataLoader = function(eventType, taskId, url) {
  console.log('Task ' + taskId + ' load data from ' + url);
}

// 用户来请求数据了

var downloadTask1 = downloadManager.subscribe('dataReady', dataLoader);

// 数据打包完成了

dataHub.notify('http://somedomain.someaddress', function(url){
  downloadManager.publish('dataReady', url);
});