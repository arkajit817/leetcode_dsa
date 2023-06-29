height(node)
    {
        //your code here
        if(node == null) return 0;
        else {
            
        return 1+ Math.max(this.height(node.left), this.height(node.right));
        }
    }