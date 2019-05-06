/*
一个花坛中有很多花和两个喷泉。

喷泉可以浇到以自己为中心，半径为r的圆内的所有范围的花。

现在给出这些花的坐标和两个喷泉的坐标，要求你安排两个喷泉浇花的半径r1和r2，
使得所有的花都能被浇到的同时, r12 + r22 的值最小。
*/

// 计算一朵花距离某个喷泉的距离，获取距离两个喷泉最远的花的距离，即为喷泉的半径


/**
 * 计算花与某一喷泉坐标点的距离
 * @param {Float32Array} x1 喷泉x轴的距离
 * @param {Float32Array} y1 喷泉y轴的距离
 * @param {Float32Array} x2 花x轴的距离
 * @param {Float32Array} y2 花y轴的距离
 */
function getDistance(x1, y1, x2, y2) {
  var x = Math.abs(x1 - x2);
  var y = Math.abs(y1 - y2);
  return Math.sqrt(x * x + y * y);
}



while (line = readline()) {
  var lines = line.split(" ");
  var info = lines[0].split(" ");
  var flowerNum = info[0];
  var x1 = info[1];
  var y1 = info[2];
  var x2 = info[3];
  var y2 = info[4];
  var maxR1 = 0;
  var maxR2 = 0;
  for (var i = 1; i < flowerNum; i++) {
    var flowerInfo = lines[i].split(" ");
    var flowerX = flowerInfo[0];
    var flowerY = flowerInfo[1];
    var r1 = getDistance(x1, y1, flowerX, flowerY);
    var r2 = getDistance(x2, y2, flowerX, flowerY);
    if (r1 > r2) {
      if (maxR1 < r1) {
        maxR1 = r1;
      }
    } else {
      if (maxR2 < r2) {
        maxR2 = r2;
      }
    }
  }
  print(maxR1 * maxR1 + maxR2 * maxR2);
}





























