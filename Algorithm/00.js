var line = "1 2 3~4 5 6"

function readLine(line){
  var lines = line.split('~');
  console.log(lines[0]);
  console.log(lines[1]);
}