isSubTree(t, s)
    {
        //your code here
        if(s == null) return 1;
        if(t== null) return 0;
        if(this.isIdentical(t,s)){
            return 1;
        } else {
            return (this.isSubTree(t.left ,s) || this.isSubTree(t.right,s));
        }
    }
    
     isIdentical(root1, root2)
    {
        if(root1 ==null && root2 ==null) return true;
        if(root1 ==null || root2 ==null) return false;
        if(root1.data == root2.data && this.isIdentical(root1.left,root2.left) && this.isIdentical(root1.right,root2.right)){
            return true;
        } else {
            return false;
        }
    }