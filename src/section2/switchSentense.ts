import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });

rl.question("コマンドを入力してください:", (name) => {
  switch (name) {
    case "greet":
      console.log("こんにちは。");
      break;
    case "cat":
      console.log("あなたは猫はですか？");
      console.log("私は犬はです。");
      break;
    default:
      console.log(`コマンド「${name}」を認識できませんでした。`);
  }
  rl.close();
});
