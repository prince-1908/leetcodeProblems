#include<stdio.h>
int main(){
    int arr[5] = {2,3,5,7,1};
    int target = 7;
    int index[2];
    int i,j;

    for(i=0; i<5; i++){
        for(j=i+1; j<5; j++){
            if(arr[i] + arr[j] == target){
                index[0] = i;
                index[1] = j;
                break;
            }
        }
    }

    printf("%d %d", index[0], index[1]);
    return 0;
}