class StringsAdder {
    constructor(fileReader, logger) {
        this.fileReader = fileReader;
        this.logger = logger;
    }

    formatLines() {
        const lines = this.fileReader.read();

        const formattedLines = lines.map(line => {
            if (!line.length) {
                return 0;
            }

            return this.sum(line);
        });

        return formattedLines;
    }

    sum(line) {
        const numbers = line.split(' ');

        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            sum += parseInt(numbers[i], 10);
        }

        if (isNaN(sum)) {
            this.logger.log(line);
        }

        return sum;
    }
}

export default StringsAdder;
