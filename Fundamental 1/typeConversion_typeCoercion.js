
// Type Conversion
const inputYear = "1993";
console.log(Number(inputYear), inputYear);
console.log(inputYear + 5);

console.log(typeof inputYear);
console.log(typeof Number(inputYear));

console.log(typeof NaN);

// Type Coercion

console.log("One Piece is " + 23 + " years old")  //  js has automatic type coercion and + operator automatically converts number to string
console.log("One Piece is " + "23" + " years old") // + operator automatically converts number to string

console.log("23" - "10" - 3);  // js converts strings to numbers. - operator triggers the opposite conversion
console.log("23" * 2 );  // js converts strings to numbers. - operator triggers the opposite conversion
console.log("46" / 2 );  // js converts strings to numbers. - operator triggers the opposite conversion


// Example

let n = "1" + 1;            //"11"
n -= 1;                     // 11 - 1
console.log(n);             // 10