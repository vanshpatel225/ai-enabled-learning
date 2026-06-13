"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useStreamText } from "@/hooks/use-stream-text";

type Props = {
  content: string;
};

export function AIResponse({ content }: Props) {
  const streamedText = useStreamText(content);

  return (
    <div className="prose prose-sm dark:prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {streamedText}
      </ReactMarkdown>
    </div>
  );
}