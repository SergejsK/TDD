import FileReader from '../js/FileReader';

test('can read from the file', () => {
    const fileReader = new FileReader("file.txt");
    expect(fileReader.read()).toEqual(['dog', '1 2 3', "", '55 55 44']);
});
