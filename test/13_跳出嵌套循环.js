for (let i = 0; i < 10; i++) {
  console.log(i + "================");
  for (let j = 10; j < 20; j++) {
    console.log(j);
    if (j == 15) {
      break;
    }
  }
}