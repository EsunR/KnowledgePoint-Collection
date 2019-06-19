# 1. MVVM双向数据绑定

angular - 脏值检测

vue - 数据劫持+发布订阅模式（不兼容低版本：因为其依赖于Object.defineProperty）

# 2. Object.defineProperty()

## 1.1 概念

`Object.defineProperty()` 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。定义的这个属性具有使用 `Object.defineProperty()` 为其附上的特性。

语法：

```
Object.defineProperty(obj, prop, descriptor)
```

`obj`：要在其上定义属性的对象。

`prop`：要定义或修改的属性的名称。

`descriptor`：将被定义或修改的属性描述符。

示例：

```javascript
var obj = { age: 18 }
Object.defineProperty(obj, 'name', {
  value: 'esunr'
});
```

```
> obj
< { age: 18, name: "esunr" }
```

但是当我们使用 `delete obj.school;` 是无法删除属性的，为了实现删除 `obj` 的 `school` 属性，我们需要去使用属性修饰符：

```diff
  let obj = {};
  Object.defineProperty(obj, 'school', {
+   configurable: true,
    value: 'esunr'
  });
  delete obj.school;
  console.log(obj);
```

但是不是使用 `Object.defineProperty()` 方法定义的对象属性，可以不受限制任意读写，如：

```
> obj.age = 19;
< 19
> obj
< { age: 19, name: "esunr" }
```

## 1.2 属性修饰符

在上面的代码中，`value`、`configurable` 都属于属性修饰符，使用 `Object.defineProperty` 时，我们要对每一个值都独立配置这些属性修饰符。

**数据描述符和存取描述符均具有**以下可选键值：

`configurable`

当且仅当该属性的 configurable 为 true 时，该属性`描述符`才能够被改变，同时该属性也能从对应的对象上被删除。**默认为 false**。

`enumerable`

当且仅当该属性的`enumerable`为`true`时，该属性才能够出现在对象的枚举属性中。**默认为 false**。（默认不可使用 `for..in` 循环）

**数据描述符同时具有以下可选键值**：

`value`

该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。**默认为 `undefined`**。

`writable`

当且仅当该属性的`writable`为`true`时，`value`才能被赋值运算符改变。**默认为 false**。

**存取描述符同时具有以下可选键值**：

## 1.3 get()与set()

`get`

一个给属性提供 getter 的方法，如果没有 getter 则为 `undefined`。当访问该属性时，该方法会被执行，方法执行时没有参数传入，但是会传入`this`对象（由于继承关系，这里的`this`并不一定是定义该属性的对象）。

**默认为 `undefined`**。

> 存在 `get()` 时，不能存在 `value` 属性

示例：

```javascript
let obj = {};
Object.defineProperty(obj, 'name', {
  configurable: true,
  get(){
    // 获取obj.name的值时会调用get方法
    return 'esunr'
  }
});
```

```
> obj.name
< "esunr"
```

`set`

一个给属性提供 setter 的方法，如果没有 setter 则为 `undefined`。当属性值修改时，触发执行该方法。该方法将接受唯一参数，即该属性新的参数值。

**默认为 [`undefined`]**。

示例：

```javascript
let obj = {};
Object.defineProperty(obj, 'name', {
  configurable: true,
  set(val){
    console.log(val)
  }
});
```

```
> obj.name = "xiaoming"
< "xiaoming"
```

# 3. 数据劫持

在使用vue时，我们通常将这样定义一个vm实例：

```javascript
let vm = new Vue({
  el: 'app',
  data: { a: 2 }
})  
```

实际上，Vue在其内部代码中进行了一些操作：

1. 将所有vm实例的配置项都转入到变量 `$options` 中
2. 将配置项 `data` 中的数据进行劫持，存放到vm实例上的 `_data` 变量中

那么进行数据劫持的这一步就是为了将用户由 `data` 传入的数据使用 `Object.defineProperty()` 方法为其每一项数据挂载一个 `get()` 和 `set()` 方法，同时如果 `data` 传入的某一项数据也是一个对象，那么也要在这个对象上面挂载 `get()` 和 `set()` 方法。

