#include <stdio.h>
#include <string.h>
int main()
{
    char s[10];
    int i, n, j=0;
    char newStr[10];
    printf("Enter string: ");
    gets(s);

    for(i = strlen(s)-1; i>=0; i--){
        newStr[j++] = s[i];
    }

    newStr[j] = '\0';
    printf("new String: %s", newStr);
    return 0;
}