//leetcode 34
//amazon


var searchRange = function(nums, target) {
    let l = 0;
		let r = nums.length -1 ;
		let left = -1;
		let right = -1;
		while(l <= r){
			let mid = l + Math.floor((r-l)/2);
			if(nums[mid] == target){
				let i = mid;
				while(nums[i] == target){
					left = i;
					i--;
				}
				i = mid;
				while(nums[i] == target){
					right = i;
					i++;
				}
			}
			if(nums[mid]< target){
				l = mid +1;
			} else {
				r = mid -1;
			}
		}
		if(left!= -1 && right != -1){
			return [left,right];
		}
		return [-1,-1];
	
};