/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    remove_space=s.trim()
    arr = remove_space.split(" ")
    len = arr.length -1
    return (arr[len].length);
};