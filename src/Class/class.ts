
class Person {

    // id: string;
    // // We can initialize value here, If value is not provided/initialized it will be the default value
    // employees: string[] = [];
    // stuffData: string;
    // constructor(id: string, employees: string[], stuffData: string) {
    //     this.id = id;
    //     this.employees = employees;
    //     this.stuffData = stuffData;
    // }

    /*
        Access Modifier Keywords
            -> public - EveryOne
            -> private - only me
            -> protected - me and subclasses
            -> readonly - Once this Keyword is initalized, We cant reassign value
        # Using Access Modifiers We get three benifits 
            - We dont need to set property type as first
            - We can define privacy of each property
            - Properties are auto initialized
    */
    constructor(private readonly id: string, public employees: number[], protected stuffData: string){
        // We dont need to initialize anything based on the parameters provided here
        // We may add additional initialization here
    }
    describe() {
        console.log(this.employees);
    }

    prescribe() {
        console.log(this.stuffData);
    }
}
    //Here readonly works like const type, Once this propety is initialized we cant reassign
    const Wahid = new Person("d1", [2,3,4], "Wahid");

const WahidCopy = { describe: Wahid.describe };
WahidCopy.describe();

class Stuff extends Person {
    // Typescript thinks that,Maybe somewhere in the class we will be asking for the property,
    // But as there is no surity of geting value,Thats Why Error Comes
    // We can do by either initializing / Set data type as undefined / Definite Assignment Operator
    private data: string | undefined;
    public value!: string;
    constructor(id: string, name: string) {
        super(id, [1,24,4], name);
        this.stuffData = "data";
    }
    //Method Overriding
    prescribe() {
        //Additional Logic
        console.log(this.name);
    }
    get getData() {
        return this.data;
    }
    set setData(data: string) {
        if(data) {
            this.data = data;
        }
        else throw console.error();
    }
}

const Rakib = new Stuff("d3", "Rakib");
/*
    - Although getData / setData are methods we have to use them as property
*/
console.log(Rakib.getData);
Rakib.setData = "Setting data as property"

/*
    - We can get static data directly without instancing
    - To use static property in methods,The mthods must be of static type
*/
console.log(Stuff.value)