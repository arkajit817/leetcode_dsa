class Solution {
    constructor(){
        this.is = true;
    }
    //Function to check whether a binary tree is balanced or not.
    isBalanced(root)
    {
        //your code here
        this.height(root);
        if(this.is) return 1;
        return 0;
        
    }
    
    height(root){
        if(root ==null) return 0;
        let l = this.height(root.left);
        let r = this.height(root.right);
        if(Math.abs(l-r)>1){
            this.is = false;
        }
        return Math.max(l,r)+1;
    }
}