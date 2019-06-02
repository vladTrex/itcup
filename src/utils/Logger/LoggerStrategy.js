import {appendFile} from 'fs';
import path from 'path';

class LoggerStrategy {

    static toFile(timestamp, message) {
        const fileName = path.join(__dirname, './logs.txt');
        appendFile(fileName, `${timestamp} - ${message} \n`, error => {
            if (error) {
                console.log('Error writing to file');
                console.error(error);
            }
        });
    }

    static toConsole(timestamp, message){
        console.log(`${timestamp} - ${message}`);
    }
}

export default LoggerStrategy;