minDepth(root){
    //code here
    if(root ==null) return 0;
    if(root.left ==null && root.right ==null) return 1;
    if(root.left == null){
        return this.minDepth(root.right)+1;
    }
    if(root.right == null){
        return this.minDepth(root.left)+1;
    }
    return Math.min(this.minDepth(root.left),this.minDepth(root.right))+1;
}
