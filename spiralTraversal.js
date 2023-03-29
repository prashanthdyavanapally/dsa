let arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ];
  
  let row = arr.length; // 3
  let col = arr[0].length; // 4
  let top = 0;
  let bottom = row - 1;
  let left = 0;
  let right = col - 1;
  
  let totalElements = row * col;
  let res = [];
  let count = res.length;
  
  while (count < totalElements) {
    for (let i = top; i <= bottom && count < totalElements; i++) {
      res.push(arr[i][left]);
    }
    left++;
    for (let i = left; i <= right && count < totalElements; i++) {
      res.push(arr[bottom][i]);
    }
    bottom--;
    for (let i = bottom; i >= top && count < totalElements; i--) {
      res.push(arr[i][right]);
    }
    right--;
  
    for (let i = right; i >= left && count < totalElements; i--) {
      res.push(arr[top][i]);
    }
    top++;
  }
  
  console.log(res);
  
