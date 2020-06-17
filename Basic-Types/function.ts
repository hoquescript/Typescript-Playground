/*
    Void
    - Void returns undefined
    - We could also set the return type to undefined in that case we had to atleast return/ return undefined/ return null
*/
function add(n1: number) : void{
    console.log(n1)
}

/*
    Function Types
    (a: number, b: string) => number -> We specifized the function by declaring two params with their types, And the returning value type
*/
let funcPlaceholder: (a: number, b: string) => number

/*
    Function Callback
    (a: number, b: string) => number -> We specifized the function by declaring two params with their types, And the returning value type
*/
function multiple(val: number, callback: (res: number) => void) {
    const data = 5 * val;
    const result = callback(data);
    console.log(result)
}

multiple(9, (value) => {
    console.log(value);
    return 10;
})