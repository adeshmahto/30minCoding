#include <stdio.h>
#include <string.h>
//strcpm
int main() {
    char str1[20] = "Hello";
    char str2[20] = "Hello";
    int result = strcmp(str1, str2);
    if (result == 0) {
        printf("The strings are equal\n");
    } else if (result < 0) {
        printf("str1 is smaller\n");
    } else {
        printf("str2 is smaller\n");
    }
    return 0;
}

