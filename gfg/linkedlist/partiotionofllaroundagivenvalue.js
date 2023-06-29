partiotionofllaroundagivenvalue.partition(node , x)
{
    //your code here
    let smallstart = null; let smallend = null;
    let eqstart = null; let eqend = null;
    let largestart = null; let largeend = null;
    while(node  !=null){
        if(node.data == x){
            if(eqstart == null){
                eqstart = node;
                eqend = node;
            } else {
                eqend.next = node;
                eqend = eqend.next;
            }
        } else 
        if(node.data <x){
            if(smallstart == null){
                smallstart = node;
                smallend = node;
            } else {
                smallend.next = node;
                smallend = smallend.next;
            }
        }  else {
            if(largestart ==null){
                largestart = node;
                largeend = node;
            } else {
                largeend.next = node;
                largeend = largeend.next;
            }
        }
        node = node.next;
    }
    if(largeend !=null){
        largeend.next = null;
    }
    if(smallend ==null){
        if(eqend ==null){
            return largestart;
        }else {
            eqend.next = largestart;
            return eqstart;
        }
    }
    if(eqend == null){
        smallend.next = largestart;
        return smallstart;
    }
    smallend.next = eqstart;
    eqend.next = largestart;
    return smallstart;
    
    
    
    
}

// Partition a Linked List around a given value 