import { INPUT } from "./input";

const LIMITS = {
    red: 12,
    green: 13,
    blue: 14,
};

function validateGame(game: string) {
    const [id, sets] = game.split(":");
    const idNum = parseInt(id!.replace(/\D/g, ""));
    const validation = sets!
        .split(";")
        .every((set) => set
            .split(",")
            .every((cube) => {
                const [amount, color] = cube.trim().split(" ") as [string, keyof typeof LIMITS];
                return LIMITS[color] >= parseInt(amount);
            })
        );

    return validation ? idNum : 0;
}

export const result = INPUT
    ? INPUT
        .split("\n")
        .map(validateGame)
        .reduce((sum, id) => sum + id, 0)
    : 0;