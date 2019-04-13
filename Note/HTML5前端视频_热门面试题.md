> 视频：https://www.bilibili.com/video/av35041371/?p=22

- [01. 作用域](#01-%E4%BD%9C%E7%94%A8%E5%9F%9F)
- [07. 响应式布局](#07-%E5%93%8D%E5%BA%94%E5%BC%8F%E5%B8%83%E5%B1%80)
  - [viewport影响着我们页面的什么？](#viewport%E5%BD%B1%E5%93%8D%E7%9D%80%E6%88%91%E4%BB%AC%E9%A1%B5%E9%9D%A2%E7%9A%84%E4%BB%80%E4%B9%88)
  - [什么像素比和物理像素？](#%E4%BB%80%E4%B9%88%E5%83%8F%E7%B4%A0%E6%AF%94%E5%92%8C%E7%89%A9%E7%90%86%E5%83%8F%E7%B4%A0)
  - [计算页面元素真实的物理像素](#%E8%AE%A1%E7%AE%97%E9%A1%B5%E9%9D%A2%E5%85%83%E7%B4%A0%E7%9C%9F%E5%AE%9E%E7%9A%84%E7%89%A9%E7%90%86%E5%83%8F%E7%B4%A0)
  - [何为缩放比](#%E4%BD%95%E4%B8%BA%E7%BC%A9%E6%94%BE%E6%AF%94)
  - [1px物理像素的实现](#1px%E7%89%A9%E7%90%86%E5%83%8F%E7%B4%A0%E7%9A%84%E5%AE%9E%E7%8E%B0)
- [08. 元素居中的方案](#08-%E5%85%83%E7%B4%A0%E5%B1%85%E4%B8%AD%E7%9A%84%E6%96%B9%E6%A1%88)
  - [利用postiton定位](#%E5%88%A9%E7%94%A8postiton%E5%AE%9A%E4%BD%8D)
  - [利用margin和定位](#%E5%88%A9%E7%94%A8margin%E5%92%8C%E5%AE%9A%E4%BD%8D)
  - [利用CSS3的margin和transform（可以实现未知宽高元素居中）](#%E5%88%A9%E7%94%A8css3%E7%9A%84margin%E5%92%8Ctransform%E5%8F%AF%E4%BB%A5%E5%AE%9E%E7%8E%B0%E6%9C%AA%E7%9F%A5%E5%AE%BD%E9%AB%98%E5%85%83%E7%B4%A0%E5%B1%85%E4%B8%AD)
  - [利用flex布局](#%E5%88%A9%E7%94%A8flex%E5%B8%83%E5%B1%80)
- [09. 纯CSS绘制三角形](#09-%E7%BA%AFcss%E7%BB%98%E5%88%B6%E4%B8%89%E8%A7%92%E5%BD%A2)
- [10. rem适配](#10-rem%E9%80%82%E9%85%8D)
- [12. js综合面试题（作用域、this指向、原型链）](#12-js%E7%BB%BC%E5%90%88%E9%9D%A2%E8%AF%95%E9%A2%98%E4%BD%9C%E7%94%A8%E5%9F%9Fthis%E6%8C%87%E5%90%91%E5%8E%9F%E5%9E%8B%E9%93%BE)
- [13. 函数节流和防抖](#13-%E5%87%BD%E6%95%B0%E8%8A%82%E6%B5%81%E5%92%8C%E9%98%B2%E6%8A%96)
  - [函数节流](#%E5%87%BD%E6%95%B0%E8%8A%82%E6%B5%81)
  - [函数防抖](#%E5%87%BD%E6%95%B0%E9%98%B2%E6%8A%96)
  - [二者区别](#%E4%BA%8C%E8%80%85%E5%8C%BA%E5%88%AB)
- [16. 从 URL 输入到页面展现到底发生什么？](#16-%E4%BB%8E-url-%E8%BE%93%E5%85%A5%E5%88%B0%E9%A1%B5%E9%9D%A2%E5%B1%95%E7%8E%B0%E5%88%B0%E5%BA%95%E5%8F%91%E7%94%9F%E4%BB%80%E4%B9%88)
  - [基本过程](#%E5%9F%BA%E6%9C%AC%E8%BF%87%E7%A8%8B)
  - [解析ip地址的过程](#%E8%A7%A3%E6%9E%90ip%E5%9C%B0%E5%9D%80%E7%9A%84%E8%BF%87%E7%A8%8B)
  - [三次握手的过程](#%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E7%9A%84%E8%BF%87%E7%A8%8B)
  - [发送HTTP请求](#%E5%8F%91%E9%80%81http%E8%AF%B7%E6%B1%82)
  - [服务器处理请求并返回 HTTP 报文](#%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%A4%84%E7%90%86%E8%AF%B7%E6%B1%82%E5%B9%B6%E8%BF%94%E5%9B%9E-http-%E6%8A%A5%E6%96%87)
  - [浏览器解析渲染页面](#%E6%B5%8F%E8%A7%88%E5%99%A8%E8%A7%A3%E6%9E%90%E6%B8%B2%E6%9F%93%E9%A1%B5%E9%9D%A2)
  - [断开连接](#%E6%96%AD%E5%BC%80%E8%BF%9E%E6%8E%A5)
- [19. 宏任务和微任务](#19-%E5%AE%8F%E4%BB%BB%E5%8A%A1%E5%92%8C%E5%BE%AE%E4%BB%BB%E5%8A%A1)
  - [宏任务](#%E5%AE%8F%E4%BB%BB%E5%8A%A1)
  - [微任务](#%E5%BE%AE%E4%BB%BB%E5%8A%A1)
  - [例题](#%E4%BE%8B%E9%A2%98)

## 01. 作用域
```js
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
```

## 07. 响应式布局

### viewport影响着我们页面的什么？

viewport是虚拟显示视口，它是时刻存在的（在现代浏览器上），我们设置meta标签只是去改变viewport的相关属性，并非是去设置一个viewport。只是在响应式页面开发过程中，默认的viewport会造成我们页面观感不合适，所以要去设置默认的缩放比例，以及viewport默认宽度，来适应响应式的开发。

> 窄屏幕设备（如移动设备）在一个虚拟窗口或视口中渲染页面，这个窗口或视口通常比屏幕宽；然后缩小渲染的结果，以便在一屏内显示所有内容。然后用户可以移动、缩放以查看页面的不同区域。例如，如果移动屏幕的宽度为640px，则可能会用980px的虚拟视口渲染页面，然后缩小页面以适应640px的窗口大小。

当一个页面将要展示到我们的手机上时，页面会先在viewport中渲染，假如说我们没有设定viewport的宽度，页面会按照默认的980px的宽度去渲染（想象一下把你的浏览器窗口缩小为980px的宽度，你所看到的效果就是viewport中的渲染效果），然后渲染好的页面会被缩放显示到我们的设备上（想象一下把你缩小为宽度为980px的浏览器上的画面，塞到你的手机中）。

我们来看一组示例（默认viewport）：

```html
<style>
    .topbar {width: 100%;height: 200px;background-color: pink;}
    .container{width: 300px;height: 300px;background-color: skyblue;margin: 0 auto;}
  </style>
<body>
  <div class="topbar"></div>
  <div class="container"></div>
</body>
```

![](http://ww1.sinaimg.cn/large/a71efaafly1g206khgcj6j20u30izwf4.jpg)

看起来布局上似乎很完美，但当我们添加上文字后，在我们的手机上就会这样显示：

<center>

![](http://ww1.sinaimg.cn/large/a71efaafly1g20701i07xj20a70grglk.jpg)

</center>

文字内容简直小的可怜，这就是为什么我们不愿意去使用默认的viewport：他会无视我们手中实际设备的宽度去按照960px的宽度渲染页面，然后将渲染好的页面进行**缩放**再塞入我们的手机显示器，导致页面被缩放的过小。假入我们此时规定viewport的宽度与设备宽度相等，如下加入meta标签：

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

对于iPhoneSE来说，它的宽度为320px，那么viewport就以320px的宽度去渲染页面而非980px，之后渲染好的页面就不会被缩放，而是直接显示在我们的手机上，如下效果：

<center>

![](http://ww1.sinaimg.cn/large/a71efaafly1g206ylbrbsj20ae0h3q2x.jpg)

</center>

当然，我们也能看出，我们再下方定义的固定宽高的div，也同样会被缩放，这就是为什么我们推荐在响应式开发中使用半分比宽度而非绝对宽度，这会导致元素的缩放不合理，当有元素超过我们的viewport宽度后，viewport机制就会错乱，分为以下两种情况（针对Chrome和最新的Android Webview）：

- 如果我们设置了viewport，此时固定元素宽度如果大于设置的viewport宽度，viewport的宽度会回变化为页面最宽的元素，来显示过宽的元素，但是如果宽度设置为100%的元素，宽度仍保持原有的viewport宽度。

<center>

![将Div#container宽度设置为400px](https://ws1.sinaimg.cn/large/a71efaafly1g20q6hhhlsj209t0goq2w.jpg)

</center>

- 当最宽的元素宽度大于980px（或者我们设置的最大viewport宽度），就会出现横向滚动条来显示我们页面中最宽的元素。

### 什么像素比和物理像素？

> 像素比(dpr) = 物理像素 / css像素

通过 `window.devicePixelRatio` 获得当前设备的DPR

如：iPhoneX的DPR为3，iPhone5 Se的DPR为2，正常显示器的DPR为1

拿iPhoneSE来说，我们都知道iPhoneSE的分辨率为`640 x 1136`，而如果我们使用chrome调试工具将页面切换为移动端设备视图，我们会发现chrome显示的设备分辨率为`320 x 568`。


![调试工具界面](https://s2.ax1x.com/20 19/04/12/Aq8rct.png)


这是因为我们在手机上定义像素如果还按照大屏显示器那样去规定像素的话，文字、识图都会看起来小到无法识别（想象一下你将显示器缩小为如同手机那样的大小你还能看清屏幕上的文字吗），所以我们规定了一个**缩放比**来优化显示效果。

iPhoneSE的缩放比为2，那么我们将它的物理像素统统除以2，得到的结果便是 `320 x 568` ，即一个实际像素显示2个物理像素。

![1px指的是CSS像素](https://ws1.sinaimg.cn/large/a71efaafly1g20qd6m9paj20m90a474k.jpg)

### 计算页面元素真实的物理像素

那假如我们再页面上定义了一个200px宽高的div，那么它在iPhoneSE上显示的实际大小为多少呢。

1. 如果我们不定义viewport，viewport在所有的显示设备上的显示宽度均为980px。那么在iPhoneSE上，我们看到的定义的200px宽高的元素的实际物理像素宽高为 `640*(200/980)px`。

![viewport默认宽度](https://ws1.sinaimg.cn/large/a71efaafly1g20qkjqqk2j20b903k742.jpg)

2. 如果我们定义了viewport的宽度为设备宽度，那么在iPhoneSE上，我们看到的定义为200px宽高的元素的实际物理像素宽高为 `640*(200/320)px`，即为 `CSS像素*DPR`。

![定义viewport宽度为设备宽度](https://ws1.sinaimg.cn/large/a71efaafly1g20ql88ex7j20dy07g744.jpg)


### 何为缩放比

缩放比即为我们再meta标签中设置的 `initial-scale`。它指的是当我们用移动设备去查看页面时，页面会被放大的倍数，只在我们设定viewport宽度后生效。

比如，当我们定义，如下meta标签，显示在ipad等移动设备上页面会被放大两倍：

```html
<meta name="viewport" content="width=device-width, initial-scale=2">
```

![桌面显示器显示效果](https://ws1.sinaimg.cn/large/a71efaafly1g20rh126ccj20te09y3yg.jpg)


![ipad显示效果](https://ws1.sinaimg.cn/large/a71efaafly1g20rhi7fabj20st0chq30.jpg)

那缩放比具体有什么卵用呢？

当我们浏览一个移动端页面，针对页面上的一个按钮，如果不设置缩放，iPhoneSE和iPhone6 Plus会按照同样的按钮大小去展示。但这样的话iPhone6 Plus由于屏幕更大，显示按钮就会显得过小，观感上很不协调，所以我们这时候就可以将其缩放比设置为 `414/320` 即为 `1.29` ，即代表这个按钮在iPhone6 Plus上会按照1.29倍等比例放大，这样整个页面的观感就会更好。

当然如果我们采用 `rem` 机制去动态改变元素的宽高和字体大小，也能达到同样的效果。

### 1px物理像素的实现

思路：这道题的目的在于，让显示器设备和移动设备都享有同样的CSS像素，即有相同的物理像素，让手机端按1个真实的物理像素点去显示页面上的1px。我们可以通过获取设备的像素比，加上利用meta标签的缩放设置，将页面缩放设置为 `1/像素比`。

**方案一：**
```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>1px物理像素的实现</title>
  <style>
    .box {
      width: 0.5rem;
      height: 0.5rem;
      border-bottom: 10px solid #000000;
    }
  </style>
</head>

<body>
  <script>
    window.onload = function () {
      // 获取像素比 
      var dpr = window.devicePixelRatio;

      // 缩放比例
      var scale = 1 / dpr;

      var width = document.documentElement.clientWidth;

      // 获取meta标签
      var metaNode = document.querySelector("meta[name='viewport']");
      metaNode.setAttribute('content', 'width=device-width, initial-scale=' + scale)

      var htmlNode = document.querySelector('html');
      htmlNode.style.fontSize = width * dpr + 'px';
    }
  </script>

  <div class="box"></div>
</body>

</html>
```


**方案二：**
```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>1px物理像素的实现</title>
  <style>
    #box {
      width: 200px;
      height: 200px;
      background-color: pink;
      position: relative;
    }

    #box::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 10px;
      background: #000000;
    }

    @media screen and (-webkit-min-device-pixel-ratio: 2){
      #box::before{
        transform: scaleY(0.5);
      }
    }

    @media screen and (-webkit-min-device-pixel-ratio: 3){
      #box::before{
        transform: scaleY(0.3333);
      }
    }
  </style>
</head>

<body>
  <script>
    console.log(window.devicePixelRatio);
  </script>
  <div id="box"></div>
</body>

</html>
```


## 08. 元素居中的方案

```html
<style>
  .container {
    width: 500px;
    height: 500px;
    background-color: pink;
  }

  .inner {
    width: 200px;
    height: 200px;
    background-color: skyblue;
  }
</style>

<body>
  <div class="container">
    <div class="inner"></div>
  </div>
</body>
```

![](https://ws1.sinaimg.cn/large/a71efaafly1g20tjc5qo2j20e50e73ye.jpg)

### 利用postiton定位
```css
.container{
  position: relative;
}
.inner{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
```

### 利用margin和定位

```css
.container{
  position: relative;
}
.inner{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
```

### 利用CSS3的margin和transform（可以实现未知宽高元素居中）

```css
.container{
  position: relative;
}
.inner{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 上下左右平移自身宽度的50% */
}
```

### 利用flex布局

**传新版本：**
```css
.container{
  display: flex;
  justify-content: center; /* 水平（主轴）居中 */
  align-items: center; /* 垂直（侧轴）居中 */
}
```

**旧版本：**
```css
.container{
  display: -webkit-box;
  -webkit-box-pack: center; /* 水平（主轴）居中 */
  -webkit-box-align: center; /* 垂直（侧轴）居中 */
}
```

## 09. 纯CSS绘制三角形

```html
<!-- 05.html -->
<style>
  .box {
    width: 0;
    height: 0;
    border: 100px solid;
    border-bottom-color: pink;
    border-top-color: transparent;
    border-left-color: transparent;
    border-right-color: transparent;
  }
</style>

<body>
  <div class="box"></div>
</body>
```

![](https://ws1.sinaimg.cn/large/a71efaafly1g20u6saknfj206806i742.jpg)

> 注意：用这种方法绘制三角形，必须设置元素上下左右都有border，不能单纯设置一个底部边框，否则会没有显示效果

## 10. rem适配

核心要点：改变页面根元素的`font-size`来改变rem相对宽度

```html
<!-- 06.html -->
<style>
  .box{
    width: .5rem;
    height: .5rem;
    background-color: pink;
  }
</style>

<script>
  window.onload = function () {  
    var width = document.documentElement.clientWidth;
    var htmlNode = document.querySelector('html');
    htmlNode.style.fontSize = width + 'px';
  }
</script>

<body>
  <div class="box"></div>
</body>
```

设置后，在所有设别上，div的宽度和高度均为设备屏幕宽度的一半

## 12. js综合面试题（作用域、this指向、原型链）

```js
// 作用域/02.js
function Foo() {
  getName = function () {
    console.log(1);
  }
  return this;
}
Foo.getName = function () {
  console.log(2);
}
Foo.prototype.getName = function () {
  console.log(3);
}
var getName = function () {
  console.log(4);
}
function getName() {
  console.log(5);
}

Foo.getName();  // 2

getName();  // 5(x) 4

Foo().getName();  // 执行Foo()方法 => 将window下的getName进行赋值操作 => 返回一个window对象 => 执行window下的getName()方法

getName();  // 1 （此时window下的getName方法已被上一行代码改变）

new Foo.getName(); // 实例化一个Foo对象 => 调用这个实例化对象上的getName() => 查找实例的constructor构造函数上有没有getName方法，没有的话去__proto__上查找 => 在Foo上找到getName方法 => 2

new new Foo().getName(); // 实例化一个Foo对象 => 执行Foo返回一个window对象 => 实例化一个window对象 => 查找window对象上的getName方法
```

> 输出结果：2 4 1 1 2 3  （代码在node环境会因为this指向问题而报错。具体原因是因为当在顶层作用域直接执行Foo()函数时候，返回的this在浏览器环境下是`window`，而在node下是`global`）

**错误总结：**由于javascript存在变量提升机制，所以正确的代码执行书序应该为：

```js
function Foo() {
  getName = function () {
    console.log(1);
  }
  return this;
}
var getName // 定义被忽略
function getName() {
  console.log(5);
}
// ====== 变量提升、变量声明执行完毕 ======
// ====== 接下来进行变量赋值 ======

Foo.getName = function () {
  console.log(2);
}
Foo.prototype.getName = function () {
  console.log(3);
}
getName = function () {
  console.log(4);
}
```

要注意的是当变量的声明和函数的声明命名冲突时，会优先定义函数。但`getName`在被声明后，在后方又被进行了赋值操作，所以`getName`的值应该为后方赋值的结果

## 13. 函数节流和防抖

> 函数节流和函数防抖都是用来优化性能，以及避免短时间内连续调用某个函数的方案。一下我们通过两个例子，来理解两种方案，以及它们的应用场景。

### 函数节流

函数节流即为，一个函数执行一次后，只有大于设定的执行周期后，才会执行第二次。

这里我们可以理解为当一个函数立即执行后，它需要一个冷却时间才能被执行第二次，也就是我们需要去节制函数的调用次数，即为节流。

我们可以通过检测两次函数调用的时间差，如果在设定的函数冷却时间之内，则不能执行，如果在冷却时间之外则可以执行。通过函数节流可以优化Javascript的性能，防止一个函数被无差别的多次反复执行。

```js
// JS核心/01.js
/**
 * 函数节流
 * @param fn 要被节流的函数
 * @param delay 规定的时间（函数执行的冷却时间）
 */
function throttle(fn, delay) {
  var lastTime = 0;
  // 需要通过闭包来保存lastTime的状态，否则每次调用lastTime都会被初始化为0
  return function () {
    var nowTime = Date.now();
    if (nowTime - lastTime > delay) {
      fn.call(this); // 解决fn函数内this指向问题，如果不绑定this，函数的调用者为window（因为在这里执行函数函数前没有执行者），如果绑定了this，函数的this就指向了调用者本身
      lastTime = Date.now();
    }
  };
}

var fun = throttle(function () {
  console.log("触发了！");
}, 500);

fun();

setTimeout(function () {
  fun();
}, 400)

setTimeout(function () {
  fun();
}, 600)
```

输出结果:
```
触发了！
触发了！
```

### 函数防抖

函数防抖即为，一个需要频繁触发的函数，在规定时间内，只让最后一次生效，前面的不生效。

也就是说说一个方法将执行时，它会在一段时间内等待有没有事件第二次触发这个方法，如果有它就不执行了，如果没有才执行。

我们可以通过定时器，在方法第一次调用时，设置一个定时器，然后触发方法，假如在方法被触发前，该方法又被调用了，那在第二次调用前，会清除第一次调用方法而生成的定时器，重新再生成一个定时器去执行方法。

当我们页面上有一个按钮，希望用户在多次快速点击按钮时，仅触发一次按钮效果，我们就可以使用函数防抖机制，来避免用户在快速点击按钮时，连续触发多次方法。

```js
/**
 * 函数防抖
 * @param fn 添加防抖的函数
 * @param delay 防抖间隔时间
 */
function debounce(fn, delay) {
  // 记录上一次的延时器
  var timer = null;
  return function () {
    // 清除上一次的延时器
    clearTimeout(timer);
    // 获取传入方法内部的参数
    var args = Array.prototype.slice.apply(arguments);
    // 重新设定新的延时器
    timer = setTimeout(function () {
      fn.apply(this, args);
    }, delay);
  }
}

var fun = debounce(function (a, b) {
  console.log(a);
  console.log(b);
  console.log('触发了！');
}, 1000)

setTimeout(function () {
  fun()
}, 200)

setTimeout(function () {
  fun()
}, 300)

setTimeout(function () {
  fun()
}, 400)

setTimeout(function () {
  fun(111, 222)
}, 1402)
```

输出结果:
```
undefined
undefined
触发了！
111
222
触发了！
```

### 二者区别

函数节流是给函数执行设定一个冷却时间，函数被触发后在某固定一时间段内无法被触发第二次，它响应第一个触发者而忽略后面的触发者。

函数防抖是推迟了函数的执行，只响应后面的触发者，而抛弃前面的触发者，它的执行时间可以被无限推迟。

  
## 16. 从 URL 输入到页面展现到底发生什么？

### 基本过程
- DNS 解析:将域名解析成 IP 地址
- TCP 连接：TCP 三次握手
- 发送 HTTP 请求
- 服务器处理请求并返回 HTTP 报文
- 浏览器解析渲染页面
- 断开连接：TCP 四次挥手

### 解析ip地址的过程
- 查找浏览器缓存
- 查找系统缓存
- 查找路由器缓存
- 向网络运行商(ISP)的DNS服务器查询信息
- 依次递归查找 => 访问根服务器 => 访问.com服务器 => 访问baidu.com服务器


### 三次握手的过程
- 客户端发送一个带 SYN=1，Seq=X 的数据包到服务器端口（第一次握手，由浏览器发起，告诉服务器我要发送请求了）
- 服务器发回一个带 SYN=1， ACK=X+1， Seq=Y 的响应包以示传达确认信息（第二次握手，由服务器发起，告诉浏览器我准备接受了，你赶紧发送吧）
- 客户端再回传一个带 ACK=Y+1， Seq=Z 的数据包，代表“握手结束”（第三次握手，由浏览器发送，告诉服务器，我马上就发了，准备接受吧）

> “三次握手”的目的是“为了防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误”

### 发送HTTP请求

请求报文由请求行（request line）、请求头（header）、请求体四个部分组成,如下图所示：

![请求报文](https://segmentfault.com/img/remote/1460000017184708)

### 服务器处理请求并返回 HTTP 报文

http 响应报文：

![响应报文](https://segmentfault.com/img/remote/1460000017184711)

(1) 响应行包含：协议版本，状态码，状态码描述

状态码规则如下：
- 1xx：指示信息--表示请求已接收，继续处理。
- 2xx：成功--表示请求已被成功接收、理解、接受。
- 3xx：重定向--要完成请求必须进行更进一步的操作。
- 4xx：客户端错误--请求有语法错误或请求无法实现。
- 5xx：服务器端错误--服务器未能实现合法的请求。

(2) 响应头部包含响应报文的附加信息，由 名/值 对组成

(3) 响应主体包含回车符、换行符和响应返回数据，并不是所有响应报文都有响应数据

### 浏览器解析渲染页面

![](https://segmentfault.com/img/remote/1460000017184712)

浏览器解析渲染页面分为一下五个步骤：

- 根据 HTML 解析出 DOM 树
- 根据 CSS 解析生成 CSS 规则树
- 结合 DOM 树和 CSS 规则树，生成渲染树
- 根据渲染树计算每一个节点的信息
- 根据计算好的信息绘制页面

### 断开连接

当数据传送完毕，需要断开 tcp 连接，此时发起 tcp 四次挥手。

![](https://segmentfault.com/img/remote/1460000017184713)


## 19. 宏任务和微任务

### 宏任务
分类：`setTimeout` `setInterval` `requirestAnimationFrame`
1. 宏任务所处的队列就是宏任务队列
2. 第一个宏任务队列中只有一个任务：执行主线程上的JS代码
3. 宏任务队列可以有多个
4. 当一个宏任务队列中的任务全部执行完后，会查看是否有微任务队列，如果有就会优先执行微任务队列中的所有任务，如果没有就查看是否有宏任务队列


### 微任务
分类：`new Promise().then(回调)` `process.nextTick`(nodejs)
1. 微任务所处的队列就是微任务队列
2. 只有一个微任务队列
3. 在上一个宏任务队列执行完毕后，如果有微任务队列就会执行微任务队列中的所有任务


### 例题
```js
console.log('-------start--------');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

new Promise((resolve, reject) => {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  resolve()
}).then(()=>{
  console.log('Promise实例成功回调执行');
})

console.log('-------end--------');
```
结果：
```
-------start--------
0
1
2
3
4
-------end--------
Promise实例成功回调执行
setTimeout
```









