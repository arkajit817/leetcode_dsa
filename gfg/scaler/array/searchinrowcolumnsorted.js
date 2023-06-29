function solve(matrix, B) {
    solve: function (matrix, B) {
        let m = matrix[0].length;
        let n = matrix.length;
        let i = 0;
        let j = m - 1;
        let found = false;
        let resi = 0;
        let resj = 0;
        while (i < n && j >= 0) {
            // console.log(i , "--",j)
            if (matrix[i][j] == B) {
                while (matrix[i][j - 1] == B) {
                    j--;
                }
                return (i + 1) * 1009 + j + 1;
            };
            if (matrix[i][j] > B) j--;
            if (matrix[i][j] < B) i++;
        }
        if (found) {
            return (resi + 1) * 1009 + resj + 1;
        }
        return -1;
    }
}

let matrix = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];

console.log(solve(matrix, 2))