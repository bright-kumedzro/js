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

