var largestRectangleArea = function(heights) {
    let hist = heights;
    let n = heights.length;
    let l = Array(n).fill(0);
        let r = Array(n).fill(0);
        let s = [];
        for(let i=0;i < n;i++){
            if(s.length ==0) {l[i] =0; s.push(i);}
            else{ while(s.length !=0 && hist[i]<= hist[s[s.length-1]]){
                s.pop();
            }
            l[i] = s.length ==0? 0 : s[s.length-1]+1;
            s.push(i);
            }
        }
        s = [];
        
        for(let i=n-1;i >=0;i--){
            if(s.length ==0){ r[i] = n-1; s.push(i);}
            else {while(s.length !=0 &&  hist[i] <= hist[s[s.length-1]]){
                s.pop();
            }
            r[i] = s.length ==0? n-1: s[s.length-1] -1;
            s.push(i);
            }
        }
        
        console.log(l,r);
        let max = 0;
        for(let i=0;i < n;i++){
            // console.log(r[i], l[i], hist[i].split("")[0],"ll")
            let mult = ((r[i]- l[i]+1)*(hist[i]));
            max = Math.max(max, mult );
        }
        return max;
};

//leetcode
//vvi
// Microsoft Google

//https://www.geeksforgeeks.org/largest-rectangle-under-histogram/  --> another efficient approach
