#include<iostream>
using namespace std;
int main(){
	int num[5] = {5,9,3,8,7};
	int target =8;
	for(int i=0; i <= 4; i++){
		if(num[i] == target){
			cout<<target<<"is a targer number and it is equal to this element of array"<<num[i]<<endl;
		}
	}
	return 0;
}