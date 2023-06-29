let longestKSubstr= function(s, k){
    if(s.length ==0 || k ==0) return -1;
    let obj = {};
let res = 0;
let i = 0; let j = 0; let left = 0;
while (j < s.length) {
    if (!obj.hasOwnProperty(s[j])) {
        obj[s[j]] = 1;
    } else {
        obj[s[j]] = obj[s[j]]+1;
    }
    while (Object.keys(obj).length > k) {
        obj[s[i]] = obj[s[i]] - 1;
        if (obj[s[i]] == 0) {
            delete obj[s[i]];
        }
        i++;
    }

    if(Object.keys(obj).length  == k){res = Math.max(res, j - i + 1);}
    j++;

}
    if(res) return res;
    return -1;
    }

