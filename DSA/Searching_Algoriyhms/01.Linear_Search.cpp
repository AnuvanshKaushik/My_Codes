#include <iostream>
using namespace std;

int linear_search(int arr[],int key,int n){
    for(int i=0;i<n;i++){               
        if (arr[i]==key){
            return i; //Return the index 
        }
    }
    return -1; //Key not found
}
int main(){
    
    int n;
    cout<<"Enter the Size of the array"<<endl;
    cin>>n;
    int arr[n];
    cout<<"Enter The Array"<<endl;

    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    for(int i=0;i<n;i++){
        cout<<arr[i]<<" ";
    }
    cout<<"Enter the key Vlue"<<endl;
    int key;
    cin>>key;

    int result= linear_search(arr,key,n);
    
    if (result!=-1){
        cout<<"The Key value"<<key<<"found at"<<result<<endl;
    }
    else{
        cout<<"key is not present in the array"<<endl;
    }
}