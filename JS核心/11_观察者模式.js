// 定义一个 DownloadTask 类作为观察者
function DownloadTask(id) {
  this.id = id;
  this.loaded = false;
  this.url = null;
}

DownloadTask.prototype.finish = function(url) {
  this.loaded = true;
  this.url = url;
  console.log('Task ' + this.id + ' load data from ' + url);
}

// 再定义一个 DownloadTaskList 类放便管理多个下载任务

function DownloadTaskList() {
  this.downloadTaskList = [];
}

DownloadTaskList.prototype.getCount = function() {
  return this.downloadTaskList.length;
};

DownloadTaskList.prototype.get = function(index) {
  return this.downloadTaskList[index];
};

DownloadTaskList.prototype.add = function(obj) {
  return this.downloadTaskList.push(obj);
};

DownloadTaskList.prototype.remove = function(obj) {
  const downloadTaskCount = this.downloadTasks.getCount();
  while (i < downloadTaskCount) {
    if (this.downloadTaskList[i] === obj) {
      this.downloadTaskList.splice(i, 1);
      break;
    }
    i++;
  }
};

// 定义一个 DataHub 作为被观察目标
function DataHub() {
  this.downloadTasks = new DownloadTaskList();
}

DataHub.prototype.addDownloadTask = function(downloadTask) {
  this.downloadTasks.add(downloadTask);
};

DataHub.prototype.removeDownloadTask = function(downloadTask) {
  this.downloadTasks.remove(downloadTask);
};

DataHub.prototype.notify = function(url) {
  const downloadTaskCount = this.downloadTasks.getCount();
  for (var i = 0; i < downloadTaskCount; i++) {
    this.downloadTasks.get(i).finish(url);
  }
};

// 先设置观察者再对被观察对象进行操作

// 创建一个数据中心
var dataHub = new DataHub();

// 现在用户来取数据了，创建两个任务
var downloadTask1 = new DownloadTask(1);
var downloadTask2 = new DownloadTask(2);
dataHub.addDownloadTask(downloadTask1);
dataHub.addDownloadTask(downloadTask2);

// 数据打包完成了
dataHub.notify('http://somedomain.someaddress');