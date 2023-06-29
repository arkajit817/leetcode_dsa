class Solution 
{
    
    constructor(){
        this.s = [
            "0" ,"1", "abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"
        ];
        this.res = [];
        
    }
    //Function to find list of all words possible by pressing given numbers.
    possibleWords(a, N)
    {
        //your code here
        this.possiblewordsUtil(a,0,N,[]);
        // console.log(this.res,"res");
        return this.res;
        
    }
    
    
    possiblewordsUtil(a,curr,n,strarray){
        if(curr ==n) {
            this.res.push(strarray.join(""));
            return;
        }
        
    
        let currletters = this.s[a[curr]];
        if(currletters == 0 || currletters ==1) return;
        // console.log(currletters);
        for(let i=0;i < currletters.length;i++){
            strarray.push(currletters[i]);
            this.possiblewordsUtil(a,curr+1,n,strarray);
            strarray.pop();
        }
    }
}


// Amazon Flipkart Microsoft