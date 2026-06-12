import { useState } from "react";

export function useAICommand() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const askAI = async (query: string) => {
    setLoading(true);
    setResult("");

    const res = await fetch("/api/ai", {
      method: "POST",
      body: JSON.stringify({ query }),
    });

    const data = await res.json();

    setResult(data.response);
    setLoading(false);
  };

  return { askAI, loading, result };
}
