/**
 * 判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let checkArr = []
  for (let i = 0; i < 9; i++) {
    checkArr.length = 0
    checkArr = board[i].slice(0, board[i].length)
    if (!check(checkArr)) return false
  }
  for (let i = 0; i < 9; i++) {
    checkArr.length = 0
    for (let j = 0; j < 9; j++) {
      checkArr.push(board[j][i])
    }
    if (!check(checkArr)) return false
  }
  for (let i = 0; i < 9; i++) {
    checkArr.length = 0
    for (let j = 0; j < 9; j++) {
      let y = parseInt(j / 3) + parseInt(i / 3) * 3
      let x = j % 3 + i % 3 * 3
      checkArr.push(board[y][x])
    }
    if (!check(checkArr)) return false
  }
  return true
};

/**
 * 检查是否有重复数组
 * @param {Array} arr 
 */
function check(arr) {
  let obj = {}
  for (let i in arr) {
    if (Number(arr[i])) {
      if (!obj[arr[i]]) {
        obj[arr[i]] = 1
      } else {
        return false
      }
    }
  }
  return true
}

console.log(
  isValidSudoku([
    [".", ".", "4", ".", ".", ".", "6", "3", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", ".", ".", ".", ".", ".", ".", "9", "."],

    [".", ".", ".", "5", "6", ".", ".", ".", "."],
    ["4", ".", "3", ".", ".", ".", ".", ".", "1"],
    [".", ".", ".", "7", ".", ".", ".", ".", "."],

    [".", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."]
  ])
);