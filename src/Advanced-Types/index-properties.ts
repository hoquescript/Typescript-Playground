/*
    Index Properties/ Dictionary
        - When we dont know the key-name & the number of dynamic properties
        - The properties of an object are dynamic or Some of the properties are dynamic  
        - When we are sure about the value type of the key
        - We cant assign union/intersection type on the key
*/
interface ErrorContainer{
    // The type of the fixed key should be of the same type as the dynamic key
    // id: number,
    [keyName: string]: undefined | {
        error: string,
        codeLine: number 
    }
}

//As there is an interface below reqyuiring phone property so we must provide
const objectify: ErrorContainer = {
    email: {
        error: 'Whaid',
        codeLine:10
    },
    phone:{
        codeLine: 9,
        error: 'fade'
    }
}

interface ErrorContainer{
    phone:{
        error: string,
        codeLine: number 
    }
}


// The following one is valid as ErrorContainer has got optional key allocation
const errors:ErrorContainer = {};

// Although there is no key called "data" in error object but it got the type declaration
// As it is dynamic interface, So it accepts all prototype
errors.data