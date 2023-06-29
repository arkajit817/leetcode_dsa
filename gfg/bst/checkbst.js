isBST(root)
    {
        //your code here
        return this.util(root,Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER);
        
    }
    
    util(root,min,max){
        if(root ==null) return true;
        if(root.data< min || root.data > max){
            return false;
        }
        if(this.util(root.left,min,root.data -1) && this.util(root.right,root.data+1,max)){
            return true;
        } 
        return false;
    }