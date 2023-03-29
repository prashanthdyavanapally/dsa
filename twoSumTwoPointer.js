var arr = [1, 2, 3, 5, 7, 9];
var k = 12;

var left = 0;
var right = arr.length - 1;

var sum;
function twoSum() {
  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === k) {
      return [arr[left], arr[right]];
    } else if (sum > k) {
      right--;
    } else {
      left++;
    }
  }
  return -1;
}
console.log(twoSum());
