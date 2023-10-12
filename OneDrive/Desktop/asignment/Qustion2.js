// Q2) Given an array of strings strs, group the anagrams together. You can return the answer in
// any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.
// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:
// Input: strs = [""]
// Output: [[""]]
// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]


function anagrams(arr) {
    let obj = {};

    for (let word of arr) {
        let key = word.split("").sort().join("");
        if (obj[key]) {
            obj[key].push(word);
        }
        else {
            obj[key] = [word];
        }
    }

    return Object.values(obj);
}
console.log(anagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))