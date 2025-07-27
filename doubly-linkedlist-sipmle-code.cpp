#include<iostream>
using namespace std;

// Node class for a doubly linked list
class Node {
public:
    int data;
    Node* next;
    Node* prev;

    // Constructor to initialize the node
    Node(int val) {
        data = val;
        next = NULL;
        prev = NULL;
    }
};

// DoublyList class to handle the linked list
class DoublyList {
private:
    Node* head;
    Node* tail;

public:
    // Constructor initializes head and tail as NULL
    DoublyList() {
        head = tail = NULL;
    }

    // Function to insert a node at the front of the list
    void push_front(int val) {
        Node* newNode = new Node(val);
        if (head == NULL) {
            head = tail = newNode;
        } else {
            newNode->next = head;
            head->prev = newNode;
            head = newNode;
        }
    }

    // Function to insert a node at the end of the list
    void push_back(int val) {
        Node* newNode = new Node(val);
        if (tail == NULL) {
            head = tail = newNode;
        } else {
            tail->next = newNode;
            newNode->prev = tail;
            tail = newNode;
        }
    }

    // Function to remove a node from the front of the list
    void pop_front() {
        if (head == NULL) {
            cout << "List is empty! Cannot pop from front.\n";
            return;
        }

        Node* temp = head;

        // Only one element
        if (head == tail) {
            head = tail = NULL;
        } else {
            head = head->next;
            head->prev = NULL;
        }
        delete temp;
    }

    // Function to remove a node from the end of the list
    void pop_back() {
        if (tail == NULL) {
            cout << "List is empty! Cannot pop from back.\n";
            return;
        }

        Node* temp = tail;

        // Only one element
        if (head == tail) {
            head = tail = NULL;
        } else {
            tail = tail->prev;
            tail->next = NULL;
        }
        delete temp;
    }

    // Function to display the list from front to back
    void display() {
        Node* temp = head;
        cout << "List: ";
        while (temp != NULL) {
            cout << temp->data << "  ";
            temp = temp->next;
        }
        cout << endl;
    }
};

// Main function to test all operations
int main() {
    DoublyList dll;

    dll.push_front(10);  // List: 10
    dll.push_front(20);  // List: 20 10
    dll.push_back(30);   // List: 20 10 30
    dll.push_back(40);   // List: 20 10 30 40

    dll.display();

    dll.pop_front();     // Removes 20 -> List: 10 30 40
    dll.display();

    dll.pop_back();      // Removes 40 -> List: 10 30
    dll.display();

    return 0;
}
