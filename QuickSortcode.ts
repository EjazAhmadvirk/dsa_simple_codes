// Function to swap two elements
function swap(arr: number[], i: number, j: number): void {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// Partition function to place pivot in correct position
function partition(arr: number[], low: number, high: number): number {
    let pivot = arr[high]; // Taking last element as pivot
    let i = low - 1;       // Index of smaller element

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) { // If current element is smaller than pivot
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
}

// Quick Sort function
function quickSort(arr: number[], low: number, high: number): void {
    if (low < high) {
        let pi = partition(arr, low, high);

        // Recursively sort elements before and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

// Example usage
let arr: number[] = [10, 7, 8, 9, 1, 5];

console.log("Original array:", arr);

quickSort(arr, 0, arr.length - 1);

console.log("Sorted array:", arr);
