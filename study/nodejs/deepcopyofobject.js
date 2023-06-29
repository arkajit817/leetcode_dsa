
let obj = {
    "firstname": "arka",
    "lastname": "choudhury",
    "score": [10,20,30]
};

function deepcopy(obj){
    if(typeof(obj) !== 'object'){
        return obj;
    }
    let copy = Array.isArray(obj) ? [] : {};
    for(let key in obj){
        let value = obj[key];
        copy[key] = deepcopy(value);
    }
    return copy;
}

let copy = deepcopy(obj);
copy.score[0] = 100;

console.log(copy)