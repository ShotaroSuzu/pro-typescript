type Person = { name: string; age: number };
const getName = (p: Person): string => p.name;
const persons: Person[] = [
  { name: "suzuki", age: 12 },
  { name: "sato", age: 16 },
];
const names = persons.map(getName);
console.log(names);

console.log(persons.map((p) => p.name));
