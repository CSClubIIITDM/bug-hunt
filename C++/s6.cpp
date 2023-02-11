// to find the largest sum of subarray
#include<iostream>
#include<climits>
using namespace std;

int maxSubArraySum(int a[], int size)
{
    int max_so_far = 0, max_ending_here=0;
 
    for (int i = 0; i < size; i++) {
        max_ending_here = max_ending_here + a[i];
        if (max_so_far < max_ending_here)
            max_so_far = max_ending_here;
 
        if (max_ending_here < 0)
            max_ending_here = max_so_far;
    }
    return max_so_far;
}
int main(){
    int arr[]={-5,4,3,-2,1};
    cout<<maxSubArraySum(arr,5);
    return 0;
}