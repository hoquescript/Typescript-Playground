function getAges(name: string, birthDate: number) {
    //Here we manually declared the types thats why its called Type Assignment
    let age: number;
    age = 2020 - birthDate;
    console.log(`The age of ${name} is ${age}`);
}
getAges("Wahid", 22);

/*
        - Here Typesript automatically gets the types of each properties thats why its called Type Interference
        - If we hover the variable we will be able to see its Type Assignment which is automatically done
        - We will do assignment when we dont assign the value of the variable immidiately
    */
let person = {
    name: "Wahid",
    age: "19",
    category: [2, "data"],
    author: {
        name: "Mosh",
        isPublished: true,
    },
    getValue: () => {
        return 2;
    },
};

/*
