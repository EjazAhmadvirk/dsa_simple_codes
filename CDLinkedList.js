// Node class
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

// Circular Linked List class
class CircularList {
    constructor() {
        this.tail = null;
    }

    // Push at front
    pushFront(val) {
        const newNode = new Node(val);
        if (!this.tail) {
            this.tail = newNode;
            this.tail.next = this.tail;
        } else {
            newNode.next = this.tail.next;
            this.tail.next = newNode;
        }
    }

    // Push at back
    pushBack(val) {
        const newNode = new Node(val);
        if (!this.tail) {
            this.tail = newNode;
            this.tail.next = this.tail;
        } else {
            newNode.next = this.tail.next;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Pop from front
    popFront() {
        if (!this.tail) {
            console.log("List is empty!");
            return;
        }
        const head = this.tail.next;
        if (head === this.tail) {
            this.tail = null;
        } else {
            this.tail.next = head.next;
        }
    }

    // Pop from back
    popBack() {
        if (!this.tail) {
            console.log("List is empty!");
            return;
        }
        const head = this.tail.next;
        if (head === this.tail) {
            this.tail = null;
        } else {
            let temp = head;
            while (temp.next !== this.tail) {
                temp = temp.next;
            }
            temp.next = this.tail.next;
            this.tail = temp;
        }
    }

    // Display list
    display() {
        if (!this.tail) {
            console.log("List is empty!");
            return;
        }
        let temp = this.tail.next;
        const head = temp;
        let result = '';
        do {
            result += temp.data + " -> ";
            temp = temp.next;
        } while (temp !== head);
        console.log(result + "(head)");
    }
}

// Test the Circular Linked List
const cll = new CircularList();

cll.pushBack(10);
cll.pushFront(5);
cll.pushBack(20);
cll.display(); // 5 -> 10 -> 20 -> (head)

cll.popFront();
cll.display(); // 10 -> 20 -> (head)

cll.popBack();
cll.display(); // 10 -> (head)

cll.popBack();
cll.display(); // List is empty!
