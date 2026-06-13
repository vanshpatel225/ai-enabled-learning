import { ChatSidebar } from "@/features/ai-chat/components/chat-sidebar";
import { ChatWindow } from "@/features/ai-chat/components/chat-window";
import { ChatInput } from "@/features/ai-chat/components/chat-input";

export default function ChatPage() {
  return (
    <div className="flex h-screen">
      <ChatSidebar />

      <div className="flex flex-1 flex-col">
        <ChatWindow />
        <ChatInput />
      </div>
    </div>
  );
}