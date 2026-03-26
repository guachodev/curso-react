const characterNames = ["Goku", "Vegeta", "Trunks"];
const [, , trunks] = characterNames;

console.log({ trunks });

const returnArrayFn = () => {
  return ["ABC", 123] as const;
};

const [letters, numbers] = returnArrayFn();

console.log(letters, numbers + 100);

// Tarea:

const useState = (value: string) => {
  return [value, (newVAlue: string) => console.log(newVAlue)] as const;
};

const [name, setName] = useState("Goku");

console.log(name);
setName("Vegeta");
