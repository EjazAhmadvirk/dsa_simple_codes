# We implement Queue using a linked list in Python

class Node:
    def __init__(self, value):
        self.data = value
        self.next = None

class Queue:
    def __init__(self):
        self.front = None
        self.rear = None

    # Enqueue operation
    def enqueue(self, value):
        new_node = Node(value)
        if self.rear is None:
            self.front = self.rear = new_node
        else:
            self.rear.next = new_node
            self.rear = new_node
        print(f"{value} enqueued successfully.")

    # Dequeue operation
    def dequeue(self):
        if self.is_empty():
            print("Queue is empty. Cannot dequeue.")
            return
        temp = self.front
        self.front = self.front.next

        # If queue becomes empty
        if self.front is None:
            self.rear = None

        print(f"{temp.data} dequeued successfully.")
        del temp

    # Peek at the front element
    def peek(self):
        if self.is_empty():
            print("Queue is empty.")
        else:
            print(f"Front element: {self.front.data}")

    # Check if queue is empty
    def is_empty(self):
        return self.front is None

    # Display all elements
    def display(self):
        if self.is_empty():
            print("Queue is empty.")
            return
        temp = self.front
        print("Queue elements:", end=" ")
        while temp:
            print(temp.data, end=" ")
            temp = temp.next
        print()

# Main function to test the queue
if __name__ == "__main__":
    q = Queue()

    q.enqueue(10)
    q.enqueue(20)
    q.enqueue(30)

    q.display()       # Output: 10 20 30

    q.peek()          # Output: 10

    q.dequeue()       # Removes 10
    q.display()       # Output: 20 30

    q.dequeue()
    q.dequeue()

    q.dequeue()       # Should show queue is empty

    q.peek()          # Should say queue is empty
