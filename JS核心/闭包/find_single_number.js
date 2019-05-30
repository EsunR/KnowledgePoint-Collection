function getSingleNumber(numbers) {
  let result = '';
  numbers.some((current, index) => {
    let flag = false;
    for (let i in numbers) {
      if (numbers[i] == current && i != index) {
        flag = true;
      }
    }
    if (flag == false) {
      result = numbers[index];
      return true;
    }
  })
  return result;
}

console.log(getSingleNumber([1, 2, 1, 2, 1, 3]));