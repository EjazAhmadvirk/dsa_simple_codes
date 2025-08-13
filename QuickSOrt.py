# Function to swap two elements
def swap(arr, i, j):
    arr[i], arr[j] = arr[j], arr[i]

# Partition function
def partition(arr, low, high):
    pivot = arr[high]  # Last element as pivot
    i = low - 1        # Index of smaller element

    for j in range(low, high):
        if arr[j] < pivot:
            i += 1
            swap(arr, i, j)
    
    swap(arr, i + 1, high)
    return i + 1

# Quick Sort function
def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)

        # Recursively sort elements before and after partition
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

# Example usage
arr = [10, 7, 8, 9, 1, 5]

print("Original array:", arr)

quick_sort(arr, 0, len(arr) - 1)

print("Sorted array:", arr)
