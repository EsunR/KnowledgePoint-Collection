/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s
  let resultArr = []
  for (let r = 1; r <= numRows; r++) {
    let rowCharArr = []
    let flag = true
    let index = r - 1
    let nextChar = s[index]
    rowCharArr.push(nextChar)
    while (nextChar) {
      if (flag) {
        if (part1(r, numRows) >= 0) {
          let add = part1(r, numRows)
          index = index + add + 1
          nextChar = s[index]
          rowCharArr.push(nextChar)
        }
        flag = !flag
      } else {
        if (part2(r) >= 0) {
          let add = part2(r)
          index = index + add + 1
          nextChar = s[index]
          rowCharArr.push(nextChar)
        }
        flag = !flag
      }
    }
    resultArr = resultArr.concat(rowCharArr)
  }
  return resultArr.join("")
};

function part1(r, numRows) {
  return 2 * (numRows - r) - 1
}

function part2(r) {
  return 2 * r - 3
}

var s = "LEE", numRows = 5 // "LCIRETOESIIGEDHN"
console.log(convert(s, numRows));