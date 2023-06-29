function lookandsay(n)
    {
        // code here
        if(n==1){
            return "1";
        }
        if(n== 2) return "11"
        let res = lookandsay(n-1);
        let newres = "";
        let count = 1;
        // console.log(n,"ins",res)
        let i;
        for(i=1; i < res.length;++i){
            if(res[i] !== res[i-1] ){
                newres += count+res[i-1];
                count =1;
            }else {
                count++;
            }
            if(i == res.length-1){
                newres += count+res[i];
            }
        }
        // console.log(newres,count,"i",i,"new1")

       
        // console.log(newres,"new")
        return newres;
        
        
    }

console.log(lookandsay(5));