#include<stdio.h>

int romanToInt(char* s) {
    int i;
    int num=0;
    for(i=0; s[i] != '\0'; i++){
        if(s[i] == 'M'){
            num+=1000;
        }
        else if(s[i] == 'D'){
            num+=500;
        }
        else if(s[i] == 'C'){
            num+=100;
        }
        else if(s[i] == 'L'){
            num+=50;
        }
        else if(s[i] == 'X'){
            num+=10;
        }
        else if(s[i] == 'V'){
            num+=5;
        }
        else if(s[i] == 'I'){
            num+=1;
        }
    }

    return num;
}

int main(){
    int a;

    a = romanToInt("MCMXCIV");

    printf("%d", a);
    return 0;
}