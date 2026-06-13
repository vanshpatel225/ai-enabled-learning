"use client";

import { useState } from "react";
import { useChatStore } from "../store/chat-store";

export function ChatInput() {
  const [message, setMessage] = useState("");

  const addMessage = useChatStore(
    (state) => state.addMessage
  );

  const handleSend = async () => {
  if (!message.trim()) return;

  const userMessage = message;

  addMessage({
    id: crypto.randomUUID(),
    role: "user",
    content: userMessage,
  });

  console.log("STEP 1: User message added");

  setMessage("");

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: userMessage,
      }),
    });

    console.log("STEP 2: Fetch completed");

    const data = await res.json();

    console.log("STEP 3: Data received", data);

    addMessage({
      id: crypto.randomUUID(),
      role: "assistant",
      content: data.response,
    });

    console.log("STEP 4: Assistant message added");
  } catch (error) {
    console.error("ERROR:", error);
  }
};

  return (
    <div className="border-t p-4">
      <div className="flex gap-2">
        <input
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          placeholder="Send a message..."
          className="flex-1 rounded-lg border p-3"
        />

        <button
          onClick={handleSend}
          className="rounded-lg border px-4"
        >
          Send
        </button>
      </div>
    </div>
  );
}