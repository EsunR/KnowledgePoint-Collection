class EventEmitter {
  constructor() {
    this.handlers = {}
  };
  on(eventName, handler) {
    if (!(eventName in this.handlers)) {
      this.handlers[eventName] = [];
    }
    this.handlers[eventName].push(handler);
  };
  emit(eventName) {
    let arr = [...arguments];
    arr.shift();
    for (let i = 0; i < this.handlers[eventName].length; i++) {
      this.handlers[eventName][i](...arr);
    }
  }
}

const event = new EventEmitter();

event.on('someEvent', (...arr) => {
  console.log('some_event triggered', ...arr);
});

event.emit('someEvent', 'abc', '123', '444');

