import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { query } = await req.json();

  console.log("Received:", query);

  return NextResponse.json({
  response: `
# React

React is a JavaScript library used to build user interfaces.

## Features

- Component based
- Fast rendering
- Large ecosystem
- Reusable UI

## Example

\`\`\`js
function App() {
  return <h1>Hello World</h1>;
}
\`\`\`
`,
});
}