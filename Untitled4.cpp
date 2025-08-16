
#include<iostream>
using namespace std;

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    int *e= arr; 

    cout << "Initial e value: " << e << endl;
    cout << "Value at the *e " << *e << endl;

    
    e++;
    cout << "After incrementing  " << e << endl;
    cout << "Value at the *e: " << *e << endl;

    
    e--;
    cout << "After decrementing e " << e << endl;
    cout << "Value at the *e " << *e << endl;

    return 0;
}
