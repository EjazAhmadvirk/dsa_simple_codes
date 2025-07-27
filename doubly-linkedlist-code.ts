// Node class for a doubly linked list
class Node {
    data: number;
    next: Node | null;
    prev: Node | null;

    constructor(val: number) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}

// DoublyList class to handle the linked list
class DoublyList {
    private head: Node | null;
    private tail: Node | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Insert a node at the front of the list
    push_front(val: number): void {
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // Insert a node at the end of the list
    push_back(val: number): void {
        const newNode = new Node(val);
        if (this.tail === null) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    // Remove a node from the front of the list
    pop_front(): void {
        if (this.head === null) {
            console.log("List is empty! Cannot pop from front.");
            return;
        }

        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            if (this.head) this.head.prev = null;
        }
    }

    // Remove a node from the end of the list
    pop_back(): void {
        if (this.tail === null) {
            console.log("List is empty! Cannot pop from back.");
            return;
        }

        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            if (this.tail) this.tail.next = null;
        }
    }

    // Display the list from front to back
    display(): void {
        let temp = this.head;
        let result = "List: ";
        while (temp !== null) {
            result += temp.data + "  ";
            temp = temp.next;
        }
        console.log(result.trim());
    }
}

// Testing all operations
const dll = new DoublyList();

dll.push_front(10);  // List: 10
dll.push_front(20);  // List: 20 10
dll.push_back(30);   // List: 20 10 30
dll.push_back(40);   // List: 20 10 30 40

dll.display();

dll.pop_front();     // Removes 20 -> List: 10 30 40
dll.display();

dll.pop_back();      // Removes 40 -> List: 10 30
dll.display();
