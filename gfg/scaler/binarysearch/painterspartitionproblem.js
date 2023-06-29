function paint(painters, unitime, boards) {
    let low = Math.max(...boards) * unitime;
    console.log(low,"low")
    let high = 0;
    for (let i = 0; i < boards.length; i++) {
        high += boards[i] * unitime;
    }
    console.log(high,"low")
    let res = -1;
    while (low <= high) {
        console.log(low,'---',high)
        let mid = low + Math.floor((high - low) / 2);
        let count = noofpainters(boards, unitime, mid);
        console.log(count,"ppp",mid)
        let count1 = noofpainters(boards, unitime, mid - 1);
        if (count <= painters && (count1 == -1 || count1 > painters)) {
            return mid;
        }  //this avoids unnecessary left side calls

        if (count > painters) {
            low = mid + 1;
        } else {
            // res = mid;
            high = mid - 1;
        }
    }
    return res;

}

function noofpainters(boards, unittime, totaltime){
    let count = 1;  // 1 painter is atleast needed
    let time = 0;
    for (let i = 0; i < boards.length; i++) {
        if (boards[i] * unittime > totaltime) return -1;
        if (time + boards[i] * unittime <= totaltime) {
            time += boards[i] * unittime;
        } else {
            count++;
            time = boards[i] * unittime;
        }
    }
    return count;
}


// console.log(paint(4,10,[884,228,442,889]))
console.log(paint(3,10,[185,186,938,558,655,461,441,234,902,681]))



// [185,186,938,558,655,461,441,234,902,681]

//google