setTimeout(() => console.log('timer_1'), 0)

new Promise(resolve => {
  setTimeout(() => {
    console.log('timer_2');
  }, 0)
  resolve()
  console.log('new promise')
}).then(_ => {
  console.log('promise then')
})


console.log('Sync queue')