# 题目

- 如何检测浏览器的类型
- 拆解ur的各部分

# 知识点

## 1. navigator 浏览器

获取用户设备信息：
```js
var ua = navigator.userAgent 
var isChrome = ua.indexOf('Chrome')
console.log(isChrome)
```

## 2. screen 屏幕

获取屏幕信息：
```js
//screen 
console.log(screen. width)
console.log(screen. height)
```

## 3. location 地址栏

```js
//location 
console.log(location.href) // 完整链接
console.log(location.protocol) // 协议 'http:' 'https:'
console.log(location.host) // 域名
console.log(location.pathname) // 路径
console.log(location.search) // ?后的参数
console.log(location.hash) // #后的哈希值
```

## 4. history 历史

控制前进后退：
```js
//history 
history.back()
history.forward()
```

# 解答

## 1. 如何检测浏览器的类型

```js
var ua = navigator.userAgent 
var isChrome = ua.indexOf('Chrome')
console.log(isChrome)
```

## 2. 拆解ur的各部分

略...







