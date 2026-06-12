"use client";

import { useEffect, useMemo, useState } from "react";
import { useAICommand } from "@/hooks/use-ai-command";
import { AIResponse } from "@/components/ai/ai-response";
import { useRouter } from "next/navigation";
import { aiCommandRouter } from "@/lib/ai-command-router";  
import { semanticMatch } from "@/lib/semantic-match";
import { createCommandActions } from "@/lib/command-actions";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
    const { askAI, loading, result } = useAICommand();
  const actions = useMemo(() => createCommandActions(router), [router]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setOpen(true);
      }
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  

    const filtered = useMemo(() => {
      if (!query.trim()) return actions;

      const aiResult = aiCommandRouter(query, router);

      if (aiResult) {
        return [
          {
            id: "ai-result",
            title: aiResult.title,
            description: "AI generated action",
            action: aiResult.action,
            keywords: [],
          },
        ];
      }

      return semanticMatch(query, actions);
    }, [query, actions, router]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-start justify-center pt-32 z-50">
      <div className="w-[520px] bg-background border rounded-xl shadow-xl p-3">
        
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask anything… (e.g. 'learn recursion', 'open chat')"
          className="w-full p-2 border rounded-md mb-3"
        />

        <div className="space-y-1">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => {
              if (item.id === "ai-result") {
                askAI(query);
                return;
              }
          
              item.action();
              setOpen(false);
              setQuery("");
            }}
              className="p-2 rounded-md hover:bg-muted cursor-pointer"
            >
              <div className="font-medium">{item.title}</div>
              <div className="text-xs text-muted-foreground">
                {item.description}
              </div>
            </div>
          ))}
        </div>
          {loading && (
          <div className="p-3 text-sm text-muted-foreground">
            Thinking...
          </div>
        )}

        {result && <AIResponse content={result} />}
        </div>
      
    </div>
  );
}