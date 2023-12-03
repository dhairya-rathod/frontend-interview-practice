/**
 * Closest Strings
 * Given a list of words followed by two words, the task to find the minimum distance between the given two words in the list of word

  Example 1:
  Input:
  S = { "the", "quick", "brown", "fox", "quick"}
  word1 = "the"
  word2 = "fox"
  Output: 3
  Explanation: Minimum distance between the words "the" and "fox" is 3

  Example 2:
  Input:
  S = {"geeks", "for", "geeks", "contribute", "practice"}
  word1 = "geeks"
  word2 = "practice"
  Output: 2
  Explanation: Minimum distance between the words "geeks" and "practice" is 2
 */

/**
 * Function to find the shortest distance between two words.
 * @param {string[]} s
 * @param {string} word1
 * @param {string} word2
 * @returns {number}
 */

function shortestDistance(s, word1, word2) {
  //your code here
  const map = new Map();
  let minDist = Infinity;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === word1 || s[i] === word2) {
      map.set(s[i], i);
      if (map.has(word1) && map.has(word2)) {
        let dist = Math.abs(map.get(word1) - map.get(word2));
        if (dist < minDist) {
          minDist = dist;
        }
      }
    }
  }
  return minDist;
}

const outp = shortestDistance(
  ["vml", "uds", "aih", "du", "vml", "uds"],
  "vml",
  "uds"
);
console.log("TCL ~ out:", outp);
