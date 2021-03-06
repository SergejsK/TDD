import Logger from '../js/Logger';
import FileReader from '../js/FileReader';

const logger = new Logger();

test('Test logger creates a file and adds a string', () => {
    const string = 'some string';

    const fileReader = new FileReader('logs.txt');
    expect(fileReader.read()).toEqual([string]);
});
