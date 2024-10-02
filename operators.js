
// Assignment operators
const now = 2024;
const undergrad_year = now - 2020;
console.log(undergrad_year, undergrad_year * 2, undergrad_year / 3, undergrad_year + 4);

let first_name = "John";
let last_name = "Doe";
console.log(first_name + " " + last_name);

let undergrad_month = 10;

undergrad_month += 2;
console.log(undergrad_month);

undergrad_month -= 2;
console.log(undergrad_month);

undergrad_month *= 2;
console.log(undergrad_month);

undergrad_month /= 2;
console.log(undergrad_month);

console.log(undergrad_month++);
console.log(undergrad_month--);

console.log(--undergrad_month);
console.log(++undergrad_month);




// Comparision operators

console.log(++undergrad_month > --undergrad_month);