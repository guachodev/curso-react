const person = {
  name: "Tony",
  age: 45,
  key: "Iroman",
};

const { name, age, key } = person;

console.log({ name, age, key });

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

const useContext = ({ key, age, name, rank = "Sin rango" }: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age,
    },
    rank,
  };
};

const { keyName, rank, user } = useContext(person);
const { name: userName } = user;
console.log({ keyName, rank, userName });
