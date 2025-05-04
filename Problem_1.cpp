#include <iostream>
using namespace std;
int main(){
	int num[5] = {2,4,6,7,8};
	int sum = 0;
	for(int i=0; i<=4; i++){
		sum= sum + num[i];
	}
	cout<<sum<<endl;
	return 0;
}