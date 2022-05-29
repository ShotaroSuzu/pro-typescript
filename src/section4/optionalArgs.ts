const toLowerOrUpper = (str: string, upper?: boolean): string => {
  return upper ? str.toUpperCase() : str.toLocaleLowerCase();
};
console.log(toLowerOrUpper("Hello"));
console.log(toLowerOrUpper("Hello", true));
console.log(toLowerOrUpper("Hello", false));

const toUpperOrLower = (str: string, upper: boolean = true): string => {
  return upper ? str.toUpperCase() : str.toLocaleLowerCase();
};
console.log(toUpperOrLower("Hello"));
