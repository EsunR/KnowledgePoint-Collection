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
  console.log('timmer_1 (macro task delay 1000)');
}, 0)

console.log('========== Sync queue(macro task 1) ==========');