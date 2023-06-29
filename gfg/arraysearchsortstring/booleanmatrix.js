
function boolean(matr) {
    let mat = [[1, 0, 0, 1], [0, 0, 1, 0], [0, 0, 0, 0]];
    let c = mat[0].length;
    let r = mat.length;
    let row = Array(r).fill(0);
    let col = Array(c).fill(0);
    for(let i =0;i <r;i++){
        for(let j=0;j< c;j++){
            if(mat[i][j] ==1){
                row[i]= 1;
                col[j] =1;
            }
        }
    }

    for(let i=0;i < r;i++){
        for(let j=0;j < c;j++){
            if(row[i] ==1 || col[j]==1){
              mat[i][j] = 1;  
            }
        }
    }
    return mat;
}

console.log(boolean());