- [题目](#%E9%A2%98%E7%9B%AE)
- [知识点](#%E7%9F%A5%E8%AF%86%E7%82%B9)
  - [1. 日期](#1-%E6%97%A5%E6%9C%9F)
  - [2. Math](#2-math)
  - [3. 数组API](#3-%E6%95%B0%E7%BB%84api)
  - [解答](#%E8%A7%A3%E7%AD%94)
  - [获取2017-06-10格式的日期](#%E8%8E%B7%E5%8F%962017-06-10%E6%A0%BC%E5%BC%8F%E7%9A%84%E6%97%A5%E6%9C%9F)
  - [获取随机数，要求是长度一直的字符串格式](#%E8%8E%B7%E5%8F%96%E9%9A%8F%E6%9C%BA%E6%95%B0%E8%A6%81%E6%B1%82%E6%98%AF%E9%95%BF%E5%BA%A6%E4%B8%80%E7%9B%B4%E7%9A%84%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%A0%BC%E5%BC%8F)
  - [写一个能遍历对象和数组的通用forEach 函数](#%E5%86%99%E4%B8%80%E4%B8%AA%E8%83%BD%E9%81%8D%E5%8E%86%E5%AF%B9%E8%B1%A1%E5%92%8C%E6%95%B0%E7%BB%84%E7%9A%84%E9%80%9A%E7%94%A8foreach-%E5%87%BD%E6%95%B0)

# 题目

- 获取2017-06-10格式的日期
- 获取随机数，要求是长度一直的字符串格式
- 写一个能遍历对象和数组的通用forEach 函数

# 知识点

## 1. 日期
```javascript
Date.now(); //获取当前时间毫秒数
var dt=new Date(); 
dt.getTime(); //获取毫秒数
dt.getFullYear(); //年
dt.getMonth(); //月(0-11)
dt.getDate(); //日(0-31)
dt.getHours(); //小时(0、-23)
dt.getMinutes(); //分钟(0-59)
dt.getSeconds(); //秒(0-59)
```

## 2. Math
获取随机数
```javascript
Math.random();
```

## 3. 数组API
- forEach 遍历所有元素
- every判断所有元素是否都符合条件，如果有一个不满足条件就会判断失败
- some判断是否有至少一个元素符合条件
- sort 排序
- map对元素重新组装，生成新数组

![](http://markdown.img.esunr.xyz/20190506194717.png)

![](http://markdown.img.esunr.xyz/20190506194744.png)

![](http://markdown.img.esunr.xyz/20190506194906.png)

![](http://markdown.img.esunr.xyz/20190506195234.png)

![](http://markdown.img.esunr.xyz/20190506195419.png)

![](http://markdown.img.esunr.xyz/20190506195441.png)

## 解答
## 获取2017-06-10格式的日期

![](http://markdown.img.esunr.xyz/20190506195839.png)

## 获取随机数，要求是长度一直的字符串格式

![](http://markdown.img.esunr.xyz/20190506200215.png)

## 写一个能遍历对象和数组的通用forEach 函数

![](http://markdown.img.esunr.xyz/20190506200607.png)

















