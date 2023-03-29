let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let res = [];
let n = arr.length;

for (let i = 0; i < n; i++) {
  res.push(arr[0][i]);
}

for (let i = 1; i < n; i++) {
  res.push(arr[i][n - 1 - i]);
}

for (let i = 1; i < n; i++) {
  res.push(arr[n - 1][i]);
}

console.log(res);
