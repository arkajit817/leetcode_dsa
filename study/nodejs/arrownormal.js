// this.name = 'msd'
let obj = {
    name: "arka",
    gfg: ()=>{
        console.log(this.name);
    },
    gfg2(){
        console.log(this.name);
    }

}
obj.gfg();
obj.gfg2();