/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let numValue = 0
    const symbols = {M:1000, D:500, C:100, L:50, X:10, V:5, I:1};
    
    for (let i=0; i<s.length; i++) {
        let a = s[i]
        let b = s[i+1]
        let x = symbols[a]
        let y = symbols[b]
        if (y > x) {
            numValue += y - x
            i++
        } else {
            numValue += x
        }
    }
    return numValue;
};