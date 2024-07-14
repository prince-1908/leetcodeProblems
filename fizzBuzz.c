#include<stdio.h>
int main(){
    int n;
    int i;
    printf("Enter number: ");
    scanf("%d",&n);

    for(i=1; i<=n; i++){
        if(i%3 == 0 && i%5==0){
            printf("%s", "FIZZBUZZ");
        }
        else if(i%3==0){
            printf("%s\n", "FIZZ");
        }
        else if(i%5==0){
            printf("%s\n", "BUZZ");
        }
        else{
            printf("%d\n", i);
        }
    }
    return 0;
}