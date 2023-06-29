addTwoLists(first, second)
    {
        //your code here
        let prev = null;
        let temp = null;
        let carry =0;
        let res = null;
        let rem =0;
        let length1 =0;
        let length2 =0;
        let diff =0;
        
        while(first !=null || second !=null){
            let sum =0;
            // console.log(first,"ll")
            sum = carry + (first !=null ? first.data : 0) + (second !=null ? second.data : 0) ;
            carry = sum >=10 ? 1 : 0;;
            rem = sum%10;
            temp = new Node(rem);
            if(res == null){
                res = temp;
            } else {
                prev.next = temp;
            }
            prev = temp;
            if(first !=null){
                first = first.next;
            }
            if(second !=null){
                second = second.next;
            }
        }
        if(carry >0) {
            temp.next = new Node(carry);
        }
        return res;
    }