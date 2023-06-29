let longestUniqueSubsttr = function(str){
    //code here
    let i=0;let j=0;
    let obj ={};
    let count=0;
    let res=0;
    while(j < str.length){
        if(!obj.hasOwnProperty(str[j])){
            obj[str[j]] = 1;
            res = Math.max(res,j-i+1) //ex : qwerty 
        }else {
            console.log(j,"j",i,"i");
            console.log(obj);
           res = Math.max(res,j-i); //count upto j-i th element
           obj[str[j]]++;
            for(let k=i;k < j;k++){
                if(str[j]== str[k]){
                    i=k+1;
                    obj[str[j]]--;
                    break;
                } else {
                    delete obj[str[k]];
                }
            }
            console.log("trim",obj)
        }
        
        j++;
    }
    return res;
}
console.log(longestUniqueSubsttr('geeksforgeeks'))