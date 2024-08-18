#include<iostream>
using namespace std;

int Binary_Search(int arr[],int size, int key){
   int first=0;
   int end=size-1;
   int mid=(first+end)/2;
    while(first<end){
        if(arr[mid]==key){
            return mid;
        }
        //Go to leftmost array
        else if(arr[mid]<key){
            first= mid+1;
        }
        //Go to rightmost array
        else{
            end= mid-1;
        }

        mid=(first+end)/2;
    }
    return -1; //Element not found in the array
}
int main(){
    int size;
    cout<<"Enter the size of array: ";
    cin>>size;
    int arr[size];
    for(int i=0;i<size;i++){
        cout<<"Enter The elements in the list"<<endl;
        cin>>arr[i];
    }

    for(int i=0;i<size;i++){
        cout<<arr[i]<<endl;
    }
    cout<<"Enter The Target Value"<<endl;
    int key;
    cin>>key;

    int result= Binary_Search(arr,size,key);
    if (result!=-1){
        cout<<"The Key value"<<key<<"found at"<<result<<endl;
    }
    else{
        cout<<"key is not present in the array"<<endl;
    }
}