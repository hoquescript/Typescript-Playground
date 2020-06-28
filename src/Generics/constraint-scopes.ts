/**
 * (4) Type parameters can have constraints
 */

 function arrayToDict<T extends {id: string}> (array: T[]): {[key: string]: T}{
     // Here T means Any Array, It doesntt need to have any specific Qualifications
     // To make sure that T contains object with a property called Id, We have to extend type params in generics
    let out: {[key: string]: T} = {};
    array.forEach(arr => {
        // If we are not extending Id to generics, We will get error because TS doesnt know if there is a property called ID
        out[arr.id] = arr;
    })
    return out; 
}

const myDict = arrayToDict([
  { id: "a", value: "first", lisa: "Huang" },
  { id: "b", value: "second" }
]);

myDict.doo.
/**
 * (5) Type parameters are associated with scopes, just like function arguments
 */

function startTuple<T>(a: T) {
  return function finishTuple<U>(b: U) {
    return [a, b] as [T, U];
  };
}
const myTuple = startTuple(["first"])(42);


/**
 * (6) When to use generics
 *
 * - Generics are necessary when we want to describe a relationship between
 * - two or more types (i.e., a function argument and return type).
 *
 * - aside from interfaces and type aliases, If a type parameter is used only once
 * - it can probably be eliminated
 */

interface Shape {
  draw();
}
interface Circle extends Shape {
  radius: number;
}

// We are not asking for Shape Because we shoul be asking only what we nee
// Should return everything you can
// We will get what we have passed into the Generics  
function drawShapes1<S extends Shape>(shapes: S[]) : s[]{
  shapes.forEach(s => s.draw());
}

function drawShapes2(shapes: Shape[]) {
  // this is simpler. Above type param is not necessary
  shapes.forEach(s => s.draw());
}
