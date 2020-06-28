// We cant create innstance of abstract class
// This class only can be inherited
// Half Class / Half interface
abstract class Department {
    public id: string;
    private employees: string[] = [];
    constructor(id: string, public readonly name: string) {
        this.name = name;
        this.id = id;
    }
    // Here we are not implementing the definition of the function
    // All the class who will be inheriting this class,must have to implement this method
    // We cant set private modifiers in abstract
    private abstract describe(this: Department): void;
}

class IT extends Department {
    private data: string = "value";
    static value: string = "data";
    constructor(id: string, name: string) {
        super(id, name);
    }
    //Abstarct Implementation
    private describe() {
        console.log(this.name);
    }
}

const Shima = new IT("d3", "Rakib");
