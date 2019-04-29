> 参考文章: https://www.cnblogs.com/smyhvae/p/8435182.html  
> Demo: https://github.com/EsunR/Daily-Study/blob/master/CSS3/动画/

- [1. transition 过度](#1-transition-%E8%BF%87%E5%BA%A6)
  - [1.1 复合样式](#11-%E5%A4%8D%E5%90%88%E6%A0%B7%E5%BC%8F)
    - [property：](#property)
    - [duration：](#duration)
    - [timing-function：](#timing-function)
    - [delay:](#delay)
- [2. transform 2D转换](#2-transform-2d%E8%BD%AC%E6%8D%A2)
  - [2.1 缩放：scale](#21-%E7%BC%A9%E6%94%BEscale)
  - [2.2 位移：translate](#22-%E4%BD%8D%E7%A7%BBtranslate)
    - [使用translate让元素居中](#%E4%BD%BF%E7%94%A8translate%E8%AE%A9%E5%85%83%E7%B4%A0%E5%B1%85%E4%B8%AD)
  - [2.3 旋转：rotate](#23-%E6%97%8B%E8%BD%ACrotate)
- [3. transform 3D 转换](#3-transform-3d-%E8%BD%AC%E6%8D%A2)
  - [3.1 旋转：rotateX、rotateY、rotateZ](#31-%E6%97%8B%E8%BD%ACrotatexrotateyrotatez)
  - [3.2 移动：translateX、translateY、translateZ](#32-%E7%A7%BB%E5%8A%A8translatextranslateytranslatez)
  - [3.3 透视：perspective](#33-%E9%80%8F%E8%A7%86perspective)
  - [3.4 3D呈现（transform-style）](#34-3d%E5%91%88%E7%8E%B0transform-style)
- [4. animation 动画](#4-animation-%E5%8A%A8%E7%94%BB)
  - [4.1 定义步骤](#41-%E5%AE%9A%E4%B9%89%E6%AD%A5%E9%AA%A4)
  - [4.2 动画属性](#42-%E5%8A%A8%E7%94%BB%E5%B1%9E%E6%80%A7)


# 1. transition 过度

## 1.1 复合样式
```
transition: property duration timing-function, [property duration timing-function], [... ...]
```

### property：
希望在样式发生改变后产生动画效果的样式名，如果想要应用于所有样式属性，则设置为 `all`。

如：希望div改变 `background` 属性的时候是一个动画效果，就将 `property` 设置为 `background`
```css
div{
  background-color: #fff;
  transition: background-color 1s linear;
}
div:hover{
  background-color: #000;
}
```

### duration：
动画持续的时间

### timing-function：
运动曲线，其属性值可以是：
- linear 线性
- ease 减速
- ease-in 加速
- ease-out 减速
- ease-in-out 先加速后减速

### delay:
过渡延迟。多长时间后再执行这个过渡动画。




# 2. transform 2D转换
在 CSS3 当中，通过 transform 转换来实现 2D 转换或者 3D 转换。

2D转换包括：缩放、移动、旋转。


## 2.1 缩放：scale
```
transform: scale(x, y);
transform: scale(2, 0.5);
```
参数解释： x：表示水平方向的缩放倍数。y：表示垂直方向的缩放倍数。如果只写一个值就是等比例缩放。

取值：大于1表示放大，小于1表示缩小。不能为百分比。

设置 2D 转换，并不会影响其他元素的位置。


## 2.2 位移：translate
```
transform: translate(水平位移, 垂直位移);
transform: translate(-50%, -50%);
```
参数解释：

- 参数为百分比，相对于自身移动。

- 正值：向右和向下。 负值：向左和向上。如果只写一个值，则表示水平移动。

### 使用translate让元素居中
```css
div{
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: pink;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```


## 2.3 旋转：rotate
```
transform: rotate(角度);
transform: rotate(45deg);
```

参数解释：正值 顺时针；负值：逆时针。


# 3. transform 3D 转换

## 3.1 旋转：rotateX、rotateY、rotateZ
```
transform: rotateX(360deg);    //绕 X 轴旋转360度
transform: rotateY(360deg);    //绕 Y 轴旋转360度
transform: rotateZ(360deg);    //绕 Z 轴旋转360度
```
![](http://img.smyhvae.com/20180208_2010.png)

Demo：鼠标移动到元素上元素反转到背面展示内容

```html
<style>
.box .inner {
  backface-visibility: hidden;
  transition: all 1s;
}
.force {
  transform: rotateY(0deg);
}

.box:hover .force{
  transform: rotateY(180deg);
}

.back {
  transform: rotateY(180deg);
}

.box:hover .back{
  transform: rotateY(0deg);
}
</style>

<div class="box">
  <div class="inner back">反面</div>
  <div class="inner force">正面</div>
</div>
```

## 3.2 移动：translateX、translateY、translateZ

```
transform: translateX(100px);    //沿着 X 轴移动
transform: translateY(360px);    //沿着 Y 轴移动
transform: translateZ(360px);    //沿着 Z 轴移动
```

> Z轴的变化必须在父级元素上添加 `perspective` 属性，如 `perspective: 1000px;`

## 3.3 透视：perspective

格式有两种写法：

- 作为一个属性，设置给父元素，作用于所有3D转换的子元素

- 作为 transform 属性的一个值，做用于元素自身。

## 3.4 3D呈现（transform-style）

3D元素构建是指某个图形是由多个元素构成的，可以给这些元素的父元素设置transform-style: preserve-3d来使其变成一个真正的3D图形。属性值可以如下：

```
transform-style: preserve-3d;     //让 子盒子 位于三维空间里
transform-style: flat;            //让 子盒子 位于此元素所在的平面内（子盒子被扁平化）
```




# 4. animation 动画

## 4.1 定义步骤
1. 通过@keyframes定义动画；

2. 将这段动画通过百分比，分割成多个节点；然后各节点中分别定义各属性；

3. 在指定元素里，通过 animation 属性调用动画。

## 4.2 动画属性

```
animation: 定义的动画名称 持续时间  执行次数  是否反向  运动曲线 延迟执行。(infinite 表示无限次)

animation: move1 1s  alternate linear 3;

animation: move2 4s;
```

可以看出，这里的 animation 是综合属性，接下来，我们把这个综合属性拆分看看。

（1）动画名称：

```css
animation-name: move;
```

（2）执行一次动画的持续时间：

```css
animation-duration: 4s;
```

备注：上面两个属性，是必选项，且顺序固定。

（3）动画的执行次数：

```css
animation-iteration-count: 1;       //iteration的含义表示迭代
```

属性值infinite表示无数次。

（3）动画的方向：

```css
animation-direction: alternate;
```

属性值：normal 正常，alternate 反向。

（4）动画延迟执行：

```css
animation-delay: 1s;
```

（5）设置动画结束时，盒子的状态：

```css
animation-fill-mode: forwards;
```

属性值： forwards：保持动画结束后的状态（默认）， backwards：动画结束后回到最初的状态。

（6）运动曲线：

```css
animation-timing-function: ease-in;
```

属性值可以是：linear ease-in-out steps()等。

注意，如果把属性值写成`steps()`，则表示动画不是连续执行，而是间断地分成几步执行（参数位填写数字）。利用`step()`可以制作时钟效果。








