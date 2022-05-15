import { createInterface } from "readline";

const objectLiteralPractice1 = () => {
  const obj = {
    foo: 123,
    bar: "Hello, world!",
  };
  console.log(obj.foo);
  console.log(obj.bar);

  const name = "suzuki";

  const user = { name, age: 20 }; // 省略記法
  console.log(user);
};
//objectLiteralPractice1();

const objectLiteralPractice2 = () => {
  const propName = "calculated PropName";

  const objectLiteral = {
    foo: "normal foo",
    "foo bar": "string literal foo bar",
    1: "number literal 1", // "1": "number literal 1" と同じ意味
    propName: `calculated prop name is ${propName}`,
  };
  console.log(objectLiteral);
  console.log(objectLiteral.foo);
  //   console.log(objectLiteral.foo bar)当然こういった書き方はできない
  console.log(objectLiteral["foo bar"]);
  //   console.log(stringLiteral.1) こういった書き方もできない
  console.log(objectLiteral[1]);
  console.log(objectLiteral.propName);

  objectLiteral.foo = "modified foo";
  console.log(objectLiteral);

  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const messages = {
    good: "0以上の数値が入力されました",
    bad: "負の数値を入力しないでください",
  };
  rl.question("数値を入力してください:", (line) => {
    const num = Number(line);
    console.log(messages[num >= 0 ? "good" : "bad"]); // アクセスするプロパティを動的に決める場合は `obj['property name']` という形になる
    rl.close();
  });
};
//objectLiteralPractice2();
