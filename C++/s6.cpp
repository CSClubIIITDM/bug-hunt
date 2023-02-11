// to find the largest sum of subarray
#include <iostream>
using namespace std;

int maxSubArraySum(int a[], int size)
{
    // change INT_MIN to 0
    int max_so_far = 0;
    int max_ending_here = 0;

    for (int i = 0; i < size; i++)
    {
        max_ending_here = max_ending_here + a[i];
        if (max_so_far < max_ending_here)
            max_so_far = max_ending_here;

        // if (max_ending_here < 0)//bug
        if (max_ending_here < max_so_far) // solution
            max_ending_here = max_so_far;
    }
    return max_so_far;
}
// solution
int main()
{
    int a[5];
    for (int i = 0; i < 4; i++)
    {
        a[i] = i;
    }
    a[4] = -2;

    int max = maxSubArraySum(a, 5);
    cout << max << endl;
    return 0;
}