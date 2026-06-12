import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { query } = await req.json();

  const response = `
# Recursion Explained

Recursion is a programming technique where a function calls itself.

## Example

\`\`\`js
function countDown(n) {
  if (n === 0) return;

  console.log(n);

  countDown(n - 1);
}
\`\`\`

## Key Concepts

- Base case
- Recursive call
- Stack memory

## Why It Matters

Recursion is heavily used in:

- Trees
- Graphs
- Dynamic Programming
- DFS algorithms
`;

  return NextResponse.json({ response });
}