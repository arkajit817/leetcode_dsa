// diag = new Uint8Array(101);

function diagonalSort(matrix, m ,n){
    // code here
    // console.log(matrix);
    let x = matrix[0].length;
    let y = matrix.length;
    for(let i=2-y; i < x;i++){
        // let diagonal = [];
        let diagonal = new Uint8Array(x)
        let k=0;
        for(let j =0;j < y;j++){
            if(i+j >=0 && i +j <x){
                // console.log(matrix[j][i+j],"kk",i+j,j);
                diagonal[k++] = matrix[j][i+j];
            }
        }
        // console.log(diagonal,"di")
        diagonal.sort((a,b)=> a-b);
        k=0;
        for(let j =0;j < y;j++){
            if(i+j >=0 && i +j <x){
                matrix[j][i+j]= diagonal[k++];
            }
        }
    }
    // console.log(matrix)
    return matrix;
}
let matrix = 
[
[9,3, 2 , 1],
[1 ,5 ,2 ,1],
[2 ,2 ,4 ,1],
[3, 3, 3, 7]
];
console.log(diagonalSort(matrix,4,4))



//use uintArray 
// typedArray//