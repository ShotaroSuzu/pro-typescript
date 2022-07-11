const repeatLength = 5;
const mappedResult: { label: number; value: any }[] = [];
const scope_repeat = function <T>(element: T, length: number): T[] {
  const repeatLength = 3; //より内側のスコープにある変数が優先される
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    const line = i; //ブロックスコープ。挙動はほぼ関数スコープと同じ。iはfor文の中のみという特殊なスコープ
    result.push(element);
    mappedResult.push({ label: line, value: element }); // 内側のスコープからは外側のスコープが見える
  }
  return result;
};
console.log(result); // 外側のスコープからは内側のスコープは見れない
