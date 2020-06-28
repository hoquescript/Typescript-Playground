import { type } from "os";

/*
    Void
    - Void returns undefined
    - We must do type annotations in case of function,Cause it may produce bugs
    - We could also set the return type to undefined in that case we had to atleast return/ return undefined/ return null
*/
function add(n1: { number: string }): void {
    console.log(n1);
}
add({ number: "Wahid", n: 9 });

/*
    Function Types
    (a: number, b: string) => number -> We specifized the function by declaring two params with their types, And the returning value type
*/
let funcPlaceholder: (a: number, b: string) => number;
const demoFunc = (value: string): { data: string } => {
    return {
        data: "Wahic" + value,
    };
};

/*
    Function Callback
    (a: number, b: string) => number -> We specifized the function by declaring two params with their types, And the returning value type
*/
function multiple(val: number, callback: (res: number) => void) {
    const data = 5 * val;
    const result = callback(data);
    console.log(result);
}

multiple(9, (value) => {
    console.log(value);
    return 10;
});

/*
    Function Overriding
        - When we have to maintain a fixed combination then we should implement overriding
        - We have to check multiple conditions  
        - If two combination is mixed like email with hasPhone then it should produce bugs
*/
interface hasPhone {
    name: string;
    no: number;
}

interface hasEmail {
    name: string;
    email: string;
}

//Signature - It should be a UNIQUE COMBINATION
function multipleOverride(type: "email", people: hasEmail): void;
function multipleOverride(type: "number", people: hasPhone): void;

//It is the genaral function Implementation.
//It should consist of all the types
function multipleOverride(
    type: "email" | "number",
    people: hasPhone | hasEmail
) {
    // If type is Email, people must be of hasEmail
    // If type is Phone, people must be of hasPhone
}

/*
    Function Interface/Type Define
        - Implementing in both the following interface/type is correct
        - If we assign the genaral structure of the function, Then we need not declare the params type/return type
        - As they are defined by interface/ type aliasing it will be done auto
*/
interface Add {
    (num1: number, num2: number): number;
}

type Add2 = (num1: number, num2: number) => number;

const addition: Add = (num1, num2) => {
    return num1+num2;
}
addition(5,6)