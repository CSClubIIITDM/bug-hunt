// find the longest pallindrome in the string.

#include <iostream>
using namespace std;

bool isPalindrome(string s)
{
	int i = 0, j = s.size() - 1;

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
	for (int i = 0; i < n - 1; i++)
	{
		for (int j = 1; j <= n - i; j++)
		{
			if (isPalindrome(s.substr(i, j)))
			{
				if (result.size() < s.substr(i, j).size())
					result = s.substr(i, j);
			}
		}
	}
	return result;
}

int main()
{
	string s = "babad";
	// cout << isPalindrome(s);
	cout << longestPalindrome(s);
	return 0;
}