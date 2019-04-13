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

## 07. 物理像素的实现

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

### 什么是物理像素？

> 像素比(dpr) = 物理像素 / css像素

通过 `window.devicePixelRatio` 获得当前设备的DPR

如：iPhoneX的DPR为3，iPhone5 Se的DPR为2，正常显示器的DPR为1

拿iPhoneSE来说，我们都知道iPhoneSE的分辨率为`640 x 1136`，而如果我们使用chrome调试工具将页面切换为移动端设备视图，我们会发现chrome显示的设备分辨率为`320 x 568`。


![调试工具界面](https://s2.ax1x.com/2019/04/12/Aq8rct.png)


这是因为我们在手机上定义像素如果还按照大屏显示器那样去规定像素的话，文字、识图都会看起来小到无法识别（想象一下你将显示器缩小为如同手机那样的大小你还能看清屏幕上的文字吗），所以我们规定了一个**缩放比**来优化显示效果。

iPhoneSE的缩放比为2，那么我们将它的物理像素统统除以2，得到的结果便是 `320 x 568` ，即一个实际像素显示2个物理像素。

![1px指的是CSS像素](https://ws1.sinaimg.cn/large/a71efaafly1g20qd6m9paj20m90a474k.jpg)

### 计算页面元素真实的物理像素

那假如我们再页面上定义了一个200px宽高的div，那么它在iPhoneSE上显示的实际大小为多少呢。

1. 如果我们不定义viewport，viewport在所有的显示设备上的显示宽度均为980px。那么在iPhoneSE上，我们看到的定义的200px宽高的元素的实际物理像素宽高为 `640*(200/980)px`。

![viewport默认宽度](https://ws1.sinaimg.cn/large/a71efaafly1g20qkjqqk2j20b903k742.jpg)

2. 如果我们定义了viewport的宽度为设备宽度，那么在iPhoneSE上，我们看到的定义为200px宽高的元素的实际物理像素宽高为 `640*(200/320)px`

![定义viewport宽度为设备宽度](https://ws1.sinaimg.cn/large/a71efaafly1g20ql88ex7j20dy07g744.jpg)


### 何为缩放比


### 方案一

思路：这道题的目的在于，让显示器设备和移动设备都享有同样的CSS像素，即手机上的。控制 `initial-scale` 缩放比。

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

