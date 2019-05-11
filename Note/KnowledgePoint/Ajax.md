# 知识点

## 1. XMLHttpRequest

### 1.1 原生XMLHttpRequest的使用

`xhr.opne([Method], [url], [bollen])` 创建一个连接，第一个参数为请求的方法，如 GET、POST；第二个参数为请求的 url 地址；第三个参数为一个布尔值，代表是否以同步(Sync)方式加载，默认为false(异步Asyn方式加载)

`xhr.onreadystatechange` xhr 对象状态改变后触发的函数事件

`xhr.readyState` xhr 对象当前的状态

`xhr.status` 获取发送数据返回的状态码

`xhr.responseText` 返回的数据

`xhr.send()` 发送的数据，如果仅仅发送一个请求而不传送数据则传入参数为 null

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "/api", false);
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4){
    if(xhr.status == 200){
      console.log(xhr.responseText);
    }
  }
};
xhr.send(null);
```

### 1.2 兼容性问题

- IE低版本使用ActiveXObject，和W3C标准不一样
- IE低版本使用量以非常少，很多网站都早已不支持
- 建议对E低版本的兼容性：了解即可，无需深究
- 如果遇到对I正低版本要求苛刻的面试，果断放弃

## 2. 状态码

### 2.1 readyState的状态码

- 0 -（未初始化）还没有调用send0方法
- 1 -（载入）已调用send）方法，正在发送请求
- 2 -（载入完成）send）方法执行完成，已经接收到全部响应内容
- 3 -（交互）正在解析响应内容
- 4 -（完成）响应内容解析完成，可以在客户端调用了【常用】

## 2.2 state网络状态码

- 2xx-表示成功处理请求。如200
- 3xx-需要重定向，浏览器直接跳转
- 4xx-客户端请求错误，如404
- 5xx-服务器端错误


## 3. 跨域

### 3.1 什么是跨域

浏览器有同源策略，不允许ajax访问其他域接口

跨域条件：协议、域名、端口（HTTP默认端口是80，HTTPS默认端口是443），有一个不同就算跨域

允许跨域的三个标签：
```html
<img src=xxx>
<link href=xxxx>
<script src=xxx>
```

三个标签的应用场景：
- `<img>` 用于打点统计，统计网站可能是其他域
- `<link><script>` 可以使用CDN，CDN的也是其他域
- `<script>` 可以用于JSONP

跨域注意事项：
- 所有的跨域请求都必须经过信息提供方允许
- 如果未经允许即可获取，那是浏览器同源策略出现漏洞

### 3.2 JSONP

原理：

`<script>` 标签允许跨域。

步骤：

（1）在页面的主Javascript文件中去定义一个方法作为处理JSONP数据的函数，这个方法必须挂载在window上或者是在全局定义的，方法的某一参数为规定为`data`，用来接收以JSONP方法传入的数据，在方法内部设置与`data`相关的操作。

（2）从外部引入一个 `<script>` 标签，引入的script的内容中只有一个立即执行的方法，方法的名称即为第一步设定的方法名，方法的参数位`data`，传入相应的数据。

![](http://markdown.img.esunr.xyz/a71efaafly1g2j93agwwyj20i505zaad.jpg)

### 3.3 服务器端设置 http header，

![](http://markdown.img.esunr.xyz/20190507112512.png)



# 题目

## 1. 手动编写一个ajax，不依赖第三方库
## 2. 跨域的几种实现方式


