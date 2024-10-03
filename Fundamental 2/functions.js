// Function Declaration
function fruitProcessor(apples,oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}


console.log(fruitProcessor(2,5));



// Function Expression

const fruitProcessor2 = function(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}



// Arrow Function

// let birthYear = 2000;
// const calcAge = birthYear => 2037 - birthYear;
// const age = calcAge(1992);
// console.log(age)

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = (firstName,birthYear) => {
    // const age = 2037 - birthYear;
    const age = calcAge(birthYear);
    const retirementAge = 65 - age;
    return `${firstName} retires in ${retirementAge} years`;
}

console.log(yearsUntilRetirement("Amo",1992));