function swap(arr, inx1, inx2) {
  let temp = arr[inx1];
  arr[inx1] = arr[inx2];
  arr[inx2] = temp;
}

function bubbleSort(arr) {
  var nArr = [...arr];
  for (let i = 0; i < nArr.length; i++) {
    for (let j = 0; j < nArr.length - 1; j++) {
      if (nArr[j] > nArr[j + 1]) {
        swap(nArr, j, j + 1);
      }
    }
  }
  return nArr;
}

console.log(bubbleSort([0, 2, 34, 22, 10, 19, 17]));
