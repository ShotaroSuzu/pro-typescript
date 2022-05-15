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

const objectLiteralPractice3 = () => {
  const obj1 = { bar: 456, baz: 789 };
  const obj2 = { foo: 123, obj1 };
  const obj3 = { foo: 123, ...obj1 };
  const obj4 = { ...obj3, foo: -999 };
  //   const obj4 = {foo:-999, ...obj3} これはコンパイルエラー。すでにobj3にfooが含まれているので。どのみち上書きされるものを宣言する意味がないため。
  const obj5 = { ...obj1, ...obj4 };
  console.log(obj1);
  console.log(obj2);
  console.log(obj3);
  console.log(obj4);
  console.log(obj5);
};
// objectLiteralPractice3();

const sameObject = () => {
  const foo = { num: 1234, nested: { str: "hello" } };
  const bar = foo;
  const baz = { ...foo };
  const qux = { ...foo, nested: { ...foo.nested } };
  console.log(bar.num, bar.nested.str);
  bar.num = 0;
  foo.nested.str = "goodbye";
  console.log(foo.num, foo.nested.str);
  console.log(baz.num, baz.nested.str);
  console.log(qux.num, qux.nested.str);

  const eq1 = { num: 1234 };
  const eq2 = eq1;
  const eq3 = { num: 1234 };
  console.log(eq1 === eq2);
  console.log(eq1 === eq3);
};
// sameObject();

const objectType = () => {
  const obj: { foo: number; bar: string } = {
    foo: 123,
    // bar: 123, bar は string なのでこれはコンパイルエラー
    bar: "Hello, world!",
    // baz: "another property" これを書くとコンパイルエラーになる。
  };
  console.log(obj);
  console.log(obj.bar);
  //   console.log(obj.baz);型にないプロパティにアクセスしようとするとコンパイルエラー
  obj.foo = 456;
  //   obj.foo = null; 型がnumberなのでnullはコンパイルエラー
  // 新たに型を作るというよりは、左辺にある型に右辺で指定した名前でもアクセスできるようにするという意味。
  type FooBarObj = { foo: number; bar: string };
  // 従って、以下のようにもかける
  type UserId = string;
  const obj2: FooBarObj = { foo: 456, bar: "Good bye!" };
  const obj3: { foo: number; bar: UserId } = { foo: 789, bar: "Good night!" }; // UserIdという型を使っているが、実態はstring型
};
objectType();
