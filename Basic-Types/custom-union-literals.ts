/*
    Custom Types
    - We can store complicated/compound types in a custom variable types so that we can easily define
*/
type Combinable =  number | string
type Status = 'married' | 'unmarried'
/*
    Union
    - We can store multiple type of value using or'|' operator 
*/
let value: Combinable;
value = 6;
value = 'data';

/*
    Literal Types
    - We can store hardcore value direct into the types
    - It will accept only those harcodded values we defined during type assignment
    - When we store something on const types it gets literal types of value
*/
const number1 = 23;
function life(status: Status){
    console.log('I am ' + status)
}

life('married');
// life('divorced'); Error