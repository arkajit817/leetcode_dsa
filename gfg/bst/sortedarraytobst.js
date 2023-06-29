var sortedArrayToBST = function(nums) {
    if(nums.length ==0) return null;
  		return makebst(nums,0,nums.length-1);
};

function	makebst(array,left,right){
  	    if(left > right) return null;
  	    let mid = left + Math.floor((right-left)/2);
  	    let node = new TreeNode(array[mid]);
  	    node.left = makebst(array,left,mid-1);
  	    node.right = makebst(array,mid+1, right);
  	    return node;
  	}

    //   Adobe Amazon Cisco Snapdeal VMWare Microsoft