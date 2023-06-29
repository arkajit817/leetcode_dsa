
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 var minWindow = function(s, t) {
    {
        if(s.length< t.length || s.length ==0){
            return "";
        }
        if(s.length ==1 && t.length ==1 && s[0] !== t[0]){
            return ""
        }
           let obj = {};
    for (let i = 0; i < t.length; i++) {
        if (obj[t[i]]) {
            obj[t[i]] = obj[t[i]] + 1;
        } else {
            obj[t[i]] = 1;
        }
    }
    console.log(obj);
    let i = 0; let j = 0;
    let left = 0;
    let ans = 0;
    let count = Object.keys(obj).length;
    let found = false;
    while (j < s.length) {
        let char = s[j];
        if (obj.hasOwnProperty(char)) {
            obj[s[j]] = obj[s[j]] - 1;
            if (obj[s[j]] == 0) count--;
        }
        // j++;
        if (count == 0) {
            while (count == 0) {
                if(!ans || ans > j-i+1 ){
                    ans =j-i+1;
                    left =i;
                    found = true
                }

                let char1 = s[i];
                if (obj.hasOwnProperty(char1)) {
                    obj[s[i]] = obj[s[i]] + 1;
                    if (obj[s[i]] > 0) count++;
                }
                i++;
            }
        }
        j++;
    }

    return s.substring(left,left+ans);
 
}
};
minWindow();

// Amazon Google MakeMyTrip Streamoid Technologies Microsoft Media.net