# Canvas入门教程
- [Canvas入门教程](#canvas%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B)
- [Canvas概述](#canvas%E6%A6%82%E8%BF%B0)
  - [1. 与Flas的区别](#1-%E4%B8%8Eflas%E7%9A%84%E5%8C%BA%E5%88%AB)
  - [2. 创建Canvas画布标签](#2-%E5%88%9B%E5%BB%BAcanvas%E7%94%BB%E5%B8%83%E6%A0%87%E7%AD%BE)
  - [3. 用Javascript操作2D画布](#3-%E7%94%A8javascript%E6%93%8D%E4%BD%9C2d%E7%94%BB%E5%B8%83)
  - [4. API](#4-api)
- [笔触、填充](#%E7%AC%94%E8%A7%A6%E5%A1%AB%E5%85%85)
  - [1. 简述](#1-%E7%AE%80%E8%BF%B0)
  - [3. 绘制路径](#3-%E7%BB%98%E5%88%B6%E8%B7%AF%E5%BE%84)
  - [4. 绘制样式](#4-%E7%BB%98%E5%88%B6%E6%A0%B7%E5%BC%8F)
  - [6. 快速绘制](#6-%E5%BF%AB%E9%80%9F%E7%BB%98%E5%88%B6)
  - [6. 绘制复杂图像](#6-%E7%BB%98%E5%88%B6%E5%A4%8D%E6%9D%82%E5%9B%BE%E5%83%8F)
  - [7. API](#7-api)
- [弧](#%E5%BC%A7)
  - [1. 绘制弧线](#1-%E7%BB%98%E5%88%B6%E5%BC%A7%E7%BA%BF)
  - [2. API](#2-api)
- [绘制渐变](#%E7%BB%98%E5%88%B6%E6%B8%90%E5%8F%98)
  - [1. 创建渐变色](#1-%E5%88%9B%E5%BB%BA%E6%B8%90%E5%8F%98%E8%89%B2)
  - [2. API](#2-api-1)
- [文字](#%E6%96%87%E5%AD%97)
  - [1. 添加文字](#1-%E6%B7%BB%E5%8A%A0%E6%96%87%E5%AD%97)
  - [2. 调整样式](#2-%E8%B0%83%E6%95%B4%E6%A0%B7%E5%BC%8F)
- [使用图片](#%E4%BD%BF%E7%94%A8%E5%9B%BE%E7%89%87)
  - [1. 添加图片](#1-%E6%B7%BB%E5%8A%A0%E5%9B%BE%E7%89%87)
  - [2. API](#2-api-2)
- [运动](#%E8%BF%90%E5%8A%A8)
  - [1. 原理](#1-%E5%8E%9F%E7%90%86)
  - [2. 面向对象制变成作运动函数](#2-%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E5%88%B6%E5%8F%98%E6%88%90%E4%BD%9C%E8%BF%90%E5%8A%A8%E5%87%BD%E6%95%B0)
  - [3. 使用ES6来详细来面向对象编程编写动画函数](#3-%E4%BD%BF%E7%94%A8es6%E6%9D%A5%E8%AF%A6%E7%BB%86%E6%9D%A5%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%BC%96%E7%A8%8B%E7%BC%96%E5%86%99%E5%8A%A8%E7%94%BB%E5%87%BD%E6%95%B0)
# Canvas概述

## 1. 与Flas的区别
Canvas 和Flash的思路完全不一样，Flash是上屏幕之后还是对象，编程语言叫做 Action Script 也是ECMAScript范畴。Canvas上屏幕之后像素化了，再也不能得到这个对象了，所以要想让这个元素运动，必须擦除整个屏幕、重绘这个元素。Canvas更流畅，手机端也嗷嗷流畅。


## 2. 创建Canvas画布标签

显示默认提醒消息：如果浏览器不支持Canvas，Canvas会被默认渲染为普通标签显示文字

```html
<canvas width="200px" height="200px">对不起您的浏览器不支持画布！</canvas>
```

注意：Canvas有一个默认宽高，大概为`300 x 150`，如果我们用CSS样式去设置Canvas的宽高，会导致画布扭曲，必须在Canvas标签内部，以属性的方式去添加宽高值。

## 3. 用Javascript操作2D画布

首先要获取到画布对象：
```html
<canvas id="myCanvas" width="800px" height="500px">对不起您的浏览器不支持画布！</canvas>

<script>
  var myCanvas = document.querySelector("#myCanvas")
</script>
```

获取到画布后，使用画布对象上的 `.getContext()` 方法新建一个画布
```js
// 设置上下文，就相当于打开ps之后让你新建画布
var ctx = myCanvas.getContext('2d');
```

之后就可以对画布进行详细的样式操作（要在绘制动作前设置样式），如设置背景颜色：
```js
ctx.fillStyle = "pink"
```

设置完样式之后就可以进行绘制操作，如绘制成一个矩形（Rect）
```js
ctx.fillRect(100, 100, 300, 200)
// fillRect方法中的参数为设置绘制点的坐标，单位为px
```

## 4. API
方法：
```
fillRect(a, b, c, d) 绘制一个填充矩形，abcd分别为四个坐标
```

属性：
```
fillStyle 设置填充颜色；
```

# 笔触、填充

## 1. 简述
笔触也叫作“描边”，Canvas中的任何形状都是由这两个部分组成的。

笔触在canvas中视为一个“Path”的实例，必须stroke之后才能上屏幕；填充用fill才能上屏幕。

## 3. 绘制路径

使用 `beginPath()` 代表开始绘制；`moveTo(x, y)` 代表将笔触移动到某一坐标；`lineTo(x, y)` 代表直线绘制到某一点；使用 `stroke()` 能将绘制的图像显示出来。

如下可以绘制出一条折线：

```js
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(300, 300);
ctx.lineTo(600, 300);
ctx.stroke();
```
![](https://ws1.sinaimg.cn/large/a71efaafly1g2lpbjrdg2j20es086q2s.jpg)

使用 `closePath()` 可以将最后一个绘制点【该绘制点是被用`moveTo(x, y)`打断绘制前的那个点】与第一个绘制点连接：

```js
  ctx.beginPath();
  ctx.moveTo(100, 100);
  ctx.lineTo(300, 300);
  ctx.lineTo(600, 300);
+ ctx.closePath();
  ctx.stroke();
```
![](https://ws1.sinaimg.cn/large/a71efaafly1g2lpe43stnj20eq07jjr9.jpg)

连续使用 `moveTo()` 可以让开始新的绘制点：
```js
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(300, 300);
ctx.lineTo(600, 300);

ctx.moveTo(600, 400);
ctx.lineTo(700, 400);
ctx.stroke();
```

![](https://ws1.sinaimg.cn/large/a71efaafly1g2lpg9p7m3j20h009dwed.jpg)

## 4. 绘制样式

在绘制前可以对绘制的线段进行样式设置：

```js
ctx.lineWidth = "10";
ctx.strokeStyle = "red";
... ...
ctx.stock();
```

![](https://ws1.sinaimg.cn/large/a71efaafly1g2lpw1q9aqj20hk0a9a9y.jpg)


在绘制之后，使用 `fill()` 可以填充封闭图像（如果没有封闭也会自动封闭）的颜色，设置 `fillStyle` 属性可以来设置填充颜色：

```js
... ...
ctx.stock();
ctx.fillStyle = "skyblue"
ctx.fill();
```

![](https://ws1.sinaimg.cn/large/a71efaafly1g2lq0n8juzj20hh09wmx4.jpg)

使用了 `fill()` 之后，Canvas会自动认为之前的绘制操已经绘制了一个独立的图形。

## 6. 快速绘制

`strokeReact(x, y, w, h)`快速绘制一个矩形
```js
ctx.fillStyle = "lightseagreen"
ctx.strokeReact(100, 100, 300, 200);
```
![](https://ws1.sinaimg.cn/large/a71efaafly1g2lqaiu2eoj20b706xt8j.jpg)

filRecto是一个快捷方法，让你省略了beginPath、move To、lineTo。所以fillRect（100，100，300，200）等价于：

```js
ctx.move(100，100);
ctx.lineTo(400，100);
ctx.lineTo(400，300);
ctx.lineTo(100，300);
ctx.closePath（);
ctx.fill();
```

## 6. 绘制复杂图像

```js
for (var i = 0; i <= 500; i += 10) {
  ctx.beginPath();
  ctx.moveTo(i, i);
  ctx.lineTo(i + 200, i);
  ctx.lineTo(i, i + 300);
  ctx.closePath();
  ctx.stroke();
}
```
![](https://ws1.sinaimg.cn/large/a71efaafly1g2lqfwcsqoj20js0edmxi.jpg)

## 7. API

方法:
```
beginPath() 代表开始绘制

moveTo(x, y) 代表将笔触移动到某一坐标

lineTo(x, y) 代表直线绘制到某一点

stroke() 能将绘制的图像显示出来

fill() 可以填充封闭图像
```

属性：
```
lineWidth 设置绘制线的宽度

strokeStyle 设置绘制线的颜色样式

fillStyle 设置填充色的样式
```

![](https://ws1.sinaimg.cn/large/a71efaafly1g2lpnbvtz1j20ny0budhr.jpg)






# 弧

## 1. 绘制弧线
使用 `arc(x, y, r, startRad, endRad, bollen)` 绘制弧线，arc属于笔触，需要使用`beginPath()`和`stroke()`来设置开始与绘制动作。

```js
ctx.beginPath();
ctx.arc(200, 200, 100, 0, 1, true);
ctx.stroke();
```

![](https://ws1.sinaimg.cn/large/a71efaafly1g2ly5tu2fnj20bj08jjrg.jpg)

整圆就是 `ctx.arc(200, 200, 100, 0, Math.PI*2, true);`

绘制笑脸的方法：

```html
<canvas id="myCanvas" width="800px" height="500px">对不起您的浏览器不支持画布！</canvas>

<script>
  // 得到画布
  var myCanvas = document.querySelector("#myCanvas")
  // 上下文，就相当于打开ps之后让你新建画布
  var ctx = myCanvas.getContext('2d');
  // 开始绘制路径
  ctx.beginPath();
  ctx.arc(200, 200, 200, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(90, 140, 30, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(300, 140, 30, 0, Math.PI * 2, true);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(200, 200, 100, 0.6, 2.5, false);
  ctx.stroke();
</script>
```

![](https://ws1.sinaimg.cn/large/a71efaafly1g2lyb1ahmfj20bc0bt0sz.jpg)

## 2. API
方法：
```
arc(x, y, r, startRad, endRad, bollen) 
绘制弧度，xy为圆心坐标，r为绘制半径，startRad为初始角度，endRad为最终角度，bollen设置为true为逆时针绘制false为顺时针绘制
```





# 绘制渐变
## 1. 创建渐变色
使用 `createLinearrGradient(x1, y1, x2, y2)` 创建一个渐变对象，用 `addColorStop(rate, color)` 添加渐变颜色，将画布的 `fillStyle` 属性设置为这个渐变对象，即可以填充渐变颜色。

如绘制一个矩形，矩形内的填充色为从`blue`渐变到`red`
```js
var lingrad = ctx.createLinearGradient(100, 100, 400, 400);
lingrad.addColorStop(0, 'red');
lingrad.addColorStop(1, 'blue');

ctx.fillStyle = lingrad;
ctx.fillRect(100, 100, 300, 300);
```
![](https://ws1.sinaimg.cn/large/a71efaafly1g2lzazsgdcj20es0erglz.jpg)

## 2. API

方法：
```
createLinearrGradient(x1, y1, x2, y2) 
创建一个渐变对象，(x1, y1)是渐变的起始坐标，(x2, y2)是渐变的结束坐标

addColorStop(rate, color)
添加渐变颜色，rate为一个int值，初始值为0，colr为一个颜色
```







# 文字

## 1. 添加文字
使用 `fillText(content, x, y)` 来设置文字，注意(x, y)为文字基线的位置
```js
ctx.fillText("你好", 100, 100);
```

## 2. 调整样式
通过 `font` 属性来设置字体、字号
```js
ctx.font = "宋体"
```
`font` 的级联样式 `ctx.font = "font-size font-family"`







# 使用图片
## 1. 添加图片
添加一个图片首先要创建一个`img`的实例，设置实例的`src`，监听这个实例的load事件，当图片加载完成后，利用 `drawImage(img, x, y)` 绘制出图片，如下实例：
```js
var img = new Image();
img.src = "images/0.jpg";
img.onload = function(){
  ctx.drawImage(img, 100, 100);
}
```

## 2. API
```
drawImage(img, x, y, w, h) 
img为一个图片示例，xy为图片左上角坐标，w为图片宽度，h为图片高度

drawImage(img, X, Y, W, H, x, y, w, h) 
img为一个图片示例，XYWH可以设置图片的切片位置
```


# 运动
## 1. 原理
canvas中元素不能运动，因为上屏幕之后就再也得不到它了，没有任何变量可以持有。

所以必须通过重绘一个新的矩形，利用视觉暂留，形成运动。

清屏 → 更新 → 渲染 → 清屏 → 更新 → 渲染 → ...

清屏：
```js
ctx.clearRect(0, 0, 800, 600)
```

## 2. 面向对象制变成作运动函数

```js
function Circle(x, y, r, color) {
  this.x = x;
  this.y = y;
  this.r = r;
  this.color = color;
}
Circle.prototype.render = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
  ctx.fillStyle = this.color;
  ctx.fill();
}
Circle.prototype.update = function () {
  this.x += 10;
}

var yuan = new Circle(100, 100, 60, "blue");

setInterval(function () {
  ctx.clearRect(0, 0, 800, 600)
  yuan.update();
  yuan.render();
}, 20)
```

![](https://ws1.sinaimg.cn/large/a71efaafly1g2m0noi2byg20jo0czwf3.gif)

## 3. 使用ES6来详细来面向对象编程编写动画函数

```js
// 接口
class Actor {
  constructor() {
    actorsArr.push(this);
  }
  render() {
    throw new Error("所有演员必须重写render函数")
  }
  update() {
    // 留空为非必须定义项
  }
}

// 圆类
class Circle extends Actor {
  constructor(x, y, r, color) {
    super();
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
  }
  render() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update() {
    this.x++;
  }
}

// 所有演员的数组
var actorsArr = []

var yuan = new Circle(100, 100, 50, "red");
setInterval(() => {
  ctx.clearRect(0, 0, 800, 600);
  for (var i = 0; i < actorsArr.length; i++) {
    actorsArr[i].update();
    actorsArr[i].render();
  }
}, 20);
```












