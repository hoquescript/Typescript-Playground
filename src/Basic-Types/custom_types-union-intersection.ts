/*
    Custom Types
    - We can store complicated/compound types in a custom variable types so that we can easily define
*/
type Combinable = number | string;
type Status = "married" | "unmarried";
/*
    Union
    - Common Ven-Diagram
    - Or
    Intersection
    - Full Ven-Diagram
    - And
*/
let value: number | string;
value = 6;
value = "data";

interface hasPhone {
    name: string;
    no: number;
}

interface hasEmail {
    name: string;
    email: string;
}

const contact: hasEmail | hasPhone =
    Math.random() > 0.5
        ? {
              name: "Wahid",
              email: "wa",
          }
        : {
              name: "Wahid",
              no: 134,
          };

// When we are implementing Union, We will get the common must getting properties
// When we are implementing Intersection, We will get the all properties
contact.;
