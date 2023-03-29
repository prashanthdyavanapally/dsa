let arr = [1, 2, 2, 3, 4, 5, 5, 5, 6, 6, 7, 2, 3, 4, 5, 2, 2, 2];

let obj = {};

for (let i of arr) {
  if (obj[i] === undefined) {
    obj[i] = 1;
  } else {
    obj[i]++;
  }
}
let max = 0;
let key;
for (let i in obj) {
  if (obj[i] > max) {
    max = obj[i];
    key = i;
  }
}

console.log(obj);
console.log(max);
console.log(key);
