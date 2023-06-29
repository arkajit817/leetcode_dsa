var diameterOfBinaryTree = function(root) {
    if(root ==null) return 0;
         let max = diam(root);
         // console.log(max,"ll");
         // return 0;
             return Math.max(max[0],max[1])-1;
 
     
 };
 
 var diam = function(root){
         if(root==null) return [0,0];
         
         let leftDepth = diam(root.left);
         let rightDepth = diam(root.right);
         return [Math.max(leftDepth[0],rightDepth[0])+1, Math.max(leftDepth[0]+rightDepth[0]+1,Math.max(leftDepth[1],rightDepth[1]))];
     }


     //line 16 refers to 
     //first elem of array is depth of the node, 2nd elem is the count of max. 
    //  so we are taking the max of left[0]+right[0]+1  & left max diam i.e
    //leftDepth[1] & rightDepth[1]