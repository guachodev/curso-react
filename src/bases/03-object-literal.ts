interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
}

interface Address {
  postalCode: string;
  city: string;
}

const ironman: Person = {
  firstName: "Tony",
  lastName: "Stark",
  age: 45,
  address: {
    postalCode: "ABC123",
    city: "New York",
  },
};

const spiderman = structuredClone(ironman);

spiderman.firstName = "Peter";
spiderman.firstName = "Parker";
spiderman.age = 22;
spiderman.address.city = "San josé";

console.log(ironman, spiderman);
