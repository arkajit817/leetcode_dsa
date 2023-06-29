indexes(v, x)
{
    // code here
    let leftMost = 0; let rightMost = 0;
    let left = 0; let right = v.length;
    let p, k;
    while (left <= right) {

        let mid = Math.floor((right - left) / 2);
        if (v[mid] == x) {
            p = mid;
            k = mid;
            while (v[p] == v[p - 1]) {
                leftMost = p - 1;
                p--;
            }
            while (v[k] == v[k + 1]) {
                rightMost = k + 1;
                k++;
            }
            return [leftMost, rightMost];

        } else if (v[mid] > x) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return [-1, -1];


}

console.log(indexes([1, 3, 5, 5, 5, 5, 67, 123, 125], 5));