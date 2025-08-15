# Linear Search in Python

arr = [10, 25, 30, 45, 50]  # Example array
target = 45                 # Element to search
found = False               # Flag to check if found

# Linear search loop
for i in range(len(arr)):
    if arr[i] == target:
        print(f"Element {target} found at index: {i}")
        found = True
        break

# If not found
if not found:
    print(f"Element {target} not found in the array.")
