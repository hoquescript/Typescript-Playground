
// The basic consept of Singleton pattern is that it can only have one instance of a Class
// We do this by implementing private constructor

class Singleton{
    private static instance: Singleton;
    // As this is private we cant create instance using new, So we should implement it in static Way
    private constructor(private name: string){
        this.name = name;
    }
    static getInstance(value: string){
        // WE must need to use ClaseName "Singleton" when we are in a non staric method
        if(Singleton.instance)
            // As this is a static method, This "this" will refer to the static instance variable
            // The instance is already there so we are re-returning it
            return this.instance
        // We are creating a new instance of it, And storing it in its property
        this.instance = new Singleton(value);
        return this.instance;
    }
}

const singleton1 = Singleton.getInstance('Wahid')
const singleton2 = Singleton.getInstance('value')
const singleton3 = Singleton.getInstance('value')
console.log({singleton1, singleton2})