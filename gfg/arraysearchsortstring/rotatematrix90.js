
function diagonalSort(matrix){
    try {

   
    // console.log(matrix)

    for(let i=0;i < matrix.length;i++){
        let l = 0; let r = matrix[0].length-1;
        while(l < r){
            [matrix[i][l],matrix[i][r]] = [matrix[i][r],matrix[i][l]];
            l++;
        r--;
        }
    }
    for(let i=0; i < matrix.length;i++){
        for(let j =i;j < matrix[0].length;j++){
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]; 
        }
        
    }
    return matrix;
}
catch(err){
    console.log(err)
}
}
let matrix = 
[
[9,3, 2 , 1],
[1 ,5 ,2 ,1],
[2 ,2 ,4 ,1],
[3, 3, 3, 7]
];
console.log(diagonalSort(matrix))


//have another method try that also
//again
