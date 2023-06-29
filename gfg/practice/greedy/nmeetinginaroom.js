maxMeetings(start, end, n)
{
    // code here
    let allmeet = [];
    for(let i=0;i < n;i++){
        allmeet.push([start[i],end[i]]);
    }
    
    allmeet.sort((a,b)=> a[1]-b[1]);
    let count =1;
    // console.log(allmeet)
    let endtime = allmeet[0][1];
    for(let i=1;i < n;i++){
        // console.log(allmeet[i]);
        if(allmeet[i][0]> endtime){
            count++;
            endtime = allmeet[i][1];
        }
    }
    // if(allmeet[n-2] && allmeet[n-1][0]> allmeet[n-2][0]) count++;
    return count;
}