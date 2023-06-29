function lps(s){ 
    //code here
    let n = s.length ;
    if(n < 2){
        return 0;
    }
    let len =0;
    let i= Math.max((n+1)/2);
    while(i < n){
        if(s[i] == s[len]){
            len++;
            i++;
        } else {
            len = 
        }
    }

}

console.log(lps("kkkk"));