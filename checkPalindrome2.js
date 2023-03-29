let str = "abccbda";
//check the given str is a palidrome or not by rearranging the elements of str

let obj = {};

for (let a of str) {
  if (obj[a] === undefined) {
    obj[a] = 1;
  } else {
    obj[a]++;
  }
}
let count = 0;

for (let a in obj) {
  if (obj[a] % 2 === 1) {
    count++;
  }
}
count > 1 ? console.log("No") : console.log("Yes");
