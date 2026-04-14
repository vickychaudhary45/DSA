// given a string s and  an array of strings words, return the number of strings in words that is a subsequence of s

// A sequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters.
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

class subsequesnceOfString {
  numberOfMatchingSubstrings(s, arr) {
    let count = 0;
    let newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    console.log(s.length, "s.length");

    for (let i = 0; i < s.length; i++) {
      // console.log(i);
      console.log(s[i], i);
      newArr[i] = s[i];

      if (s[i] === arr[i]) {
        count++;
      } else if (arr[i]) {
        // console.log("ernj");
      }
      console.log(newArr, "newArr");
    }
    return count;
  }
}

const s = "ace";
const arr = ["ace", "a", "abe", "ae"];

console.log(new subsequesnceOfString().numberOfMatchingSubstrings(s, arr));
