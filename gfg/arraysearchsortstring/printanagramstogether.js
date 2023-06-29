let anagrams = function (n, string_list){
    // code here
    let obj = {};
    // let abc = "pua";
    // console.log(abc.sort)
    for(let i= 0; i < n;i++){
        let key = [...string_list[i]].sort().join("");
        // let key = ""
        // console.log(key,"oo")
        if(!obj.hasOwnProperty(key)){
            obj[key] = [];
            obj[key].push(string_list[i]);
        } else {
            obj[key].push(string_list[i]);
        }
    }
    let arr = [];
    // console.log(obj)
    for(let key in obj){
        arr.push(obj[key]);
    }
    return arr;
    // return ["a"]
}

// {act,god,cat,dog,tac}

// Amazon D-E-Shaw Goldman Sachs Morgan Stanley Snapdeal Microsoft