// find the longest pallindrome in the string.

#include <iostream>
using namespace std;

class Solution
{
public:
    bool isPalindrome(string s)
    {
        int i = 0, j = s.size()-1;

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
        if (n == 0)
            return "";

        if (n == 1)
            return s;

        string result = "";
        for (int i = 0; i < n; i++)
        {
            for (int j = i + result.size(); j <= n; j++)
            {
                if (isPalindrome(s.substr(i, j)))
                {
                    result = s.substr(i, j);
                }
            }
        }
        return result;
    }
};
