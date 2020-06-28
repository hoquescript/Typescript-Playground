function merge (a: object, b: object): object{
    return Object.assign(a,b)
}

/*
    As we are Using T,U this variable can be of Any type
*/
function mergeGeneric <T, U> (a: T, b: U){
    return Object.assign(a,b)
}

/*
    We are declaring the variable Type Here
    We must pass the value of the extended type
*/ 
function mergeGenericCustomType <T extends object, U extends object> (a: T, b: U){
    return Object.assign(a,b)
}

/*
    Under the Hood TS auto infer the type of mergeGeneric as:
    const data1 = mergeGeneric<{name: string},{age: string}>({name:'Wahid'},{age:19});
*/
const data1 = mergeGeneric({name:'Wahid'},{age:19});
console.log(data1.age)
data1.