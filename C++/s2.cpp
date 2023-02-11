// The vector class of cpp is used, try to find the bug in the snippet

#include <iostream>
#include <vector>

int main(){
    std :: vector<int> myVec;
    myVec.push_back(1);
    myVec.push_back(2);
    myVec.push_back(3);

    for(int i=0; i < myVec.size(); i++){
        std :: cout << myVec[i] << std :: endl;
    }
    std :: cout << "Element at index 3: "<< myVec.at(2) << std::endl; // found a bug here, replace 3 with 2, because the indexes are 0,1,2 only
    
    return 0;
}
