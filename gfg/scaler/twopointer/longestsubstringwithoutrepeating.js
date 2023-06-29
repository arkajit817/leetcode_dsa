let str = "abcabcbb";


function longest(str){
    let i =0;
    let j = 0;
    let max = 0;
    let set = new Set();
    while(j < str.length){
        if(set.has(str[j])){
            while(set.has(str[j])){
                // if(str[i] == str[j]){
                    set.delete(str[i]);
                // }
                i++;
            }

        }
        // console.log(i, "---",j)
        max = Math.max(max, j-i+1);
        set.add(str[j]);
        j++;
    }
    return max ;
}

console.log(longest(str));