import React from "react";

export default function qs() {
  return (
    <code className="font-mono opacity-5">
      <pre>
        {`
           #include <iostream>
#include <vector>
using namespace std;

void merge(vector<int> &arr, int low, int mid, int high) {
  vector<int> temp;
  int left = low;
  int right = mid + 1;
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push_back(arr[left]);
      left++;
    } else {
      temp.push_back(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    temp.push_back(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push_back(arr[right]);
    right++;
  }

  for (int i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

void mergeSort(vector<int> &arr, int low, int high) {
  if (low >= high)
    return;
  int mid = (low + high) / 2;
  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

void printArray(const vector<int> &arr) {
  for (int i = 0; i < arr.size(); i++) {
    cout << arr[i] << " ";
  }
  cout << endl;
}

int main() {
  vector<int> arr = {38, 27, 43, 3, 9, 82, 10};
  
  cout << "Original Array: ";
  printArray(arr);
  
  mergeSort(arr, 0, arr.size() - 1);
  
  cout << "Sorted Array: ";
  printArray(arr);
  
  return 0;
}

            `}
      </pre>
    </code>
  );
}
