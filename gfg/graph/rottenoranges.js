var orangesRotting = function(grid) {
    let q = [];
    let one= 0;
    for(let i=0;i < grid.length;i++){
        for(let j=0;j < grid[i].length;j++){
            if(grid[i][j] == 2){
                q.push([0,[i,j]]);
            }
            if(grid[i][j] ==1){
                one++;
            }
        }
    }
    if(one ==0) return 0;
    let min = 0;
    while(q.length !=0){
        let p = q.shift();
        min = Math.max(min,p[0]);
        let x = p[1][0];
        let y = p[1][1];
        // console.log(x,y,"pp",q)
        if(x-1 >= 0 && grid[x-1][y] == 1){
            q.push([p[0]+1,[x-1,y]]);
            grid[x-1][y] = 2;
        }
        if(x+1< grid.length && grid[x+1][y] == 1){
            q.push([p[0]+1,[x+1,y]]);
            grid[x+1][y] = 2;
        }
        if(y-1 >=0 && grid[x][y-1] == 1){
            q.push([p[0]+1,[x,y-1]]);
            grid[x][y-1] = 2;
        }
        if(y +1< grid[0].length && grid[x][y+1] == 1){
            q.push([p[0]+1,[x,y+1]]);
            grid[x][y+1] = 2;
        }
    }
    console.log(min);
    one = 0;
     for(let i=0;i < grid.length;i++){
        for(let j=0;j < grid[i].length;j++){
            if(grid[i][j] ==1){
                one++;
            }
        }
    }
    if(one >0) return -1;
    return min;
};

// Flipkart Microsoft