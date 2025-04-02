import React from "react";

export default function qs() {
  return (
    <code className="font-mono opacity-5">
      <pre>
        {`
           #include <iostream>
#include <vector>
using namespace std;

void bubbleSort(vector<int> &arr) {
    int n = arr.size();
    for (int i = 0; i < n - 1; i++) {
        // Flag to detect if any swapping is done in this pass
        bool swapped = false;
        
        // Last i elements are already in place, so no need to check them
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements if they are in the wrong order
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        
        // If no elements were swapped, the array is already sorted
        if (!swapped) {
            break;
        }
    }
}

void printArray(const vector<int> &arr) {
    for (int i = 0; i < arr.size(); i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main() {
    vector<int> arr = {64, 34, 25, 12, 22, 11, 90};
    
    cout << "Original Array: ";
    printArray(arr);
    
    bubbleSort(arr);
    
    cout << "Sorted Array: ";
    printArray(arr);
    
    return 0;
}
            `}
      </pre>
    </code>
  );
}
