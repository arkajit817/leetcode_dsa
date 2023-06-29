let arr  = [335 ,501, 170 ,725 ,479 ,359 ,963 ,465 ,706 ,146, 282, 828 ,962 ,492 ,996 ,943, 828 ,437 ,392 ,605 ,903 ,154 ,293 ,383, 422, 717 ,719 ,896, 448 ,727 ,772, 539 ,870 ,913 ,668 ,300 ,36 ,895 ,704 ,812 ,323, 334
];

let hasArrayTwoCandidates= function(arr,n,x){
    //code here
    let s = new Set();
    for(let i=0;i < n;i++){
        if(s.has(x-arr[i])){
            // s.add(arr[i]);
            return "YES";
        }else {
            s.add(arr[i]);
        }
    }
    return "NO";
    
}
console.log(arr.length)
console.log(hasArrayTwoCandidates(arr, arr.length,468));