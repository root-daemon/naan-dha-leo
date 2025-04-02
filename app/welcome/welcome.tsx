import { Link } from "react-router";

export function Welcome() {
  return (
    <main className="flex flex-col gap-4 h-screen opacity-15 items-center justify-center pt-16 pb-4">
      <Link to="/is">Insertion Sort</Link>
      <Link to="/bsort">Bubble Sort</Link>
      <Link to="/bins">Bin Search</Link>
      <Link to="/ms">MergeSort</Link>
      <Link to="/qs">Quicksort</Link>
      <Link to="/stassenmatrix">Stassen Matrix</Link>
      <Link to="/convexhull">Convex Hull</Link>
      <Link to="/huffman">Huffman</Link>
      <Link to="/knapsack">Knapsack</Link>
    </main>
  );
}
