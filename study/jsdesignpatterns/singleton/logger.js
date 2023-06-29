class Logger {
    constructor() {
        if (Logger.instance == null) {
            this.logs = [];
            Logger.instance = this;
        }
        return Logger.instance;
    }
    log(message) {
        this.logs.push(message);
        console.log(message);
    }
    printLogCount(){
        console.log(this.logs.length);
    }
}

const logger = new Logger();
Object.freeze(logger);
return logger;

