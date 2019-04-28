var Store = function () {
  this.dispatch = (obj) => {
    if (typeof obj === "function") {
      obj(this.dispatch);
    } else if (typeof obj === "object") {
      console.log(obj);
    }
  }
}

var fun = function (dispatch) {
  let action = {
    type: "fun",
    msg: "dispatch carry by a function inner"
  }
  dispatch(action)
}

var store = new Store();
store.dispatch(fun)