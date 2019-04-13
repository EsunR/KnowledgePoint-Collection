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

### 节流函数

通过节流函数，检测两次函数调用的时间差，如果在设定的函数冷却时间之内，则不能执行，如果在冷却时间之外则可以执行。通过函数节流可以优化Javascript的性能，防止一个函数被无差别的多次反复执行。

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
      fn();
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












