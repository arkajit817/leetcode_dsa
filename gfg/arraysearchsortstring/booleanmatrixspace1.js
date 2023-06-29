function boolean() {
    try {
        let mat = [[1, 0, 0, 1], [0, 0, 1, 0], [0, 0, 0, 0]];
        let c = mat[0].length;
        let r = mat.length;
        let row_flag = false;
        let col_flag = false;
        for (let i = 0;i < r; i++) {
            for (let j = 0; j < c; j++) {

                if (i == 0 && mat[i][j] == 1) {
                    row_flag = true;
                }
                if (j == 0 && mat[i][j] == 1) {
                    col_flag = true;
                }

                if (mat[i][j] == 1) {
                    mat[0][j] = 1;
                    mat[i][0] = 1;
                }
            }
        }


        for (let i = 1; i < r; i++) {
            for (let j = 1; j < c; j++) {
                if (mat[i][0] == 1 || mat[0][j] == 1) {
                    mat[i][j] = 1;
                }
            }
        }


        if (row_flag) {
            for (let i = 0; i < c; i++) {
                mat[0][i] = 1;
            }
        }
        if (col_flag) {
            for (let i = 0; i < r; i++) {
                mat[i][0] = 1;
            }
        }
        console.log(mat,"hjhjb")
        return mat;
    } catch (err) {
        console.log(err);
    }
}

console.log(boolean());