import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  { path: "qs", file: "routes/qs.tsx" },
  { path: "bsort", file: "routes/bsort.tsx" },
  { path: "is", file: "routes/is.tsx" },
  { path: "ms", file: "routes/ms.tsx" },
  { path: "bins", file: "routes/bins.tsx" },
  { path: "convexhull", file: "routes/convexhull.tsx" },
  { path: "stassenmatrix", file: "routes/stassenmatrix.tsx" },
  { path: "huffman", file: "routes/huffman.tsx" },
  { path: "knapsack", file: "routes/knapsack.tsx" },  
] satisfies RouteConfig;
