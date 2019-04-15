// 在宏任务中添加微任务再添加宏任务
// 宏任务 => 宏任务中添加的微任务 => 微任务中添加的宏任务

// 宏任务1
setTimeout(() => {
  console.log('timmer_2 (macro task 2.1)');
  new Promise((resolve) => {
    resolve();
  }).then(() => {
    // 微任务1
    console.log('micro task 1');
    setTimeout(() => {
      // 宏任务3
      console.log('macro task 3');
    }, 0)
  })
}, 0);

setTimeout(() => {
  // 宏任务2
  console.log('timmer_1 (macro task 2.2)');
}, 0)

console.log('========== Sync queue(macro task 1) ==========');