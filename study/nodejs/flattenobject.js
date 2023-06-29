let obj =
{
    "isbn": "123-456-222",
    "author":
    {
        "lastname": "Doe",
        "firstname": "Jane",
        "address": {
            "street": "3856 Pooz Street",
            "city": "South River",
            "state": "New Jersey",
            "counrty": "United State",
        }
    },
    "title": "The Ultimate Database Study Guide",
    "category": ["Non-Fiction", "Technology"]
};

let res = {};
let flatten = (obj)=> {
    for(const key in obj){
        if(typeof(obj[key]) == 'object'&& Array.isArray(obj[key]) == false){
            flatten(obj[key]);
        } else {
            res = {...res, [key] : obj[key]}
        }
    }
}

flatten(obj)
console.log(res);