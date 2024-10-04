const friends = ["Luffy", "Zoro", "Chopper", 3];
console.log(friends);

const years = new Array(200,5000,"Nami");
console.log(years[0]);

console.log(friends.length)
console.log(friends[friends.length - 1])

// Add elements
friends.push("Usopp");
friends.unshift("Robin"); //Adds element to the beginning of array
friends.unshift("Franky");
console.log(friends);

// Remove elements
friends.pop();
console.log(friends);

friends.shift(); // Remove first element
console.log(friends);

//Finding location of element
console.log(friends.indexOf("Robin"));
console.log(friends.indexOf("Chopper"));

console.log(friends.includes("Robin"));
console.log(friends.includes("Chopper"));
