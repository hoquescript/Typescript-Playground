/*
    Literal Types
    - We can store hardcore value direct into the types
    - It will accept only those harcodded values we defined during type assignment
    - When we store something on const types it gets literal types of value
*/
const number1 = 23;

function life(status: Status) {
    console.log("I am " + status);
}
life("married");
// life('divorced'); Error

// In case of Object and Array/ Referencial Data Types with initialization, let variable also behaves like literal types
// We cant assign a new property to a literal types.
// As it has been infered by VS. We should implement interface for that or Optioanl Chaining

let abs: { name: string; gun?: string } = {
    name: "hello",
};

a.gun = "data";

interface got {
    age: string;
    extra?: number; //Making this property flexible. We can skip or include this property
}

const jest: got = {
    age: "Arya",
};

//Fixed Array of Number Types
let hen = [6];
