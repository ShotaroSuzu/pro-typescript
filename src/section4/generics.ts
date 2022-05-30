function repeat<T>(element: T, length: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
}
console.log(repeat<string>("a", 5));
// console.log(repeat<string>(1, 5)); // これはコンパイルエラーになる。
console.log(repeat("a", 5));
console.log(repeat<number>(1, 5));
console.log(repeat(1, 5));

const stringRepeat = <T extends { name: string }>(
  element: T,
  length: number
): T[] => {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(element);
  }
  return result;
};
console.log(stringRepeat<HasNameAndAge>({ name: "John", age: 12 }, 5));
// console.log(stringRepeat<string>("hoge", 5));これはコンパイルエラーになる。 string は{name: string}型の部分型ではないため。
