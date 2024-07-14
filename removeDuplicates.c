#include<stdio.h>
#define numsSize 3
int main(){
    int nums[numsSize] = {1,1,2}, i,j,k;

    for(i = 0; i<numsSize; i++){
        for(j=i+1; j<numsSize; j++){
            if(nums[i] == nums[j]){
                nums[i] = nums[j];
                for(k=0; k<numsSize; k++){
                    nums[j++] = nums[j+k];
                }
                nums[numsSize-1] = 0;
            }
        }
    }

    i = 0;
    k=0;
    while(nums[i++]!=0){
        k++;
    }

    printf("k = %d", k);
    return 0;
}