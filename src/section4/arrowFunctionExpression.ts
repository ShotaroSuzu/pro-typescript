type HumanArrow = {
  height: number;
  weight: number;
};

const calcBMIArrow = ({ height, weight }: HumanArrow): number => {
  return weight / height ** 2;
};
