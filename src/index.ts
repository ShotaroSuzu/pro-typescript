const greeting = "Hello, ", //カンマ区切りで宣言はできるが、あまり好まれない。(変数の増減時にやりづらい)
  text = greeting + "world!";

console.log(text);

const あいう = 123; // 日本語も使える. 変数は数字先頭はNG. Typescript界隈では、変数名は小文字始まりで、型名は大文字始まりが多い
const 鈴木 = あいう + 876;
console.log(鈴木);
