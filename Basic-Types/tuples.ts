/*
    Tuples
    - Size & Type declaration is fixed
    - We cant add 3rd element in the array though there is a exception for push
*/
let data: [number, string];

data = [2, 'Wa'];

// data[0] = 'data' -> As 0 index is set to Number we cant enter string
// data[1] = 'data' -> As 1 index is set to string we can enter string
// data[2] = 'data' -> As in tuples size of array is fixed we cant add more element on the array

//This is exception case. Typescript cant control push method. So Although it is of tuple type we can add element using push
data.push(5)

console.log(data)