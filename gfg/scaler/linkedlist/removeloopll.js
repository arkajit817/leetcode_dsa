//leetcode 142

var detectCycle = function (head) {

    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            slow = head;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            return slow;
        }
    }
    return null;
};

//remove loop
function solve(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            slow = head;
            while (slow.next != fast.next) {
                slow = slow.next;
                fast = fast.next;
            }
            fast.next = null;
        }
    }
    return head;
}


// Amazon
// MakeMyTrip
// Microsoft
// Morgan Stanley
// Oracle
// Samsung
// Snapdeal
// VMWare
// Walmart
