function lps(s){ 
    //code here
    let lps = [0];
    let n = s.length;
    let i=1;
    let len = 0;
    while(i < n){
        // console.log(i,"ll")
        if(s[i]== s[len]){
            len++;
            lps[i] = len; 
            i++;
        } else {
            if(len !==0){
                len = lps[len-1];
            } else {
                lps[i] =0;
                i++;
            }
        }
    }
    return lps[n-1];
}

console.log(lps("aaaa"));

// Accolite Amazon MakeMyTrip Microsoft
//imp