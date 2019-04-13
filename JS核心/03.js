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