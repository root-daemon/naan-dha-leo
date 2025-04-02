import React from "react";

export default function qs() {
  return (
    <code className="font-mono opacity-5">
      <pre>
        {`
#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

struct Point {
    int x, y;

    // Constructor for convenience
    Point(int x, int y) : x(x), y(y) {}
};

// Function to compare two points
bool compare(Point a, Point b) {
    return a.x < b.x || (a.x == b.x && a.y < b.y);
}

// Cross product of vectors OA and OB
// A positive cross product indicates a counter-clockwise turn, 0 indicates a collinear point, and negative indicates a clockwise turn
int cross_product(Point O, Point A, Point B) {
    return (A.x - O.x) * (B.y - O.y) - (A.y - O.y) * (B.x - O.x);
}

// Function to compute the convex hull
vector<Point> convex_hull(vector<Point>& points) {
    int n = points.size();
    if (n <= 1) return points;

    // Sort the points
    sort(points.begin(), points.end(), compare);

    vector<Point> lower, upper;

    // Build the lower hull
    for (int i = 0; i < n; ++i) {
        while (lower.size() >= 2 && cross_product(lower[lower.size() - 2], lower[lower.size() - 1], points[i]) <= 0)
            lower.pop_back();
        lower.push_back(points[i]);
    }

    // Build the upper hull
    for (int i = n - 1; i >= 0; --i) {
        while (upper.size() >= 2 && cross_product(upper[upper.size() - 2], upper[upper.size() - 1], points[i]) <= 0)
            upper.pop_back();
        upper.push_back(points[i]);
    }

    // Remove the last point of each half because it is repeated at the beginning of the other half
    lower.pop_back();
    upper.pop_back();

    // Concatenate lower and upper hull to get the full convex hull
    lower.insert(lower.end(), upper.begin(), upper.end());
    return lower;
}

int main() {
    // Sample points
    vector<Point> points = {Point(0, 0), Point(1, 1), Point(2, 2), Point(4, 3), Point(3, 1), Point(1, 3), Point(2, 1)};

    // Compute the convex hull
    vector<Point> hull = convex_hull(points);

    // Output the points in the convex hull
    cout << "Convex Hull: " << endl;
    for (const auto& p : hull) {
        cout << "(" << p.x << ", " << p.y << ")" << endl;
    }

    return 0;
}
            `}
      </pre>
    </code>
  );
}
