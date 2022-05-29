console.log(range(5, 10));
function range(min: number, max: number): number[] {
  const result = [];
  for (let i = 0; i <= max; i++) {
    result.push(i);
  }
  return result;
}

function helloWorldNTimes(n: number): void {
  if (n > 100) {
    console.log(`${n} 回なんて無理です！！`);
    return;
  }
  for (let i = 0; i < n; i++) {
    console.log("Hello world");
  }
}
helloWorldNTimes(3);
helloWorldNTimes(300);
