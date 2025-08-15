public class LinearSearch {
    public static void main(String[] args) {
        int[] arr = {10, 25, 30, 45, 50};  // Example array
        int target = 45;                   // Element to search
        boolean found = false;             // Flag to check if found

        // Linear search loop
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                System.out.println("Element " + target + " found at index: " + i);
                found = true;
                break;
            }
        }

        // If not found
        if (!found) {
            System.out.println("Element " + target + " not found in the array.");
        }
    }
}
