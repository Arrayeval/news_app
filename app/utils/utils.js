export default  utils = {
  // 时间格式化
  formatTime (second = 0) {
    let h = 0, i = 0, s = parseInt(second)
    if (s > 60) {
        i = parseInt(s / 60)
        s = parseInt(s % 60)
    }
    //补零
    let zero = function (v) {
        return (v >> 0) < 10 ? '0' + v : v
    }

    return [zero(h), zero(i), zero(s)].join(':');
  }
}

 