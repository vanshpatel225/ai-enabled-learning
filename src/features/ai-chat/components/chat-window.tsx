"use client";

import { ChatMessage } from "./chat-message";
import { useChatStore } from "../store/chat-store";

export function ChatWindow() {
  const messages = useChatStore(
    (state) => state.messages
  );
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="mx-auto max-w-4xl space-y-4">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
          />
        ))}
      </div>
    </div>
  );
}