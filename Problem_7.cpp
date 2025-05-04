#include<iostream>
using namespace std;
int main(){
	int num[7]={2,4,5,9,6,7,10};
	int min = 7;
	int max=10;
	for(int i=0;i<=6;i++){
		if(num[i]>min && num[i]<max){
			cout<<"The second maximum number of the array is "<<num[i]<<endl;
		}
	}
	
	return 0;
}