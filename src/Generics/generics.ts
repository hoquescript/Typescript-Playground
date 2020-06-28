/**
 * (1) Generics allow us to parameterize types in the same way that
 * -   functions parameterize values
 */

// param determines the value of x
function wrappedValue(x: any) {
  return {
    value: x
  };
}

// type param determines the type of x
interface WrappedValue<X> {
  value: X;
}

let val: WrappedValue<string[]> = { value: [] };
val.value;
let datsdfa: WrappedValue<number> = { value: 5 }

/**
 * we can name these params whatever we want, but a common convention
 * is to use capital letters starting with `T` (a C++ convention from "templates")
 */




 
 /**
 * (2) Type parameters can have default types
 * -   just like function parameters can have default values
 */

// for Array.prototype.filter
interface FilterFunction<T = any> {
  (val: T): boolean;
}

const stringFilter: FilterFunction<string> = val => typeof val === "string";
stringFilter(0); // 🚨 ERROR
stringFilter("abc"); // ✅ OK

// can be used with any value
const truthyFilter: FilterFunction = val => val;
truthyFilter(0); // false
truthyFilter(1); // true
truthyFilter(""); // false
truthyFilter(["abc"]); // true

