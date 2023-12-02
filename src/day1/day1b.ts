import { INPUT } from "./input";
import { grabNumbers, grapFirstAndLast } from "./utils";

const parseWrittenNumbers = (input: string) => {
    const numbers = {
        one: "o1e",
        two: "t2o",
        three: "t3e",
        four: "f4r",
        five: "f5e",
        six: "s6x",
        seven: "s7n",
        eight: "e8t",
        nine: "n9e",
    } as const;
    return Object.keys(numbers).reduce(
        (parsed, number) =>
            parsed.replaceAll(number, numbers[number as keyof typeof numbers]),
        input
    );
};

export const result = INPUT
    ? INPUT
            .split("\n")
            .map(parseWrittenNumbers)
            .map(grabNumbers)
            .map(grapFirstAndLast)
            .reduce((sum, line) => sum + parseInt(line), 0)
    : 0;
