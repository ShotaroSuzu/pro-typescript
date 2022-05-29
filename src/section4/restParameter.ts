const sum = (...args: number[]) => {
  return args.reduce((sum, elem) => {
    return sum + elem;
  }, 0);
};
console.log(sum(1, 10, 100));
console.log(sum());
const nums = [1, 2, 3, 4, 5];
console.log(sum(...nums));
// console.log(sum(nums)) これはNG

const multiSum = (base: number, ...rest: number[]): number => {
  return (
    base *
    (rest?.length != 0
      ? rest.reduce((sum, elem) => {
          return sum + elem;
        }, 0)
      : 1)
  );
};
console.log(multiSum(50, 2, 3));
// console.log(multiSum()) コンパイルエラーになる。
console.log(multiSum(50));
