// the below code doesn't work for some values of s. find the bug

#include<iostream>
#include<string>

int main(){
    std :: string s = "Hello World";
    for(int i=0;i<s.size();i++){
        if((int)s[i] < 32 || (int)s[i] > 127){
            std::cerr << "The ascii value of the current character is below 32 or above 127" << std::endl;
            return 0;
        }
    }

    for(int i=0;i < s.length(); i++){
        s[i] = toupper(s[i]);
    }

    std::cout << s << std::endl;

    return 1;
}
