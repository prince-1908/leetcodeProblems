#include <stdio.h>
int main()
{
    int n, i, flag=1;

    printf("Enter num: ");
    scanf("%d", &n);

    for(i=1; i<=n; i++){
        if(i%2 == 0){
            printf(" *");
            printf("\n");
        }
        else if(flag == 1){
            printf("*");
            printf("\n");
            flag = 0;
        }
        else{
            printf("  *");
            printf("\n");
            flag = 1;
        }
    }
    return 0;
}