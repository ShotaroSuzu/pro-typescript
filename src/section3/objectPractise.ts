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
// objectType();

const objectInterface = () => {
  // 今はほぼ interfaceじゃないとだめな状況はないため、typeで宣言するのが一般的
  interface FooBarObj {
    foo: number;
    bar: string;
  }
  const obj: FooBarObj = {
    foo: 0,
    bar: "string",
  };
};

const objectIndexSignature = () => {
  type PriceData = {
    // インデックスシグネチャは型安全性を破壊するので、基本は使わない方がよい。使う場合は型安全性が破壊されていることに注意する。
    [key: string]: number;
  };
  const data: PriceData = {
    apple: 220,
    coffee: 120,
    // bento: "150",これはコンパイルエラー
  };
  console.log(data.apple);
  console.log(data.chicken);
  data.chicken = 230;
  console.log(data.chicken);
  //   data.bento ="130"これもコンパイルエラー
};
// objectIndexSignature();

const objectOptional = () => {
  type MyObj = {
    foo: boolean;
    bar: boolean;
    baz?: number;
  };
  const obj: MyObj = { foo: false, bar: true };
  const obj2: MyObj = { foo: true, bar: false, baz: 123 };
  console.log(obj);
  console.log(obj2);
  //   console.log(obj2.baz * 100)これはbazにundefinedが入る可能性があるためコンパイルエラーになる
  if (obj2.baz) {
    console.log(obj2.baz * 100); // undefinedが来ないことが確定であれば大丈夫
  }
};
// objectOptional();

const objectReaonly = () => {
  type MyObj = {
    readonly foo: number;
  };
  const obj: MyObj = { foo: 123 };
  // obj.foo = 0;これはコンパイルエラーになる。
};

const objectTypeOfKeyWord = () => {
  const num: number = 1;
  type T = typeof num;
  const foo: T = 123;

  const obj = {
    foo: 123,
    bar: "in",
  };
  type T2 = typeof obj;
  const obj2: T2 = {
    foo: -50,
    bar: "hello",
  };
  console.log(obj2);
};

const subTyping = () => {
  type FooBar = {
    foo: string;
    bar: number;
  };
  // FooBarBazはFooBarの構造的部分方である
  type FooBarBaz = {
    foo: string;
    bar: number;
    baz: boolean;
  };
  const obj: FooBarBaz = {
    foo: "hi",
    bar: 1,
    baz: false,
  };
  const obj2: FooBar = obj; // FooBarBaz型はFooBar型に含まれる
  console.log(obj);
  console.log(obj.foo, obj.bar, obj.baz);
  console.log(obj2);
  //   console.log(obj2.foo, obj2.bar, obj2.baz);  FooBar型のものは、プロパティにbazを持っていても、アクセスしようとするとコンパイルエラーになる
  console.log(obj2.foo, obj2.bar);

  //以下のように、各プロパティの名前とその型がさらに部分型だった場合も、部分型となる
  type Animal = {
    age: number;
  };
  type Human = {
    age: number;
    name: string;
  };
  type AnimalFamily = {
    familyName: string;
    mother: Animal;
    father: Animal;
    child: Animal;
  };
  type HumanFamily = {
    familyName: string;
    mother: Human;
    father: Human;
    child: Human;
  };
  const humanFamily1: HumanFamily = {
    familyName: "suzuki",
    mother: { age: 22, name: "hoge" },
    father: { age: 22, name: "piyo" },
    child: { age: 9, name: "fuga" },
  };
  const animalFamily1: AnimalFamily = humanFamily1;

  type User = { name: string; age: number };
  const u: User = {
    name: "hoge",
    age: 26,
    //   telNumber: "000-0000"これは余分なプロパティを持っているというコンパイルエラーになる(部分型的には問題ない(型安全)はずだが、プログラマのミスを防止するためにこういう挙動になっている)
  };
  const orig = {
    name: "hoge",
    age: 26,
    telNumber: "000-0000",
  };
  const u2: User = orig; //これはOK。余分なプロパティを持つというコンパイルエラーはオブジェクトリテラルを直接型注釈のある変数に入れた時のみ発生する
};
subTyping();
