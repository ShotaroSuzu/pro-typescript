const limit = 100;

for (let index = 1; index <= limit; index++) {
  index % 15
    ? index % 5
      ? index % 3
        ? console.log(index)
        : console.log("Fizz")
      : console.log("Buzz")
    : console.log("FizzBuzz");
}
