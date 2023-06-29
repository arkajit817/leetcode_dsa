calculateSpan(price, n)
    {
        // code here
        let res = Array(n).fill(0);
        let s = [];
        res[0] =1;
        s.push(0);
        for(let i=1;i < n;i++){
            while(s.length !=0 && price[i] > price[s[s.length-1]] ){
                s.pop();
            }
            if(s.length ==0) {
                res[i] =i+1;
            } else {
                res[i] = i- s[s.length-1];
            }
            s.push(i);
        }
        // console.log(res);
        return res;
    }


    // Accolite Samsung Amazon Microsoft