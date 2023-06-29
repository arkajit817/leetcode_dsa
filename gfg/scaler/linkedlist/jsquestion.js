// let username = async ()=> {return "arka"};
// console.log(username)
//  username().then(console.log); //vvi





const a = {x : 1};
const b = { ...a};
const c = {};

const d = a;
Object.assign(c,a);
a.x = 2;

console.log(a.x);
console.log(b.x);
console.log(c.x);
console.log(d.x);

