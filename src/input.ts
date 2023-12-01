import { readFileSync } from "node:fs";

export function getInput(path: string): string | undefined {
    try {
        return readFileSync(path, "utf-8").toString().trim();
    } catch (error) {
        console.error("could not read input file at ", path, ", ", error);
    }
}
