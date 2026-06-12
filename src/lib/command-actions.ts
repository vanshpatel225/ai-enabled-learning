export type CommandAction = {
  id: string;
  title: string;
  description?: string;
  keywords: string[];
  action: () => void;
};

export const createCommandActions = (router: any): CommandAction[] => [
  {
    id: "open-dashboard",
    title: "Open Dashboard",
    description: "Go to main home screen",
    keywords: ["home", "dashboard", "main"],
    action: () => router.push("/"),
  },
  {
    id: "open-learning",
    title: "Learning Hub",
    description: "Start learning session",
    keywords: ["learn", "study", "education"],
    action: () => router.push("/learning"),
  },
  {
    id: "open-chat",
    title: "AI Chat",
    description: "Talk with AI assistant",
    keywords: ["chat", "ai", "assistant", "gpt"],
    action: () => router.push("/chat"),
  },
  {
    id: "search-mode",
    title: "Search Everything",
    description: "Global search system",
    keywords: ["search", "find", "lookup"],
    action: () => router.push("/search"),
  },
];