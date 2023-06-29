function celebrity(M, n)
{
    // code here
    let s = [];
    for(let i=0;i < n;i++){
        s.push(i);
    }
    while(s.length >1){
        let a = s.pop();
        let b = s.pop();
        if(knows(M,a,b)){
            s.push(b);
        } else {
            s.push(a);
        }
    }
    if(s.length ==0) return -1;
    let c = s.pop();
    for(let i=0;i < n;i++){
        if(i !=c && (knows(M,c,i) || !knows(M,i,c)) ){
            return -1;
        }
    } 
    // console.log(c,"c")
    return c;
    
}

function knows(M,a,b){
    return M[a][b]==1 ? true : false;
}

//another approach is two pointer algo 
// /. Amazon Fab.com Flipkart Google Microsoft One97 United Health Group Zoho
//vvi