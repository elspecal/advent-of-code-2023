import { INPUT } from "./input";
import { grabNumbers, grapFirstAndLast } from "./utils";

export const result = INPUT
  ? INPUT
      .split("\n")
      .map(grabNumbers)
      .map(grapFirstAndLast)
      .reduce((sum, line) => sum + parseInt(line), 0)
  : 0;
