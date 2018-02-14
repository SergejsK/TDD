import { readFileSync } from 'fs';
import { join } from 'path';

class FileReader {
    constructor(filename) {
        this.filename = filename;
    }

    read() {
        return readFileSync(join(__dirname, '..', 'files', this.filename), 'utf8').trim().split('\n');
    }
}

export default FileReader;
