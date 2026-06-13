import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { useStreamText } from "@/hooks/use-stream-text";

type Props = {
  content: string;
};

export function AIResponse({ content }: Props) {
  const streamedText = useStreamText(content);

  return (
    <div className="mt-4 rounded-2xl border bg-muted/30 p-4">
      <div className="mb-3 flex items-center gap-2">
        <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />

        <span className="text-sm font-medium">
          NeuralOS AI
        </span>
      </div>

      <div className="prose prose-sm dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {streamedText}
        </ReactMarkdown>
      </div>
    </div>
  );
}