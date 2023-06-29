let firstpromise = new Promise((resolve, reject) => {
    resolve('first promise is done')
});
async function f() {

    let secondpromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("second promise is done!"), 0)
    });
    console.log("Start async")
    secondpromise.then(data => {
        console.log('thenning is first')
    })
    let result = await new Promise((res, rej) => {
        res('This happens before the await')
    })
    console.log(`result from await is ${result}`)
    secondpromise.then(data => {
        console.log('thenning a second time')
        console.log(`result passed to second then is ${data}`)
    })

    let foo = await secondpromise
    console.log("Done Async function");
}
console.log('in the middle of the script')
f();
firstpromise.then((message) => console.log(message))
console.log('outside of async function call')