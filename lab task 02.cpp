#include<iostream>
using namespace std;

int main() {
    int x = 50; 
    int *p = &x; 

    cout << "Value of x \t" << x << endl;
    cout << "Value of x using pointer \t " << *p << endl;
    cout << "Address of pointer \t" << &p << endl;
    cout<<p;

    return 0;
}