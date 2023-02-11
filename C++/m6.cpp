// the below code doesn't work for some values of s. find the bug

#include<iostream>
#include<string>

int main(){
    std :: string s = "\xb8";
    //"\xb8" is a hex value for 184 
    for(int i=0;i < s.length(); i++){
        s[i] = toupper(s[i]);
        
    }

    std::cout << s << std::endl;

    return 0;
}
