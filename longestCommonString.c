#include <stdio.h>
#include <string.h>

char *longestCommonPrefix(char **strs, int strsSize)
{
    int i, j, k;
    for (i = 0; i < strsSize; i++)
    {
        for (j = 0; strs[i][j] != '\0'; j++)
        {
            k = 1;
            if (strs[i][j] == strs[i + k][j])
            {
                printf("%c", strs[i][j]);
            }
            k++;
        }
    }
}

int main()
{
    char *strs[3] = {"flower", "flow", "flight"};
    longestCommonPrefix(strs, 3);
    return 0;
}