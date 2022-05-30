type HasName = {
  name: string;
};
type HasNameAndAge = {
  name: string;
  age: number;
};
const fromAge = (age: number): HasNameAndAge => ({ name: "John Smith", age });

const f: (age: number) => HasName = fromAge; // つまり、(age: number) => HasNameAndAge は (age: number) => HasName の部分型
const subTypeObj: HasName = f(100);
console.log(subTypeObj);
const g: (age: number) => void = f; // voidが返値の関数は、すべての返値のありの関数の部分型である

const showName = (obj: HasName) => {
  console.log(obj.name);
};

const showNameSub: (obj: HasNameAndAge) => void = showName; // つまり、(obj: HasName) => void は (obj: HasNameAndAge) => void の部分型

showNameSub({ name: "Jhon", age: 12 });

type UnaryFunc = (arg: number) => number;
type BinaryFunc = (left: number, right: number) => number;

const double: UnaryFunc = (arg) => arg * 2;
const add: BinaryFunc = (left, right) => left + right;

const bin: BinaryFunc = double;
console.log(bin(10, 100));
