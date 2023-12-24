// number hashing
function countFrequency(n, x, nums) {
  const hashArr = new Array(x + 1).fill(0);
  for (let i = 0; i < n; i++) {
    hashArr[nums[i]] = hashArr[nums[i]] + 1;
  }
  console.log("TCL ~ countFrequency ~ hashArr:", hashArr);
}

countFrequency(6, 9, [1, 3, 1, 9, 2, 7]);

// character hashing
function charCountFrequency(string) {
  const chars = [...string];
  const hashArr = new Array(257).fill(0);
  for (let i = 0; i < chars.length; i++) {
    const asciiVal = chars[i].charCodeAt(0);
    hashArr[asciiVal] = hashArr[asciiVal] + 1;
  }
  console.log("TCL ~ countFrequency ~ hashArr:", JSON.stringify(hashArr));
}

charCountFrequency("abcdabehfABCDDDDAAB");
