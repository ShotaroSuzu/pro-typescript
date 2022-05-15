const limit = 100;

const result: string[] = [];

for (let index = 1; index <= limit; index++) {
  index % 15
    ? index % 5
      ? index % 3
        ? result.push(String(index))
        : result.push("Fizz")
      : result.push("Buzz")
    : result.push("FizzBuzz");
}

console.log(result.join(" "));
