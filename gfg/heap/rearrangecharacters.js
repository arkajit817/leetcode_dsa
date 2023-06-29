function rearrangeString(str){
    //code here
    let obj = {};
    let max = 0;
    for(let i=0; i < str.length;i++){
        obj[str[i]] = obj[str[i]] ? obj[str[i]]+1 : 1;
        if(obj[str[i]] > max){
            max = obj[str[i]];
        }
    }
    // console.log(max,obj,"oo")
    if(max <= str.length - max +1){
        return 1;
    } 
    return 0;
}
heap
// Amazon Microsoft