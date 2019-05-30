# 1. 何为BFC?

> 文章：https://juejin.im/post/5909db2fda2f60005d2093db#heading-8

BFC概括：可以在心中记住这么一个概念———所谓的BFC就是css布局的一个概念，是一块区域，一个环境。

BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。

FC是formatting context的首字母缩写，直译过来是格式化上下文，它是页面中的一块渲染区域，有一套渲染规则，决定了其子元素如何布局，以及和其他元素之间的关系和作用。

常见的FC有`BFC`、`IFC`（行级格式化上下文），还有`GFC`（网格布局格式化上下文）和`FFC`（自适应格式化上下文），这里就不再展开了。

# 2. 触发BFC的方式

满足下列条件之一就可触发BFC

1. 根元素，即HTML元素
2. float的值不为none
3. overflow的值不为visible
4. display的值为inline-block、table-cell、table-caption
5. position的值为absolute或fixed

# 3. 布局规则

1. 内部的Box会在垂直方向，一个接一个地放置。
2. Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
3. 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。
4. BFC的区域不会与float box重叠。
5. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

# 4. BFC作用

1. 自适应两栏布局
2. 可以阻止元素被浮动元素覆盖
3. 可以包含浮动元素——清除内部浮动
4. ~~分属于不同的BFC时可以阻止margin重叠~~

# 5. BFC解决margin问题

使用margin存在两种问题，一种是穿透问题，一种是折叠问题。

## 5.1 穿透问题

穿透问题即为子级元素的垂直方向margin会穿透父级元素，导致父级元素发生位移，如下：

```html
<div class="wrapper">
  <div class="inner"></div>
</div>
```

```css
.wrapper {
  width: 200px;
  height: 200px;
  background-color: pink;
}
.inner{
  margin-top: 50px;
}
```

![20190522110557.png](http://img.cdn.esunr.xyz/markdown/20190522110557.png)

![20190522110624.png](http://img.cdn.esunr.xyz/markdown/20190522110624.png)

## 5.2 margin折叠问题

margin折叠问题即为同属一个BFC中的垂直元素的垂直margin值在页面计算时发生了折叠而并不会累加

```html
<div class="wrapper"></div>
<div class="wrapper"></div>
```

```css
.wrapper {
  width: 200px;
  height: 200px;
  background-color: pink;
  margin: 20px 0;
}
```

![20190522110846.png](http://img.cdn.esunr.xyz/markdown/20190522110846.png)


## 5.3 两种问题应该如何解决

### 5.3.1 解决margin溢出

解决margin穿透问题可以使用BFC的特性来将父级元素设置为一个独立的BFC，子级元素的margin值就不会溢出父级，而是将父级作为一个独立区域去计算margin值，我们这里用 `overflow: hidden` 来触发父级的BFC：

```html
<div class="wrapper">
  <div class="inner"></div>
</div>
```

```css
.wrapper {
  width: 200px;
  height: 200px;
  background-color: pink;
  overflow: hidden;
}
.inner{
  margin-top: 50px;
}
```
![20190522111410.png](http://img.cdn.esunr.xyz/markdown/20190522111410.png)

### 5.3.2 解决margin重叠

网上很多文章都说可以使用BFC特性来解决margin折叠其实是错误的，如果我们用 `overflow: hidden` 将两个div设置为不同的两个BFC区域，那么我们会发现该重叠的还是会重叠。

查阅相关资料显示只有以下一种方式可以使元素上下margin不折叠：

> 浮动元素、inline-block 元素、绝对定位元素的 margin 不会和垂直方向上其他元素的 margin 折叠（注意这里指的是上下相邻的元素） 
> 
> 作者：丁小倪 链接：https://www.zhihu.com/question/19823139/answer/13610574 来源：知乎


之所以很多文章生成BFC可以解决垂直margin重叠的问题，是因为浮动元素、inline-block 元素、绝对定位元素都在触发了BFC的同时解决了重叠问题。也就是说可以解决垂直margin重叠问题的方法都可以让元素具有BFC特性，但是让元素具有BFC特性不一定能够解决垂直margin重叠的问题。

所以如果我们需要解决margin重叠问题，那就将元素设置为浮动元素，或者将其设置为 inline-block 元素，或者使用绝对定位，但这些都会对元素的样式产生副作用，我们采用将元素设置为 inline-block 元素的方法来演示如何解决这一问题（注意 `inline-block` 元素对空格敏感，会导致两个div之间出现空隙，具体的解决方法看：https://segmentfault.com/a/1190000010934928 ）：

```html
<div class="wrapper"></div>
<div class="wrapper"></div>
```

```css
.wrapper {
  width: 200px;
  height: 200px;
  background-color: pink;
  margin: 20px 0;
  display: inline-block;
  width: 100%;
}
```

![20190522122552.png](http://img.cdn.esunr.xyz/markdown/20190522122552.png)

其实如果利用BFC特性也能实现去掉上下margin的效果，只不过原理上还是利用BFC阻止margin溢出，我们可以将两个div套上一个BFC的外壳，这样两个BFC的内部元素就不会互相影响了：

> 作者：陈厚毅 链接：https://www.zhihu.com/question/19823139/answer/50075651 来源：知乎

![20190522122826.png](http://img.cdn.esunr.xyz/markdown/20190522122826.png)




