type User = {
  name: string;
  age: number;
  premiumUser: boolean;
};

const data: string = `
uhyo,26,1
Jhom Smith, 17, 0
Mary Sue,14,1
`;

const users: User[] = data
  .split("\n")
  .filter((line) => line !== "")
  .map((line) => {
    const [name, ageString, premiumUserString] = line.split(",");
    return {
      name,
      age: Number(ageString),
      premiumUser: Boolean(premiumUserString),
    };
  });

for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name} (${user.age}) はプレミアムユーザーです。`);
  } else {
    console.log(
      `${user.name} (${user.age}) はプレミアムユーザーではありません。`
    );
  }
}
