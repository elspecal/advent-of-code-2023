import { getInput } from "../input";
import { grabNumbers, grapFirstAndLast } from "./utils";

const INPUT = getInput("src/day1/input.txt");

export const result = INPUT
  ? INPUT
      .split("\n")
      .map(grabNumbers)
      .map(grapFirstAndLast)
      .reduce((sum, line) => sum + parseInt(line), 0)
  : 0;
