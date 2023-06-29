reverseList : function(A, B){
    let curr = A;
    let prev = null;
    let next = null;
    let count = 0;
    while(count <B && curr){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        count++;
    }
    if(next){
        A.next = this.reverseList(next,B);
    }
    return prev;
}

// Accolite
// Adobe
// Amazon
// Hike
// MakeMyTrip
// Microsoft
// Paytm
// SAP Labs
// Snapdeal
// VMWare
