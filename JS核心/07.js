// 宏任务队列 1
setTimeout(() => {
  // 宏任务队列 2.1
  console.log('timer_1');
  setTimeout(() => {
    // 宏任务队列 3
    console.log('timer_3')
  }, 0)
  new Promise(resolve => {
    resolve()
    console.log('new promise')
  }).then(() => {
    // 微任务队列 1
    console.log('promise then')
  })
}, 0)

setTimeout(() => {
  // 宏任务队列 2.2
  console.log('timer_2')
}, 0)

console.log('========== Sync queue ==========')

// 执行顺序：主线程（宏任务队列 1）=> 宏任务队列 2 => 微任务队列 1 => 宏任务队列 3