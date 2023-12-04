import { INPUT } from "./input";

const LIMITS = {
    red: 12,
    green: 13,
    blue: 14,
};

type CubeSet = Partial<typeof LIMITS>;

function parseSet(set: string): CubeSet {
    return set
        .split(",")
        .reduce((set, cube) => {
            const [amount, color] = cube.trim().split(" ") as [string, keyof typeof LIMITS];
            set[color] = parseInt(amount);
            return set;
        }, {} as CubeSet);
}

function assembleMinSet(minSet: CubeSet, { blue: crntBlue, green: crntGreen, red: crntRed }: CubeSet) {
    const { blue: minBlue, green: minGreen, red: minRed } = minSet;

    if (crntBlue !== undefined && (minBlue === undefined || crntBlue > minBlue)) {
        minSet.blue = crntBlue;
    }
    if (crntGreen !== undefined && (minGreen === undefined || crntGreen > minGreen)) {
        minSet.green = crntGreen;
    }
    if (crntRed !== undefined && (minRed === undefined || crntRed > minRed)) {
        minSet.red = crntRed;
    }

    return minSet;
}

export const result = INPUT
    ? INPUT
        .split("\n")
        .map((line) => line.split(":")[1]!.trim())
        .map((setsStr) => setsStr
            .split(";")
            .map(parseSet)
            .reduce(assembleMinSet, {} as CubeSet)
        )
        .map((minSet) => Object.values(minSet).reduce((power, amount) => power * amount, 1))
        .reduce((sum, power) => sum + power, 0)
    : 0;