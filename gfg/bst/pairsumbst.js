var findTarget = function (root, k) {
    let target = k;
    let s1 = []; let s2 = [];
    let curr1 = root; let curr2 = root;
    let done1 = false; let done2 = false;
    let val1 = 0; let val2 = 0;
    while (true) {
        while (done1 == false) {
            if (curr1 != null) {
                s1.push(curr1);
                curr1 = curr1.left;
            } else {
                if (s1.length == 0) {
                    done1 = true;
                }
                else {
                    curr1 = s1.pop();
                    val1 = curr1.val;
                    curr1 = curr1.right;
                    done1 = true;
                }
            }
        }
        while (done2 == false) {
            if (curr2 != null) {
                s2.push(curr2);
                curr2 = curr2.right;
            } else {
                if (s2.length == 0) {
                    done2 = true;
                }
                else {
                    curr2 = s2.pop();
                    val2 = curr2.val;
                    curr2 = curr2.left;
                    done2 = true;
                }
            }
        }

        if (val1 != val2 && val1 + val2 == target) {
            return true;
        } else if (val1 + val2 < target) {
            done1 = false;
        } else if (val1 + val2 > target) {
            done2 = false;
        } if (val1 >= val2) {
            return false;
        }

    }

};


// Amazon OYO Rooms Snapdeal VMWare Microsoft