class Node {
    data: number;
    next: Node | null;

    constructor(value: number) {
        this.data = value;
        this.next = null;
    }
}

class Queue {
    private front: Node | null;
    private rear: Node | null;

    constructor() {
        this.front = null;
        this.rear = null;
        console.log("Queue initialized.");
    }

    // Enqueue: add to rear
    enqueue(value: number): void {
        const newNode = new Node(value);
        if (!this.rear) {
            // empty queue
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        console.log(`${value} enqueued.`);
    }

    // Dequeue: remove from front
    dequeue(): void {
        if (!this.front) {
            console.log("Queue Underflow! Nothing to dequeue.");
            return;
        }
        const removed = this.front.data;
        const temp = this.front;
        this.front = this.front.next;
        // if we removed the last node, update rear
        if (!this.front) this.rear = null;
        // In TypeScript/JavaScript, we don't need to manually free memory
        console.log(`${removed} dequeued.`);
    }

    // Display all elements
    display(): void {
        if (!this.front) {
            console.log("Queue is empty.");
            return;
        }
        let output = "Queue elements: ";
        let current: Node | null = this.front;
        while (current) {
            output += `${current.data} `;
            current = current.next;
        }
        console.log(output);
    }
}

// Example usage
function main() {
    const q = new Queue();

    q.enqueue(5);
    q.enqueue(15);
    q.enqueue(25);
    q.display();     // 5 15 25

    q.dequeue();     // removes 5
    q.display();     // 15 25

    q.dequeue();
    q.dequeue();
    q.dequeue();     // underflow
}

main();
