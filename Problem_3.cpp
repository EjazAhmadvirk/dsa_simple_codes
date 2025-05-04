#include<iostream>
using namespace std;
int main(){
	int num[8]={6,5,8,10,7,4,2,50};
	for(int i=0; i<=7; i++){
		if(num[i]%2 == 0){
			cout<<num[i]<<" is a even number"<<endl;
			
		}
	}
return 0;
}