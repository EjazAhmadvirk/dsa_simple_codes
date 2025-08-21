# Node class
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


# Stack class using Linked List
class Stack:
    def __init__(self):
        self.top = None   # Initially stack is empty

    # Push element onto stack
    def push(self, data):
        new_node = Node(data)
        new_node.next = self.top   # New node points to current top
        self.top = new_node        # Update top
        print(f"Pushed {data}")

    # Pop element from stack
    def pop(self):
        if self.is_empty():
            print("Stack Underflow (empty stack)")
            return None
        popped = self.top.data
        self.top = self.top.next   # Move top down
        print(f"Popped {popped}")
        return popped

    # Peek at the top element
    def peek(self):
        if self.is_empty():
            print("Stack is empty")
            return None
        return self.top.data

    # Check if stack is empty
    def is_empty(self):
        return self.top is None

    # Display stack
    def display(self):
        if self.is_empty():
            print("Stack is empty")
            return
        temp = self.top
        print("Stack elements (top -> bottom): ", end="")
        while temp:
            print(temp.data, end=" -> ")
            temp = temp.next
        print("None")


# Example usage
stack = Stack()
stack.push(10)
stack.push(20)
stack.push(30)

stack.display()

print("Top element is:", stack.peek())

stack.pop()
stack.display()
