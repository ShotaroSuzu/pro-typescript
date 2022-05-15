const limit = 100;

for (let index = 1; index <= limit; index++) {
  if (index % 15 === 0) {
    console.log("FizzBuzz");
    continue;
  }
  if (index % 5 === 0) {
    console.log("Buzz");
    continue;
  }
  if (index % 3 === 0) {
    console.log("Fizz");
    continue;
  }
  console.log(index);
}
