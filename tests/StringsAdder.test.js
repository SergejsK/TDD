import StringsAdder from '../js/StringsAdder';
import Logger from '../js/Logger';

let fileReader, logger, stringsAdder;
beforeEach(() => {
    fileReader = { read: jest.fn() };
    logger = { log: jest.fn() };

    stringsAdder = new StringsAdder(fileReader, logger);
});

test('we can sum numbers', () => {
    fileReader.read.mockReturnValue(['3 3 3']);
    expect(stringsAdder.formatLines()).toEqual([9]);
});

test('we get 0 if string is empty', () => {
    fileReader.read.mockReturnValue(['']);
    expect(stringsAdder.formatLines()).toEqual([0]);
});

test('we can sum empty strings and numbers', () => {
    fileReader.read.mockReturnValue(['222 1', '', '1 2 3']);
    expect(stringsAdder.formatLines()).toEqual([223, 0, 6]);
});

test('expect logger to be called', () => {
    fileReader.read.mockReturnValue(['dog']);
    stringsAdder.formatLines();
    expect(logger.log).toHaveBeenCalledWith('dog');
});

test('expect that logger can be called more than once', () => {
    fileReader.read.mockReturnValue(['lol', 'lol']);
    stringsAdder.formatLines();

    expect(logger.log.mock.calls.length).toBe(2);
});
