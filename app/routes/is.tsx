import React from "react";

export default function qs() {
  return (
    <code className="font-mono opacity-5">
      <pre>
        {`
#include <iostream>
#include <vector>
using namespace std;

void insertionSort(vector<int> &arr) {
    int n = arr.size();
    for (int i = 1; i < n; i++) {
        int key = arr[i]; // Element to be inserted
        int j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

void printArray(const vector<int> &arr) {
    for (int i = 0; i < arr.size(); i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main() {
    vector<int> arr = {12, 11, 13, 5, 6};
    
    cout << "Original Array: ";
    printArray(arr);
    
    insertionSort(arr);
    
    cout << "Sorted Array: ";
    printArray(arr);
    
    return 0;
}
            `}
      </pre>
    </code>
  );
}
