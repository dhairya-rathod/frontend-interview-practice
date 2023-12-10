function binarySearch(list, key) {
  let p1 = 0;
  let p2 = list.length - 1;
  let mid;

  while (p1 <= p2) {
    mid = p1 + Math.floor((p2 - p1) / 2);

    if (list[mid] === key) return mid;

    if (list[mid] > key) p2 = mid - 1;
    else p1 = mid + 1;
  }

  return -1;
}

const list = [2, 3, 4, 10, 40];
const key = 2;
const result = binarySearch(list, key);
console.log("TCL ~ result:", result);
