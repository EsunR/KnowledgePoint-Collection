console.log("Sync Start")
new Promise((resolve) => {
  resolve()
  console.log("Sync Running");
}).then(() => {
  console.log("micro task")
})
setTimeout(function () {
  console.log("macro task")
}, 0)
console.log("Sync End")