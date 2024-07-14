#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define size 5
int main()
{
    char s[size];
    int i,j,flag=0;
    char newS[size];
    gets(s);

    j=0;

    for (i = size - 1; i >= 0; i--)
    {
        newS[i] = s[j];
        j++;
    }

    newS[j] = '\0';

    printf("%s\n", newS);
    
    printf("%d",strlen(s));

    (flag == 0) ? printf("palidrome") : printf("not");
    return 0;
}