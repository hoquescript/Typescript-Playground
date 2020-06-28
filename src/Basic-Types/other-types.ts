/*
    Void vs Never
    - Void returns undefined | Never even doesnt return undefined,It crashes that block of script
    - We cant store any data here
    - We use never in case of throwing error,Doing an infinity loop
    - Narrow is extremely specific,It is infinitely narrow it can hold no value. We cant assign any value into it
*/
let air: void = undefined;

/*
    Any vs Unknown
    - Any supports any types | Unknown supports any type, But it forces us to do things conditionally
    - We cant assign unknown type variable to a specific type variable
    - We need to handle type checking
*/
let input: unknown;
let values: string;
let datas: never;
// datas = "s"

input = 5;
input = "Max";

//  values = input; We cant assign here
if (typeof input === "string") {
    values = input;
}
