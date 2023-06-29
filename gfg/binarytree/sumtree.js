isSumTree(root){
    //code here
    if(root ==null || root.left ==null || root.right == null) return 1;
    let ls = this.sum(root.left);
    let rs = this.sum(root.right);
    let total = ls +rs;
    if(total == root.key &&  this.isSumTree(root.left) && this.isSumTree(root.right)){
        return 1;
    } else {
        return 0;
    }
}

sum(root){
    if(root ==null) return 0;
    return (this.sum(root.left)+ root.key+ this.sum(root.right));
}


//o(n^2) for worst case . worst case occurs for skewed tree
//A skewed binary tree is a type of binary tree in which all the nodes have only either one child or no child. 

// Adobe Amazon D-E-Shaw Goldman Sachs Microsoft

//vvi