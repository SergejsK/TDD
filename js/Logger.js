import { writeFile } from 'fs';
import { join } from 'path';

class Logger {
    log(message) {
        writeFile(join(__dirname, '..', 'files', 'logs.txt'), message);
    }
}

export default Logger;
