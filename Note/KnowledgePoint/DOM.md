- [题目](#%E9%A2%98%E7%9B%AE)
- [知识点](#%E7%9F%A5%E8%AF%86%E7%82%B9)
  - [1. DOM节点操作](#1-dom%E8%8A%82%E7%82%B9%E6%93%8D%E4%BD%9C)
    - [1.1 获取DOM节点](#11-%E8%8E%B7%E5%8F%96dom%E8%8A%82%E7%82%B9)
    - [1.2 property](#12-property)
    - [1.3 attribute](#13-attribute)
  - [2. DOM结构操作](#2-dom%E7%BB%93%E6%9E%84%E6%93%8D%E4%BD%9C)
    - [2.1 新增节点](#21-%E6%96%B0%E5%A2%9E%E8%8A%82%E7%82%B9)
    - [2.2 获取父元素和子元素](#22-%E8%8E%B7%E5%8F%96%E7%88%B6%E5%85%83%E7%B4%A0%E5%92%8C%E5%AD%90%E5%85%83%E7%B4%A0)
    - [2.4 删除节点](#24-%E5%88%A0%E9%99%A4%E8%8A%82%E7%82%B9)
- [解答](#%E8%A7%A3%E7%AD%94)
  - [1. DOM是哪种基本的数据结构？](#1-dom%E6%98%AF%E5%93%AA%E7%A7%8D%E5%9F%BA%E6%9C%AC%E7%9A%84%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84)
  - [2. DOM操作的常用API 有哪些](#2-dom%E6%93%8D%E4%BD%9C%E7%9A%84%E5%B8%B8%E7%94%A8api-%E6%9C%89%E5%93%AA%E4%BA%9B)
  - [3. DOM节点的attr和property有何区别](#3-dom%E8%8A%82%E7%82%B9%E7%9A%84attr%E5%92%8Cproperty%E6%9C%89%E4%BD%95%E5%8C%BA%E5%88%AB)

# 题目
- DOM是哪种基本的数据结构？
- DOM操作的常用API 有哪些
- DOM节点的attr和property有何区别

# 知识点

## 1. DOM节点操作

### 1.1 获取DOM节点

![](http://markdown.img.esunr.xyz/20190506202149.png)

### 1.2 property

property 是 DOM 节点的 **标准属性**，如 `p.nodeName` 中的 `nodeName` 就是 `p` 的 property

![](http://markdown.img.esunr.xyz/20190506202726.png)

### 1.3 attribute

attribute 是HTML文档 **标签中的属性**

![](http://markdown.img.esunr.xyz/20190506203026.png)

![](http://markdown.img.esunr.xyz/20190506203100.png)

## 2. DOM结构操作

### 2.1 新增节点

![](http://markdown.img.esunr.xyz/20190506203614.png)

移动元素使用 `appendChild` 后，原来的元素就没了

### 2.2 获取父元素和子元素

![](http://markdown.img.esunr.xyz/20190506203857.png)

![](http://markdown.img.esunr.xyz/20190506204128.png)

### 2.4 删除节点

![](http://markdown.img.esunr.xyz/20190506204154.png)

# 解答

## 1. DOM是哪种基本的数据结构？

树结构

## 2. DOM操作的常用API 有哪些

- 获取DOM节点，以及节点的property和Attribute
- 获取父节点，获取子节点
- 新增节点，删除节点

## 3. DOM节点的attr和property有何区别

- property 只是一个JS对象的属性的修改
- Attribute是对html标签属性的修改

