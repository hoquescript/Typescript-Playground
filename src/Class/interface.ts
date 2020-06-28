// the difference between abstract is we only set type definition in interface and abstract class can contain multiple
// Custom Type is flexible, Union vs Interface is clear, strict, Implemented in Class
// It is used to implement same functionality across different class
// Cant add public and private/ Read only is available
// There is no compilation of inteface,It is runtime feature. actually it doesnt exist no output will be genarated
interface Paper {
    // Optional Propety
    paper?: string
    //Optional Mehod
    substract?() : void
}

interface Book extends Paper{
    name: string;
    describe(): void;
}

// Implementing in Object Way
const romance: Book = {
    name: 'Game of Thrones',
    describe: () => {
        console.log('Objcet Implementation')
    }
}

/*
    #Class
        - Implementing an interface means that the instance of this class must have access to all the properties of interface
        - We can implement multiple interface using comma
*/
// Implementing in Class Way
// We can implement multiple interface using comma

class Action implements Book{
    protected name: string;
    constructor(){
        this.name = "Wahid";
    }
    describe(){
        console.log("Class")
    }
}

// Has to have the features of Book Interface
let HarryPotter: Book;

HarryPotter = new Action()


// We can interface function also
interface Add{
    (a: number, b:number): number
}