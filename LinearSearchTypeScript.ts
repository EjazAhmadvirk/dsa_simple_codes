// Linear Search in TypeScript

let arr: number[] = [10, 25, 30, 45, 50]; // Example array
let target: number = 45;                  // Element to search
let found: boolean = false;               // Flag to check if found

// Linear search loop
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        console.log(`Element ${target} found at index: ${i}`);
        found = true;
        break;
    }
}

// If not found
if (!found) {
    console.log(`Element ${target} not found in the array.`);
}
