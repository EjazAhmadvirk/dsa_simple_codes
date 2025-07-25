class ListNode {
    value: number;
    next: ListNode | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: ListNode | null;
    tail: ListNode | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Add to the end of the list
    pushBack(value: number): void {
        const newNode = new ListNode(value);
        
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
    }

    // Remove from the front of the list
    popFront(): number | null {
        if (!this.head) {
            return null;
        }

        const value = this.head.value;
        this.head = this.head.next;

        // If list becomes empty after removal
        if (!this.head) {
            this.tail = null;
        }

        return value;
    }

    // Print the list (for demonstration)
    printList(): void {
        let current = this.head;
        const values: number[] = [];
        
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        
        console.log(values.join(" -> ") || "List is empty");
    }
}

// Main function to demonstrate usage
function main() {
    const list = new LinkedList();

    // Push elements to the back
    list.pushBack(10);
    list.pushBack(20);
    list.pushBack(30);
    console.log("After pushBack operations:");
    list.printList(); // 10 -> 20 -> 30

    // Pop elements from the front
    console.log("\nPopped from front:", list.popFront()); // 10
    console.log("After popFront:");
    list.printList(); // 20 -> 30

    console.log("\nPopped from front:", list.popFront()); // 20
    console.log("After popFront:");
    list.printList(); // 30

    console.log("\nPopped from front:", list.popFront()); // 30
    console.log("After popFront:");
    list.printList(); // List is empty

    console.log("\nPopped from empty list:", list.popFront()); // null
}

main();
