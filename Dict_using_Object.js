// Creating a dictionary (object)
let person = {
    name: "Ejaz",
    age: 21,
    skills: ["JavaScript", "React", "Python"]
};

// Accessing values
console.log(person.name);       // Ejaz
console.log(person["age"]);     // 21

// Adding / Updating
person.country = "Pakistan";    // Add new key
person.age = 22;                // Update existing

// Removing
delete person.skills;           // Remove a key
