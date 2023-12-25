function insertionSort(arr) {
  let nArr = [...arr];
  for (let i = 1; i < nArr.length; i++) {
    let key = nArr[i];
    let j = i - 1;
    while (j >= 0 && nArr[j] > key) {
      nArr[j + 1] = nArr[j];
      j--;
    }
    nArr[j + 1] = key;
  }
  return nArr;
}

console.log(insertionSort([0, 2, 34, 22, 10, 19, 17]));
