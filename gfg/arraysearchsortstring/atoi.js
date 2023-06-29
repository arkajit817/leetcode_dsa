function atoi(s){
    //code here
    let i=0;
    let res = 0;
    let intmax = 2147483647;
    let intmin = -intmax -1;
    while(s[i]== ' '){
            i++;
    }
    if(i >= s.length) return -1;
    let sign = 1;
    if(s[i] == "+" || s[i] == "-"){
        sign = (s[i]=="+") ? 1: -1;
        i++;
    }
    if(i >= s.length) return -1;
    // while(s[i] >= 0 && s[i] <=9 ){
        for(let j=i;j < s.length;j++){
            // console.log(s[j],"kk")
        if(!(s[j] >='0' && s[j] <= '9')) {
            // console.log(s[j]>='0',"j")
            return -1
            
        };
        res = (res*10) + (s[i]-0);
        if(sign ==1 && res > intmax) return intmax;
        // if(sign ==-1 && res > intmin +1 ) return intmin;
        i++;
    }
    return res*sign;
}
console.log(atoi("493aaa"))