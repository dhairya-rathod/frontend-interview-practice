/**
 * Minimum times A has to be repeated such that B is a substring of it

  Given two strings A and B. Find minimum number of times A has to be repeated such that B is a Substring of it. If B can never be a substring then return -1.

  Example Input:
  A = "abcd"
  B = "cdabcdab"
  Output: 3
  Explanation: Repeating A three times (“abcdabcdabcd”), B is a substring of it. B is not a substring of A when it is repeated less than 3 times.


  Examaple Input:
  A = "ab"
  B = "cab"
  Output : -1
  Explanation: No matter how many times we repeat A, we can't get a string such that B is a substring of it.
 */

function minRepeats(a, b) {
  // first need to check if char of a and b are similar
  
}

minRepeats("abcd", "cdabcdab");
