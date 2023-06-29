class Solution {
    constructor(){
        // this.visited ;
        this.res =[];
    }
    
    
    wordBoggle(board,dictionary){
        // console.log(dictionary,"dd")
        let r = board.length;
        let c = board[0].length;
        //code here
        let visited = Array(r).fill(Array(c).fill(0));
        console.log(visited);
        for(let i=0;i < r;i++){
            for(let j =0;j < c;j++){
                this.wordsutil(board,i,j,dictionary,[],visited)
            }
        }
        return this.res;
        
    }
    
    wordsutil(board,i,j,dictionary,strarr,visited){
        visited[i][j] = 1;
        strarr.push(board[i][j]);
        console.log(strarr.join(""),i,j);
        if(dictionary.includes(strarr.join(""))){
            this.res.push(strarray);
            // return true;
        }
        
        for(let row = i-1;row <=i+1 && row < board.length;row++){
            for(let col= j-1;col <= j +1 && col < board[0].length;col++){
                if(row >=0 && col >= 0 && !visited[row][col]){
                    console.log(row,col, visited[row][col]);
                    this.wordsutil(board,row,col,dictionary,strarr,visited);
                }
            }
        }
        strarr.pop();
        visited[i][j] = 0;
    }
}

// Amazon Directi Facebook Google MakeMyTrip Microsoft Nvidia Yahoo

//VVI 
//UNSOLVED