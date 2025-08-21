# Node class
class Node:
    def __init__(self, data):
        self.data = data   # Store data
        self.next = None   # Pointer to the next node


# Linked List class
class LinkedList:
    def __init__(self):
        self.head = None   # Initially empty list

    # Insert new node at the end
    def insert(self, data):
        new_node = Node(data)
        if self.head is None:   # If list is empty
            self.head = new_node
        else:
            temp = self.head
            while temp.next:    # Traverse to the last node
                temp = temp.next
            temp.next = new_node

    # Display all nodes
    def display(self):
        temp = self.head
        if temp is None:
            print("Linked List is empty")
            return
        while temp:
            print(temp.data, end=" -> ")
            temp = temp.next
        print("None")


# Example usage
ll = LinkedList()
ll.insert(10)
ll.insert(20)
ll.insert(30)
ll.insert(40)

ll.display()
