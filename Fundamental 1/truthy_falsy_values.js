// Type Conversion and Coercion with boolean values

// 5 falsy values
// 0 , '', undefined, null and NaN
// They're not false values but will become false when converted to a boolean

console.log(Boolean(0)); // false
console.log(Boolean('')); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean("John")); // false
console.log(Boolean({})); // false

const money = 0;
if (money){
    console.log("Don't spend it all!");
}
else {
    console.log("You're broke!");
}

let height;
if (height) {
    console.log("Height is defined");
}
else {
    console.log("Height is UNDEFINED");
}