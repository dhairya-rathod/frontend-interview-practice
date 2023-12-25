function swap(arr, inx1, inx2) {
  let temp = arr[inx1];
  arr[inx1] = arr[inx2];
  arr[inx2] = temp;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      swap(arr, i, min);
    }
  }
  return arr;
}

console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));
