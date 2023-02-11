// to find the largest sum of subarray
#include<iostream>
//Added a Header file
#include<climits>
using namespace std;

int maxSubArraySum(int a[], int size)
{
    int max_so_far = INT_MIN, max_ending_here;
 
    for (int i = 0; i < size; i++) {
        
        if(max_ending_here<0 && a[i]>0)
        {
            max_ending_here = a[i];
        }
        else
        max_ending_here = max_ending_here + a[i];
        
        if (max_so_far < max_ending_here)
        {
            max_so_far = max_ending_here;
        }
 
        if (max_ending_here < 0)
        {
            max_ending_here = max_so_far;
        }
    }
    return max_so_far;
}

int main(){
    int arr[4] = {-3, -2, -1, 0};
    int max = maxSubArraySum(arr, 4);
    cout << max << endl;
    return 0;
}