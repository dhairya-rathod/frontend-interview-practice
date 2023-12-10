function linearSearch(list, length, key) {
  for (let index = 0; index < length; index++) {
    if (list[index] === key) return index;
  }
  return -1;
}

const list = [12, 22, 98, 43, 78, 39, 65, 37];
const length = list.length;
const key = 78;

linearSearch(list, length, key);
