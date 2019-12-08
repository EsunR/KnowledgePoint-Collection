// 宏任务1
new Promise((resolve) => {
  console.log('new Promise(macro task 1)');
  resolve();
}).then(() => {
  // 微任务1
  console.log('micro task 1');
  setTimeout(() => {
    // 宏任务3
    console.log('macro task 3');
  }, 0)
})

setTimeout(() => {
  // 宏任务2
  console.log('macro task 2');
}, 0)

console.log('========== Sync queue(macro task 1) ==========');