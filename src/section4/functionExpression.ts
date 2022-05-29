type Human = {
  height: number;
  weight: number;
};
const calcBMI = function (human: Human) {
  return human.weight / human.height ** 2;
};
const uhyo: Human = { height: 1.84, weight: 72 };
console.log(calcBMI(uhyo));

const calcBMI2 = function ({ height, weight }: Human) {
  return weight / height ** 2;
};
console.log(calcBMI2(uhyo));
