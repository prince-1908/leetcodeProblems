#include <stdio.h>
int main()
{
    int n = 123, i, rev = 0, ld;
    for (i = n; i > 0; i = i / 10)
    {
        ld = i%10;
        rev = rev*10 + ld;
    }
    (rev == n) ? printf("p") : printf("n");
    return 0;
}