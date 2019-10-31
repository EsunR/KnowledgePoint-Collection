function Mvvm(options = {}) {
  this.$options = options; // 将所有属性挂载了$options上
  var data = this._data = this.$options.data;
  observe(data);
  // 使用this代理_data
  for (let key in data) {
    Object.defineProperty(this, key, {
      enumerable: true,
      get() {
        return this._data[key];
      },
      set(newVal) {
        this._data[key] = newVal;
      }
    })
  }
  initComputed.call(this);
  new Compile(options.el, this);
}
// vm.$options


// 1. 观察对象给对象增加 ObjectDefineProperty
function Observe(data) { // 这里写我们的主要逻辑
  let dep = new Dep();
  for (let key in data) { // 把data属性通过object.defineProperty的方式定义属性
    let val = data[key];
    observe(val); // 如果val是一个对象，就使用递归再为其添加一个 get()、set()方法
    Object.defineProperty(data, key, {
      enumerable: true, // 可枚举
      get() {
        Dep.target && dep.addSub(Dep.target);
        return val;
      },
      set(newVal) {
        if (newVal === val) {
          // 如果设置的值和以前一样，就不执行set操作
          return;
        } else {
          val = newVal; // 如果以后再获取值的时候，将刚才设置的值再丢回去
          observe(newVal); // 如果将数据进行重新赋值后，重新赋值的对象也要添加get()和set()
          dep.carry(); // 让所有wacher的update方法执行
        }
      }
    })
  }
}
function observe(data) {
  if (typeof data !== 'object') return;
  return new Observe(data);
}



// 2. 编译
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
      // 如果是元素节点，读取其属性查看有没有 v-model
      if (node.nodeType === 1) {
        let nodeAttrs = node.attributes;
        Array.from(nodeAttrs).forEach(function (attr) {
          let name = attr.name;
          let exp = attr.value;
          if (name.indexOf('v-') === 0) {
            // 默认以 "v-" 开头的为 "v-model"
            node.value = vm[exp];
          }
          new Watcher(vm, exp, function (newVal) {
            node.value = newVal; // 当watcher触发时，会自动将内容添到输入框内
          })
          node.addEventListener('input', function (e) {
            let newVal = e.target.value;
            vm[exp] = newVal;
          })
        })
      }
      // 如果当前的节点类型是3（文本节点），就对其进行匹配处理
      if (node.nodeType === 3 && reg.test(text)) {
        // RegExp.$1为匹配的内容（即{{}}包裹的内容）
        let arr = RegExp.$1.split(".");
        let val = vm;
        arr.forEach(function (k) {
          val = val[k];
        });
        new Watcher(vm, RegExp.$1, function (newVal) { // 函数里需要接收一个新值
          node.textContent = text.replace(/\{\{(.*)\}\}/, newVal);
        })
        // 替换的逻辑
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



// 3. 发布订阅：监控数据的变化，数据每发生一次发生变化就更新视图
// 3.1 构造发布者
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
// 3.2 构造订阅者
function Watcher(vm, exp, fn) {
  this.fn = fn;
  this.vm = vm;
  this.exp = exp;
  Dep.target = this;
  let val = vm;
  let arr = exp.split('.');
  arr.forEach(function (k) {
    // 触发vm实例上挂载数据的get方法
    val = val[k];
  })
  Dep.target = null;
}
Watcher.prototype.update = function () {
  let val = this.vm;
  let arr = this.exp.split('.');
  arr.forEach(function (k) {
    val = val[k];
  })
  this.fn(val);
}


// 初始化计算属性
function initComputed() { // 具有缓存功能
  let vm = this;
  let computed = this.$options.computed;
  Object.keys(computed).forEach(function (key) {
    Object.defineProperty(vm, key, { // computed[key]
      get: computed[key]
    })
  })
}