removeLoop(head)
{
    //your code here
    let slow = head;
    let fast = head;
    slow = head.next;
    fast = head.next.next;
    while(fast !==null && fast.next !=null){
        if(slow == fast){
            break;
        }
        slow = slow.next;
        fast= fast.next.next;
       
    }
    // console.log("pp")
    if(slow == fast){
        // console.log(slow.data,"slow")
        slow = head;
        if(slow != fast){
            // console.log("iii")
        while(slow.next !== fast.next){
            slow= slow.next;
            fast = fast.next;
        }
        fast.next = null;
        } 
        else {
            // console.log("pp")
            while(fast.next !==slow){
                fast = fast.next;
            }
            fast.next = null;
            return head;
        }
    } else {
        return 0;
    }
   
    
}