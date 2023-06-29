async.series([
    (cb) => {
        setTimeout(() => {
            console.log("1");
            cb(null, 1);
        }, 50),

            (cb) => {
                console.log("2");
                cb(null,2);
            }
    }
], (err, res) => {
    console.log("poopp")
})