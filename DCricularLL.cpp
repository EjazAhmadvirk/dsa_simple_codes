#include <iostream>
using namespace std;

// Node class
class Node {
public:
    int data;
    Node* next;

    Node(int val) {
        data = val;
        next = nullptr;
    }
};

// Circular Linked List class
class List {
private:
    Node* tail; // Only need tail pointer in circular list

public:
    List() {
        tail = nullptr;
    }

    // Push at front
    void pushFront(int val) {
        Node* newNode = new Node(val);
        if (!tail) {
            tail = newNode;
            tail->next = tail;
        } else {
            newNode->next = tail->next;
            tail->next = newNode;
        }
    }

    // Push at back
    void pushBack(int val) {
        Node* newNode = new Node(val);
        if (!tail) {
            tail = newNode;
            tail->next = tail;
        } else {
            newNode->next = tail->next;
            tail->next = newNode;
            tail = newNode;
        }
    }

    // Pop from front
    void popFront() {
        if (!tail) {
            cout << "List is empty!" << endl;
            return;
        }
        Node* head = tail->next;
        if (head == tail) {
            delete head;
            tail = nullptr;
        } else {
            tail->next = head->next;
            delete head;
        }
    }

    // Pop from back
    void popBack() {
        if (!tail) {
            cout << "List is empty!" << endl;
            return;
        }
        Node* head = tail->next;
        if (head == tail) {
            delete tail;
            tail = nullptr;
        } else {
            Node* temp = head;
            while (temp->next != tail)
                temp = temp->next;
            temp->next = tail->next;
            delete tail;
            tail = temp;
        }
    }

    // Display list
    void display() {
        if (!tail) {
            cout << "List is empty!" << endl;
            return;
        }
        Node* temp = tail->next;
        do {
            cout << temp->data << " -> ";
            temp = temp->next;
        } while (temp != tail->next);
        cout << "(head)" << endl;
    }
};


int main() {
    List cll;

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

    return 0;
}
