import React from "react";

export default function qs() {
  return (
    <code className="font-mono opacity-5">
      <pre>
        {`
            #include <iostream>
#include <vector>
using namespace std;

int binarySearch(const vector<int>& arr, int target) {
    int low = 0;
    int high = arr.size() - 1;

    while (low <= high) {
        int mid = low + (high - low) / 2;  // To avoid overflow

        // Check if target is present at mid
        if (arr[mid] == target) {
            return mid;  // Target found, return the index
        }

        // If target is greater, ignore the left half
        if (arr[mid] < target) {
            low = mid + 1;
        }
        // If target is smaller, ignore the right half
        else {
            high = mid - 1;
        }
    }

    // Target is not present in the array
    return -1;
}

void printResult(int result) {
    if (result != -1) {
        cout << "Element found at index " << result << endl;
    } else {
        cout << "Element not found in the array" << endl;
    }
}

int main() {
    vector<int> arr = {2, 3, 4, 10, 40, 50, 60, 100};
    int target = 10;
    
    int result = binarySearch(arr, target);
    
    printResult(result);
    
    return 0;
}
            `}
      </pre>
    </code>
  );
}
