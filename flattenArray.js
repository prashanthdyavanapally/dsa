let arr = [1, 2, 3, 4, 5, [6, [7, [8, [9, 10]]]]];

let res = [];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "object") {
    for (let j = 0; j < arr[i].length; j++) {
      res.push(arr[i][j]);
    }
  } else {
    res.push(arr[i]);
  }
}

console.log(res);
