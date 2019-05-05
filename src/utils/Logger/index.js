import LoggerStrategy from './LoggerStrategy';

class Logger {
    constructor(strategy='toConsole'){
        this.logs = [];
        this.strategy = LoggerStrategy[strategy];
    }

    log(message){
        const timestamp = new Date().toISOString();
        this.logs.push({message, timestamp});
        this.strategy(timestamp, message);
    }

    changeStrategy(newStrategy) {
        this.strategy = LoggerStrategy[newStrategy];
    }
}

export default Logger;