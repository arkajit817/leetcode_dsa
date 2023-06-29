// https://leetcode.com/problems/maximum-subarray/

//leetcode 53


function maxSubArray(array) {
    let n = array.length;
    let res = Number.MIN_SAFE_INTEGER;
    let maxsofar = 0;
    for (let i = 0; i < n; i++) {
        maxsofar += array[i];
        res = Math.max(res, maxsofar);
        if (maxsofar < 0) maxsofar = 0;
    }
    return res;
}