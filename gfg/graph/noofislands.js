numIslands(grid)
    {
        // code here
        let count = 0;
        // console.log(grid,"jjj");
        for(let i=0;i < grid.length;++i){
            for(let j=0;j < grid[i].length;++j){
                if(grid[i][j] ==1){
                    this.mark(grid,i,j,grid.length,grid[i].length);
                    count++;
                }
            }
        }
        return count;
    }
    
    mark(grid,x,y,r,c){
        if(x< 0 || x>= r || y<0 || y>=c || grid[x][y] !=1){
            return false;
        }
        grid[x][y] = 2;
        let row = [-1, -1, -1, 0, 0, 1, 1, 1];
        let col = [-1, 0, 1, -1, 1, -1, 0, 1];
        for(let i=0;i< 8;++i){
            this.mark(grid,x+row[i],y+col[i],r,c);
        }
        
    }



    //https://leetcode.com/problems/number-of-islands/submissions/

    //gfg doesnt work

    //vvi //vvi
    //all companies asked
    // Amazon Citrix D-E-Shaw Informatica Intuit Linkedin Microsoft Ola Cabs One97 Opera OYO Rooms Paytm Samsung Snapdeal Streamoid Technologies Visa Google