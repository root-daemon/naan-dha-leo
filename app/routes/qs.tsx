import React from "react";

export default function qs() {
  return (
    <code className="font-mono opacity-5">
      <pre>
        {`
            #include <iostream>
using namespace std;

void quicksort(int arr[], int low, int high) {
  if (low < high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        swap(arr[i], arr[j]);
      }
      swap(arr[i + 1], arr[high]);
      int pivotIndex = i + 1;
      quicksort(arr, low, pivotIndex - 1);
      quicksort(arr, pivotIndex + 1, high);
    }
  }
}

            `}
      </pre>
    </code>
  );
}
