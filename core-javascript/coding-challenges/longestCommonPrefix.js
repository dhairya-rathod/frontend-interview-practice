/**
 Given an array of N strings, find the longest common prefix among all strings present in the array.
 */

function longestCommonPrefix(arr, n) {
  const minWordLength = arr.sort((a, b) => a.length - b.length)[0].length;
  let answer = "";

  for (let index = 0; index < minWordLength; index++) {
    const currentChar = arr[0][index];
    for (let word = 1; word < n; word++) {
      if (arr[word][index] !== currentChar) {
        return answer === "" ? -1 : answer;
      }
    }
    answer += currentChar;
  }

  return answer;
}

console.log(
  longestCommonPrefix(["geek", "geeks", "geezer", "geeksforgeeks"], 4)
);
