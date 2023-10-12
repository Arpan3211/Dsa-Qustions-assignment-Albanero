// Q3) Given a string s and a array of strings wordArray, return true if s can be segmented into a
// space-separated sequence of one or more array words.
// Note that the same word in the array may be reused multiple times in the segmentation.
// Example 1:
// Input: s = "leetcode", wordArray = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:
// Input: s = "applepenapple", wordArray = ["apple","pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
// Note that you are allowed to reuse a dictionary word.
// Example 3:
// Input: s = "catsandog", wordArray = ["cats","dog","sand","and","cat"]
// Output: false


function wordBraker(s, wordArray) {
    let result = [];
    let n = s.length;
    result[0] = true;

    for (let i = 1; i <= n; i++) {
        result[i] = false;
        for (let j = 0; j < i; j++) {
            if (result[j] && wordArray.includes(s.substring(j, i))) {
                result[i] = true;
                break;
            }
        }
    }
    return result[n];
}

console.log(wordBraker("catsandog", ["cats", "dog", "sand", "and", "cat"]))