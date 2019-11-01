window.onload = function () {
  window.onscroll = function () {
    let top = this.document.documentElement.scrollTop
    if (top >= 150) {
      this.document.querySelector('.content').classList.add("animate")
    } else {
      this.document.querySelector('.content').classList.remove("animate")
    }
  }
}