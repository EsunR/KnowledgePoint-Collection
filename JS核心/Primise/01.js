var process = 0;
var process_string = []
var delay = 2000
var process_delay = 50
var total = delay / process_delay
var base = 1 / total;

for (let i = 0; i < 10; i++) {
  process_string.push(' ');
}

var timmer = setInterval(() => {
  if (String(base).length - 2 === 1) {
    process_string.some((item, index) => {
      if (item === ' ') {
        process_string.splice(index, 1, '=')
        return true;
      }
    })
  }
  console.log(`${(base * 100).toFixed(0)}% [${process_string.join('')}]`);
  base = Number((base + 1 / total).toFixed(8));
}, process_delay)

function timeout(ms) {
  return new Promise((resolve, reject) => {
    // setTimeout(resolve, ms, 'done');
    setTimeout(() => {
      resolve('done!')
    }, ms);
  })
}

timeout(delay).then((value) => {
  console.log(value);
  clearInterval(timmer);
})
