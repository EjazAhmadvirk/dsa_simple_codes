// Node class
class Node {
    int data;
    Node next;

    public Node(int val) {
        this.data = val;
        this.next = null;
    }
}

// Circular Linked List class
class CircularList {
    private Node tail; // Only need tail pointer in circular list

    public CircularList() {
        tail = null;
    }

    // Push at front
    public void pushFront(int val) {
        Node newNode = new Node(val);
        if (tail == null) {
            tail = newNode;
            tail.next = tail;
        } else {
            newNode.next = tail.next;
            tail.next = newNode;
        }
    }

    // Push at back
    public void pushBack(int val) {
        Node newNode = new Node(val);
        if (tail == null) {
            tail = newNode;
            tail.next = tail;
        } else {
            newNode.next = tail.next;
            tail.next = newNode;
            tail = newNode;
        }
    }

    // Pop from front
    public void popFront() {
        if (tail == null) {
            System.out.println("List is empty!");
            return;
        }
        Node head = tail.next;
        if (head == tail) {
            tail = null;
        } else {
            tail.next = head.next;
        }
    }

    // Pop from back
    public void popBack() {
        if (tail == null) {
            System.out.println("List is empty!");
            return;
        }
        Node head = tail.next;
        if (head == tail) {
            tail = null;
        } else {
            Node temp = head;
            while (temp.next != tail) {
                temp = temp.next;
            }
            temp.next = tail.next;
            tail = temp;
        }
    }

    // Display list
    public void display() {
        if (tail == null) {
            System.out.println("List is empty!");
            return;
        }
        Node temp = tail.next;
        do {
            System.out.print(temp.data + " -> ");
            temp = temp.next;
        } while (temp != tail.next);
        System.out.println("(head)");
    }
}

// Main class
public class Main {
    public static void main(String[] args) {
        CircularList cll = new CircularList();

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
    }
}
