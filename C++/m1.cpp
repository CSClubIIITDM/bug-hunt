// find the longest pallindrome in the string.

#include <iostream>
using namespace std;

class Solution
{
public:
    bool isPalindrome(string s)
    {
        int i = 0, j = s.size();

        while (i < j)
        {
            if (s[i++] != s[j--])
                return false;
        }
        return true;
    }

    string longestPalindrome(string s)
    {
        int n = s.size();
        int in  = -1;
	    int maxl = 0;
        if (n == 0)
            return "";

        if (n == 1)
            return s;

        string result = "";
        for (int i = 0; i < n ; i++)
        {
            for (int j = i; j <= n; j++)
            {
                if (isPalindrome(s.substr(i, j)) && j-i-1>maxl)
                {
                    maxl=j-i+1;

                    if (result.size() < j)
                        result = s.substr(i, j + 1);
                }
            }
        }
        return result;
    }
};

int main(){
    Solution ob;
	string word = "findnitianhere";
	cout << ob.longestPalindrome(word) << endl;
	return 0;
}