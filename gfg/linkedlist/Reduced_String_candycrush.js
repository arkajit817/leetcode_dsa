function Reduced_String(k,s){ 
        //code here
        let arr = [];
        for(let i=0;i < s.length;i++)
        {
            if(arr.length ==0) {
                arr.push([s[i],1]);
                if(arr[arr.length-1][1] == k) arr.pop();
                continue;
            }
            if(s[i] == arr[arr.length-1][0]){
                arr[arr.length-1][1]++;
                if(arr[arr.length-1][1] == k){
                    arr.pop();
                }
                
            } else {
                arr.push([s[i],1]);
            }
            
        }
        
        return arr.reduce((acc,v)=>{
            for(let i=0;i < v[1];i++){
                acc += v[0];
            }
            return acc;
        },"");
        // console.log("arr",arr);
        // return str;
    }