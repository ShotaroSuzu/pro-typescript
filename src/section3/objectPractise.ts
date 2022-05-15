const kick = () => {
  const obj = {
    foo: 123,
    bar: "Hello, world!",
  };
  console.log(obj.foo);
  console.log(obj.bar);

  const name = "suzuki";

  const user = { name, age: 20 }; // 省略記法
  console.log(user);

  const propName = "calculated PropName";

  const stringLiteral = {
    foo: "normal foo",
    "foo bar": "string literal foo bar",
    1: "number literal 1",
    propName: `calculated prop name is ${propName}`,
  };
  console.log(stringLiteral);
  console.log(stringLiteral.foo);
  //   console.log(objectLiteral.foo bar)当然こういった書き方はできない
  console.log(stringLiteral["foo bar"]);
  //   console.log(stringLiteral.1) こういった書き方もできない
  console.log(stringLiteral[1]);
  console.log(stringLiteral.propName);
};
kick();
