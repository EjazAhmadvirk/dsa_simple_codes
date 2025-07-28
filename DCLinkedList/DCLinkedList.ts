// Node class
class Node {
    data: number;
    next: Node | null;

    constructor(val: number) {
        this.data = val;
        this.next = null;
    }
}

// Circular Linked List class
class CircularList {
    private tail: Node | null;

    constructor() {
        this.tail = null;
    }

    // Push at front
    pushFront(val: number): void {
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
    pushBack(val: number): void {
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
    popFront(): void {
        if (!this.tail) {
            console.log("List is empty!");
            return;
        }
        const head = this.tail.next!;
        if (head === this.tail) {
            this.tail = null;
        } else {
            this.tail.next = head.next;
        }
    }

    // Pop from back
    popBack(): void {
        if (!this.tail) {
            console.log("List is empty!");
            return;
        }
        const head = this.tail.next!;
        if (head === this.tail) {
            this.tail = null;
        } else {
            let temp = head;
            while (temp.next !== this.tail) {
                temp = temp.next!;
            }
            temp.next = this.tail.next;
            this.tail = temp;
        }
    }

    // Display list
    display(): void {
        if (!this.tail) {
            console.log("List is empty!");
            return;
        }
        let temp: Node = this.tail.next!;
        const head: Node = temp;
        let result = '';
        do {
            result += temp.data + " -> ";
            temp = temp.next!;
        } while (temp !== head);
        console.log(result + "(head)");
    }
}

// Main test
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
