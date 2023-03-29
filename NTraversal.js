let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let res = [];
let n = arr.length;

for (let i = n - 1; i >= 0; i--) {
  res.push(arr[i][0]);
}
for (let i = 1; i < n; i++) {
  res.push(arr[i][i]);
}
for (let i = n - 2; i >= 0; i--) {
  res.push(arr[i][n - 1]);
}
console.log(res);