![20190529151814.png](http://img.cdn.esunr.xyz/markdown/20190529151814.png)

我们来实现Mvvm对象：

```javascript
function Mvvm(option = {}) {
  this.$options = option; // 将所有属性挂载了$options上
  var data = this._data = this.$options.data;
  observe(data);
}
// vm.$options


// 观察对象给对象增加 ObjectDefineProperty
function Observe(data) { // 这里写我们的主要逻辑
  for (let key in data) { // 把data属性通过object.defineProperty的方式定义属性
    let val = data[key];
    observe(val); // 如果val是一个对象，就使用递归再为其添加一个 get()、set()方法
    Object.defineProperty(data, key, {
      enumerable: true, // 可枚举
      get() {
        return val;
      },
      set(newVal) {
        if (newVal === val) {
          // 如果设置的值和以前一样，就不执行set操作
          return;
        } else {
          val = newVal; // 如果以后再获取值的时候，将刚才设置的值再丢回去
          observe(newVal); // 如果将数据进行重新赋值后，重新赋值的对象也要添加get()和set()
        }
      }
    })
  }
}

function observe(data) {
  if(typeof data !== 'object') return;
  return new Observe(data);
}
```

实例化一个vm对象：

```javascript
let vm = new Vue({
  el: 'app',
  data: { a: {a: 1} }
})  
```

可以看出其数据上都挂载了一个 `get()` 方法和 `set()` 方法：

![20190529155054.png](http://img.cdn.esunr.xyz/markdown/20190529155054.png)

# 4. 数据代理

在Vue中，我们通过 `data` 添加的数据不仅挂载到了vm实例的 `_data` 变量中，同时还挂载到了vm实例本身上，并且在我们正常的使用过程中，更多是去调用vm实例本身来获取数据，而并非 `_data` ，这时候我们就需要通过数据代理，将 `_data` 中的数据代理到vm实例上。

我们新增原有的核心代码：

```javascript
function Mvvm(option = {}) {
  this.$options = option;
  var data = this._data = this.$options.data;
  observe(data);
  // 使用this代理_data
  for(let key in data){
    Object.defineProperty(this,key, {
      enumerable: true,
      get(){
        return this._data[key];
      },
      set(newVal){
        this._data[key] = newVal;
      }
    })
  }
}
```

实现了Vue的两个特点：

- 不能新增不存在的属性，因为新增的属性没有get和set

- 深度相应，每次赋予一个新对象时会给这个新对象增加数据劫持


# 5. 模板编译

在Vue中，我们在文档节点中使用 `{{}}` 来将vm中的数据渲染到文档中，这就需要有一个模板编译方法来处理文档节点中的文本，来解析并且读取数据

新增一个Compile对象来执行编译，其包含两个参数，一个el为MVVM模式下的文档范围，vm为MVVM实例：

```javascript
function Compile(el, vm) {
  // el 表示替换的范围
  vm.$el = document.querySelector(el);
  let fragment = document.createDocumentFragment();
  while (child = vm.$el.firstChild) {
    // 将#app中的内容存放到fragment中，存放入内存等待处理
    fragment.appendChild(child);
  }

  // 替换处理fragment中的文本内容（模拟Vue的模板引擎）
  replace(fragment)

  function replace(fragment) {
    // Array.from() 方法从一个类似数组或可迭代对象中创建一个新的数组实例。
    // 遍历每个fragment中存放的节点
    Array.from(fragment.childNodes).forEach(function (node) {
      let text = node.textContent;
      let reg = /\{\{(.*)\}\}/;
      // 如果当前的节点类型是3（文本节点），就对其进行匹配处理
      if (node.nodeType === 3 && reg.test(text)) {
        console.log(RegExp.$1);
        let arr = RegExp.$1.split(".");
        let val = vm;
        arr.forEach(function (k) {
          val = val[k];
        });
        node.textContent = text.replace(/\{\{(.*)\}\}/, val);
      }
      // 如果当前节点不是根节点，就利用递归去深度遍历其内部节点（注意：普通Element节点的根节点都为文本节点）
      if (node.childNodes) {
        replace(node);
      }
    })
  }

  // 将内存中的dom节点重新加载到页面中（不需要渲染）
  vm.$el.appendChild(fragment);
}
```

在核心代码中启用：

```javascript
function Mvvm(options = {}) {
  ... ...
  new Compile(options.el, this);
}
```











# 6. 数据更新

在Vue中，当vm实例上挂载的数据发生更新时，视图也会随之刷新，他们之间存在着发布订阅关系。

## 6.1 发布订阅模式

我们再模拟Vue数据更新机制的时候，需要设计一个发布者的构造函数（Dep）和订阅者的构造函数（Watcher）。

发布者内部存放着一个订阅者队列 `subArr`，同时其原型上挂载了一个 `addSub()` 方法用来向订阅者队列中添加订阅者，还有一个 `carry()` 方法，执行该方法后，会遍历订阅者队列，执行每个订阅者身上挂载的 `update()` 方法。

每个订阅者内部都传入了一个 `fn` ，是一个方法函数。同时其原型上挂载了一个 `update()` 方法，在其方法内部执行了实例化订阅者时传入的方法函数 `fn`。

当发布者发布事件时，只需要调用挂载在其身上的 `carry()` 方法，就可以将所有订阅者的 `update()` 方法执行。

![20190530111309.png](http://img.cdn.esunr.xyz/markdown/20190530111309.png)

发布订阅模式的构造如下：

```javascript
// 1. 构造发布者
function Dep() {
  this.subArr = [];
}
Dep.prototype.addSub = function (sub) {
  this.subArr.push(sub);
}
Dep.prototype.carry = function () {
  this.subArr.forEach(sub => {
    sub.update();
  });
}

// 2. 构造订阅者
function Watcher(fn) {
  this.fn = fn;
}
Watcher.prototype.update = function () {
  this.fn();
}
```

## 6.2 模拟Vue中的发布订阅模式

在Vue中创建一个发布订阅机制我们需要考虑以下几个问题：

- 在哪里创建订阅者 （实例化一个Watcher对象）
- 在哪里创建发布者 （实例化一个Dep对象）
- 在哪里添加订阅 （执行发布者的 `addSub()` 方法）
- 在哪里发布事件 （执行发布者的 `carry()` 方法）

> 每一个渲染出的文本节点对应一个订阅者，一旦发生了数据更新，所有的订阅者的update方法都会被执行，也就是说所有需要解析的文本节点都会被渲染。

### 6.2.1 订阅者

Vue数据更新机制的订阅者是 `Compile` 编译器，当数据发生了变更时，编译器需要对模板重新编译渲染。在编译器中，执行了模板替换的方法语句是 `node.textContent = text.replace(/\{\{(.*)\}\}/, val);` ，那么我们再创建订阅者时，传入其内部的方法就是这条语句：

```diff
  function Compile(el, vm) {
    ... ...

    // 替换处理fragment中的文本内容（模拟Vue的模板引擎）
    replace(fragment)

    function replace(fragment) {
      Array.from(fragment.childNodes).forEach(function (node) {
        ... ...
        if (node.nodeType === 3 && reg.test(text)) {
          ... ...
+         new Watcher(function () {
+           node.textContent = text.replace(/\{\{(.*)\}\}/, val);
+         })
          // 替换的逻辑
          node.textContent = text.replace(/\{\{(.*)\}\}/, val);
        }
        if (node.childNodes) {
          ... ...
        }
      })
    }

    // 将内存中的dom节点重新加载到页面中（不需要渲染）
    vm.$el.appendChild(fragment);
  }
```

这样就达成了一个目的：在页面加载完成后实例化 `Compile` 时，在执行模板编译的过程中，为每个文本节点对象都渲染出一个订阅者实例，去观察其对应的数据是否变动，如果数据变动，就触发当前文本节点的重新渲染。

我们先不讨论实例化的订阅者何时被调用挂载于其身上的 `update()` 方法，先假设一旦数据发生了变化，传入订阅者实例的方法就会被执行，即 `node.textContent = text.replace(/\{\{(.*)\}\}/, val)` 被执行。但我们会发现，内部参数 `val` 仍是一个旧值（因为Compile只执行一次，在其内部的变量val肯定是不会动态变更的）。我们在重新渲染文本节点时，需要去将旧文本替换成新文本。

那么问题就是如何获取更新后的新值？

我们需要改动代码，在实例化订阅者对象的时候传入三个值，`vm` 为Mvvm实例，`RegExp.$1` 是当前文本节点中匹配的原始待编译字符（也就是 `{{}}` 包裹的内容），第三个参数时传入的执行函数：

```diff
- new Watcher(function () {
-   node.textContent = text.replace(/\{\{(.*)\}\}/, val);
- })

+ new Watcher(vm, RegExp.$1, function (newVal) {
+   node.textContent = text.replace(/\{\{(.*)\}\}/, newVal);
+ })
```

那么传入的这些参数在构造对象 `Watcher` 中如何使用？

首先我们要接受传入的参数

```diff
  function Watcher(vm, exp, fn) {
+   this.fn = fn;
+   this.vm = vm;
+   this.exp = exp;
  }
```

这时候就可以考虑如何将订阅者添加到发布者的 `subArr` 中了。

首先我们要清楚实例化发布者的位置应该是在 `Observe` 中，因为其负责了构建每一个数据。所以我们可以去尝试通过访问数据对象上的 `get()` 方法，来将订阅者添加到其数据上的发布者。

```diff
  function Watcher(vm, exp, fn) {
    this.fn = fn;
    this.vm = vm;
    this.exp = exp;
+   Dep.target = this;
+   let val = vm;
+   let arr = exp.split('.');
+   arr.forEach(function (k) {
+     val = val[k];
+   })
+   Dep.target = null;
  }
```

其中 `Dep.target` 是为了存放当前的订阅者对象，在数据的 `get()` 方法中将订阅者添加到发布者的 `subArr` 中。 `forEach` 是为了深度遍历，因为如果当前的数据值是一个对象，那么需要去深度查找这个值中对象的 `get()` 和 `set()` 方法。

同样，当数据被重新赋值时，会调用其 `set()` 方法，所以最终我们在 `Observe` 中为数据添加 `get()` 和 `set()` 方法的代码中要加上如下额外步骤：

```diff
  function Observe(data) {
+   let dep = new Dep();
    for (let key in data) {
      let val = data[key];
      observe(val);
      Object.defineProperty(data, key, {
        enumerable: true,
        get() {
+         Dep.target && dep.addSub(Dep.target);
          return val;
        },
        set(newVal) {
          if (newVal === val) {
            return;
          } else {
            val = newVal;
            observe(newVal);
+           dep.carry();
          }
        }
      })
    }
  }
```

但是正如最初我们提到的，执行订阅者的 `update()` 方法去执行传入订阅者内部的函数时，需要获取新值 `newVal`，那么我们需要去更改一下 `update()` 方法，由于其执行前已经对数据进行了重新赋值，所以只要查找该订阅者对应的值就可以获取 `newVal` 了。

```javascript
Watcher.prototype.update = function () {
  let val = this.vm;
  let arr = this.exp.split('.');
  arr.forEach(function (k) {
    val = val[k];
  })
  this.fn(val);
}
```

# 7. 数据的双向绑定

为了实现数据的双向绑定，要点在编译模板时，去审查每个Document节点元素身上有没有挂载 `v-model` 属性，如果有，就获取其 `value`，为其添加一个订阅，来当数据更新时连带更新输入框的内容，同时添加一个监听方法，当在其内部输入时，触发绑定数据的 `set()` 方法来变更数据的值：

```javascript
function Compile(el, vm) {
  ... ...
  function replace(fragment) {
    Array.from(fragment.childNodes).forEach(function (node) {
      ... ...
      if (node.nodeType === 1) {
        let nodeAttrs = node.attributes;
        Array.from(nodeAttrs).forEach(function (attr) {
          let name = attr.name;
          let exp = attr.value;
          // 默认以 "v-" 开头的为 "v-model"
          if (name.indexOf('v-') === 0) {
            node.value = vm[exp];
          }
          new Watcher(vm, exp, function (newVal) {
            node.value = newVal;
          })
          node.addEventListener('input', function (e) {
            let newVal = e.target.value;
            vm[exp] = newVal;
          })
        })
      }
      ... ...
    })
  }
}
```

# 8. 计算属性

在Vue中，计算属性可以被缓存到vm实例上：

```javascript
function initComputed() { // 具有缓存功能
  let vm = this;
  let computed = this.$options.computed;
  // Object.keys()方法可以将一个对象的key存放在一个数组数组中
  Object.keys(computed).forEach(function (key) {
    Object.defineProperty(vm, key, {
      get: computed[key]
    })
  })
}
```







