constructor(){
    this.ind = 0;
    this.obj = {};
}


  buildTree(inorder,preorder,n){
      //code here
      for(let i=0;i < inorder.length;i++){
          this.obj[inorder[i]] = i;
      }
      let root = this.solve(inorder,preorder,0,n-1);
      return root;
  }
  
  solve(ino,pre,start,end){
      if(start > end) return null;
      let res = new Node(pre[this.ind++]);
      if(start== end) return res;
      let mid = this.obj[res.key];
      res.left = this.solve(ino,pre,start,mid-1);
      res.right = this.solve(ino,pre,mid+1,end);
      return res;
  }

  // Accolite Amazon Microsoft
  //vvi