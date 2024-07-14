#include<stdio.h>
int main(){
    char arr[6] = {'(',')', '{', '}', '['};
    int i,j,flag=1;

    for(i=0; i<6; i=i+2){
        if((arr[i] == '(' && arr[i+1] == ')') || (arr[i] == '{' && arr[i+1] == '}') || (arr[i] == '[' && arr[i+1] == ']')){
            continue;
        }
        printf("not valid");
        flag=0;
        break;
    }

    if(flag == 1){
        printf("valid");
    }
    return 0;
}