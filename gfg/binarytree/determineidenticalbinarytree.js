isIdentical(root1, root2)
{
    //your code here
    if(root1 == null && root2 == null){
        return 1;
    }
    if(root1 != null && root2 !=null){
        if(root1.data == root2.data && this.isIdentical(root1.left,root2.left) && this.isIdentical(root1.right,root2.right)){
            return 1;
    } 
    }else {
        return 0;
    }
}