export const log = (input: string) => {
    console.log(input);
    return input;
};
export const grabNumbers = (input: string) => input.replace(/\D/g, "");
export const grapFirstAndLast = (input: string) =>
    input[0] ? input[0] + input[input.length - 1] : "";
