export type CommandItem = {
  title: string;
  description?: string;
  href?: string;
  action?: () => void;
};

export const commandData: CommandItem[] = [
  {
    title: "Dashboard",
    description: "Go to main dashboard",
    href: "/",
  },
  {
    title: "Learning",
    description: "Open learning module",
    href: "/learning",
  },
  {
    title: "AI Chat",
    description: "Open AI assistant",
    href: "/chat",
  },
  {
    title: "Search",
    description: "Search everything",
    href: "/search",
  },
  {
    title: "Settings",
    description: "App preferences",
    href: "/settings",
  },
];