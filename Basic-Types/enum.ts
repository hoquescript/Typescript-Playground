
const Admin = 'Admin';
const Member = 'Member';

const persons = {
    name: "Wahid",
    age: "19",
    category: [2, "data"],
    role: Admin
};

/*
    ENUM
    - It is used to do the upper variable declaration in easier way
    - We can create some constant magic string like things, And we can map it to anywhere error free way
    - Role is a kind of custom types
*/
enum Role {Admin, Member}
// enum Role {Admin = 'Admin', Member = 'Member'} //We can manually set values
// enum Role {Admin = 5, Member} // We can set the intial value on the first parameter

const persons1 = {
    name: "Wahid",
    age: "19",
    category: [2, "data"],
    role: Role.Admin
};

console.log(persons1)