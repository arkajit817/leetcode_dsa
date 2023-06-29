findPath= (m,n)=> {
    //code here
    let s = new Set();
    const dfs =  (i,j,str)=>{
        if(i <0 || j <0 || i >= n || j >= n || m[i][j] !== 1 ){
            return ;
        }
        if(i == n-1 && j == n-1){
            s.add(str);
        }
        m[i][j] = "@";
        dfs(i-1,j,str+"U");
        dfs(i+1,j,str+"D");
        dfs(i,j-1,str+"L");
        dfs(i,j+1,str+"R");
        m[i][j] =1;
        // return;
    }
    
    dfs(0,0,"");
    let res = [...s];
    res.sort();
    return res;
}

// Amazon Microsoft