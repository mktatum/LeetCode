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

// len = arr.length -1 gets the index of the last element in the array 
// because array indices start from 0. Since the last element's index 
// is one less than the length of the array, arr.length - 1 
// gives you that index.