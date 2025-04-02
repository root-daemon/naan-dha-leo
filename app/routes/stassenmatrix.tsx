import React from "react";

export default function qs() {
  return (
    <code className="font-mono opacity-5">
      <pre>
        {`
           #include <bits/stdc++.h>
using namespace std;

vector<vector<int>> add(vector<vector<int>>& A, vector<vector<int>>& B) {
    int n = A.size();
    vector<vector<int>> C(n, vector<int>(n));
    for(int i = 0; i < n; i++)
        for(int j = 0; j < n; j++)
            C[i][j] = A[i][j] + B[i][j];
    return C;
}

vector<vector<int>> subtract(vector<vector<int>>& A, vector<vector<int>>& B) {
    int n = A.size();
    vector<vector<int>> C(n, vector<int>(n));
    for(int i = 0; i < n; i++)
        for(int j = 0; j < n; j++)
            C[i][j] = A[i][j] - B[i][j];
    return C;
}

vector<vector<int>> strassen(vector<vector<int>>& A, vector<vector<int>>& B) {
    int n = A.size();
    
    if (n == 1) {
        vector<vector<int>> C(1, vector<int>(1));
        C[0][0] = A[0][0] * B[0][0];
        return C;
    }
    
    int k = n/2;
    vector<vector<int>> A11(k, vector<int>(k));
    vector<vector<int>> A12(k, vector<int>(k));
    vector<vector<int>> A21(k, vector<int>(k));
    vector<vector<int>> A22(k, vector<int>(k));
    vector<vector<int>> B11(k, vector<int>(k));
    vector<vector<int>> B12(k, vector<int>(k));
    vector<vector<int>> B21(k, vector<int>(k));
    vector<vector<int>> B22(k, vector<int>(k));
    
    for(int i = 0; i < k; i++) {
        for(int j = 0; j < k; j++) {
            A11[i][j] = A[i][j];
            A12[i][j] = A[i][j+k];
            A21[i][j] = A[i+k][j];
            A22[i][j] = A[i+k][j+k];
            B11[i][j] = B[i][j];
            B12[i][j] = B[i][j+k];
            B21[i][j] = B[i+k][j];
            B22[i][j] = B[i+k][j+k];
        }
    }
    
    vector<vector<int>> P1 = strassen(A11, subtract(B12, B22));
    vector<vector<int>> P2 = strassen(add(A11, A12), B22);
    vector<vector<int>> P3 = strassen(add(A21, A22), B11);
    vector<vector<int>> P4 = strassen(A22, subtract(B21, B11));
    vector<vector<int>> P5 = strassen(add(A11, A22), add(B11, B22));
    vector<vector<int>> P6 = strassen(subtract(A12, A22), add(B21, B22));
    vector<vector<int>> P7 = strassen(subtract(A11, A21), add(B11, B12));
    
    vector<vector<int>> C11 = subtract(add(add(P5, P4), P6), P2);
    vector<vector<int>> C12 = add(P1, P2);
    vector<vector<int>> C21 = add(P3, P4);
    vector<vector<int>> C22 = subtract(subtract(add(P5, P1), P3), P7);
    
    vector<vector<int>> C(n, vector<int>(n));
    for(int i = 0; i < k; i++) {
        for(int j = 0; j < k; j++) {
            C[i][j] = C11[i][j];
            C[i][j+k] = C12[i][j];
            C[i+k][j] = C21[i][j];
            C[i+k][j+k] = C22[i][j];
        }
    }
    return C;
}

int main() {
    int n = 4;
    vector<vector<int>> A = {{1, 2, 3, 4},
                            {5, 6, 7, 8},
                            {9, 10, 11, 12},
                            {13, 14, 15, 16}};
                            
    vector<vector<int>> B = {{1, 2, 3, 4},
                            {5, 6, 7, 8},
                            {9, 10, 11, 12},
                            {13, 14, 15, 16}};
    
    vector<vector<int>> result = strassen(A, B);
    
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++)
            cout << result[i][j] << " ";
        cout << endl;
    }
    
    return 0;
}
            `}
      </pre>
    </code>
  );
}
